package com.coforge.hms.dto;




import java.sql.Date;
import java.time.LocalDate;
import java.util.Calendar;

import com.coforge.hms.model.Appointment;


public class AppointmentDTO {
	private long AppointmentId;
	private String Title;
	private String doctorid;
	private String pname;
	private Date appointmentdate;

	
	public long getAppointmentId() {
		return AppointmentId;
	}
	public void setAppointmentId(long AppointmentId) {
		this.AppointmentId = AppointmentId;
	}
	public String getTitle() {
		return Title;
	}
	public void setTitle(String Title) {
		this.Title = Title;
	}


	public String getdoctorid() {
		return doctorid;
	}

	public void setdoctorid(String doctorid) {
		this.doctorid = doctorid;
	}

	public String getpname() {
		return pname;
	}

	public void setpname(String patientid) {
		this.pname = patientid;
	}

	public Date getappointmentdate() {
		return appointmentdate;
	}

	public void setappointmentdate(Date appointmentdate) {
		this.appointmentdate = appointmentdate;
	}

	public AppointmentDTO(Appointment Appointment) {
		
		this.AppointmentId = Appointment.getApptId();
		this.Title = Appointment.gettitle();
		this.doctorid = Appointment.getdoctorid();
		this.pname = Appointment.getpname();
		this.appointmentdate = Appointment.getappointmentdate();

	}
	public AppointmentDTO() {
		
		// TODO Auto-generated constructor stub
	}
	

}
