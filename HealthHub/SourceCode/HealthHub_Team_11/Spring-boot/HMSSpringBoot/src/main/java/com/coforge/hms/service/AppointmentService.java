package com.coforge.hms.service;

import java.util.List;
import java.util.Map;

import com.coforge.hms.dto.AppointmentDTO;

public interface AppointmentService {
	
	public AppointmentDTO save(AppointmentDTO appointment);
    public AppointmentDTO update(AppointmentDTO appointment, long docId) throws Exception;
	public AppointmentDTO getById(long appointment) throws Exception;
	public List<AppointmentDTO> getAll();
	public Map<String, Boolean> delete(long appointmentid) throws Exception;
	public boolean existsByNumber(AppointmentDTO doc);

}
