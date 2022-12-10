package com.coforge.hms.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

@Entity
@Table(name = "APPOINTMENT")
public class Appointment {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "ID")
	private long apptId;

	@Column(name = "title")
	private String title;

	@Column(name = "docid")
	private String doctorid;

	@Column(name = "pname")
	private String pname;

	@Column(name = "appointmentdate")
	private Date appointmentdate;

	// @OneToOne
	// @JoinColumn(name = "SPEC_ID")
	// private Specialization specialization;

	public long getApptId() {
		return apptId;
	}

	public void setApptId(long apptId) {
		this.apptId = apptId;
	}

	public String gettitle() {
		return title;
	}

	public void settitle(String title) {
		this.title = title;
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

	public void setpname(String pname) {
		this.pname = pname;
	}

	public Date getappointmentdate() {
		return appointmentdate;
	}

	public void setappointmentdate(Date appointmentdate) {
		this.appointmentdate = appointmentdate;
	}
	
}
