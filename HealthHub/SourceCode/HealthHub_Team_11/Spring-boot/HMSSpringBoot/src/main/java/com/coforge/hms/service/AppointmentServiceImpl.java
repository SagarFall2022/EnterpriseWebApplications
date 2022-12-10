package com.coforge.hms.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.coforge.hms.dto.AppointmentDTO;
import com.coforge.hms.model.Appointment;
import com.coforge.hms.repository.AppointmentRepository;

@Service
@Transactional
public class AppointmentServiceImpl implements AppointmentService{

	@Autowired
	private AppointmentRepository dRepo;
	
	private Appointment convertDTOtoModel(AppointmentDTO AppointmentDTO) {
		
		Appointment Appointment = new Appointment();
		
		Appointment.setApptId(AppointmentDTO.getAppointmentId());
		Appointment.settitle(AppointmentDTO.getTitle());
		Appointment.setdoctorid(AppointmentDTO.getdoctorid());
		Appointment.setpname(AppointmentDTO.getpname());
		Appointment.setappointmentdate(AppointmentDTO.getappointmentdate());
	
		
		return Appointment;
	}
	
	/*
	 * Convert Model To DTO
	 */
	private AppointmentDTO convertModelToDTO(Appointment doc) {
		return new AppointmentDTO(doc);
	}

	@Override
	public AppointmentDTO save(AppointmentDTO Appointment) {
		Appointment doc = convertDTOtoModel(Appointment);
		dRepo.save(doc);
		return convertModelToDTO(doc);
	}

	@Override
	public AppointmentDTO update(AppointmentDTO Appointment, long AppointmentId) throws Exception {
		AppointmentDTO cpyAppointment = getById(AppointmentId);
		
		cpyAppointment.setTitle(Appointment.getTitle());
		cpyAppointment.setdoctorid(Appointment.getdoctorid());
		cpyAppointment.setpname(Appointment.getpname());
		cpyAppointment.setappointmentdate(Appointment.getappointmentdate());
	
		
		Appointment doc = convertDTOtoModel(cpyAppointment);
		dRepo.save(doc);
		return convertModelToDTO(doc);
	}

	@Override
	public AppointmentDTO getById(long AppointmentId) throws Exception {
		Appointment Appointment = dRepo.findById(AppointmentId)
				.orElseThrow(() -> new Exception("ID NOT FOUND EXCEPTION ::::" + AppointmentId));
		return convertModelToDTO(Appointment);
	}

	@Override
	public List<AppointmentDTO> getAll() {
		List<Appointment> docList = dRepo.findAll();
		List<AppointmentDTO> docDTOList = new ArrayList<>();
		
		for(Appointment doc : docList) {
			docDTOList.add(convertModelToDTO(doc));
		}
		return docDTOList;
	}

	@Override
	public Map<String, Boolean> delete(long AppointmentId) throws Exception {
		Appointment doc = convertDTOtoModel(getById(AppointmentId));
		
		dRepo.delete(doc);
		Map<String, Boolean> response = new HashMap<>();
		response.put("Delete", Boolean.TRUE);
		
		return response;
	}

	@Override
	public boolean existsByNumber(AppointmentDTO docDto) {
		Appointment doc = dRepo.existsDoctorByAppointmentId(docDto.getAppointmentId());
		if(doc != null) {
			return true;
		}
		else {
			return false;
		}
	}
	
}
