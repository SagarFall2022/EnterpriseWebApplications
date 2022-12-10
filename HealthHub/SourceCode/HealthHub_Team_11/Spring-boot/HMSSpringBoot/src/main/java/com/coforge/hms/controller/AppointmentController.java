package com.coforge.hms.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.coforge.hms.dto.AppointmentDTO;
import com.coforge.hms.service.AppointmentServiceImpl;

//= > Path -> http:localhost:8080/hms/api/Appointment
//@CrossOrigin("http://localhost:4200")
@RestController
@RequestMapping(value = "/api")
public class AppointmentController {

	@Autowired
	private AppointmentServiceImpl docService;

	@PostMapping(value = "/appointment", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<AppointmentDTO> addAppointment(@RequestBody AppointmentDTO appointment) {

		AppointmentDTO doc = docService.save(appointment);
		return ResponseEntity.ok().body(doc);
	}

	@PutMapping(value = "/appointment/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE }, consumes = { MediaType.APPLICATION_JSON_VALUE,
					MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<AppointmentDTO> updateAppointment(@RequestBody AppointmentDTO appointment, @PathVariable("id") long docId)
			throws Exception {

		AppointmentDTO doc = docService.update(appointment, docId);
		return ResponseEntity.ok().body(doc);
	}

	@DeleteMapping(value = "/appointment/{id}")
	public Map<String, Boolean> deleteAppointment(@PathVariable long id) throws Exception {
		return docService.delete(id);
	}

	@GetMapping(value = "/appointment/{id}", produces = { MediaType.APPLICATION_JSON_VALUE,
			MediaType.APPLICATION_XML_VALUE })
	public ResponseEntity<AppointmentDTO> findById(@PathVariable long id) throws Exception {

		AppointmentDTO doc = docService.getById(id);
		return ResponseEntity.ok().body(doc);
	}

	@GetMapping(value = "/appointment")
	public ResponseEntity<List<AppointmentDTO>> listAll() {
		List<AppointmentDTO> doc = docService.getAll();
		return ResponseEntity.ok().body(doc);
	}

	@PostMapping(value = "/appointment/check")
	public ResponseEntity<Map<String, Boolean>> existsByContactNo(@RequestBody AppointmentDTO doc){
		Map<String, Boolean> res = new HashMap<>();
		boolean present = docService.existsByNumber(doc);
		if(present) {
			res.put("available", Boolean.TRUE);
		}else {
			res.put("available", Boolean.FALSE);
		}
		return ResponseEntity.ok().body(res);
	}
	
	
}
