package com.coforge.hms.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.coforge.hms.model.Appointment;

public interface AppointmentRepository extends JpaRepository<Appointment, Long> {
	
	@Query(value = "select * from #{#entityName} d where d.ID=?1", nativeQuery = true)
	public Appointment getById(long AppointmentId);
	
	@Query(value = "select * from #{#entityName} d where d.ID=?1", nativeQuery = true)
	public Appointment existsDoctorByAppointmentId(long AppointmentId);
}
