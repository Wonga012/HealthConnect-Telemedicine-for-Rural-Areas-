import React, { useState } from 'react';
import axios from 'axios';

const RegisterPatient = () => {
  const [patientData, setPatientData] = useState({ name: '', email: '', contact_number: '', address: '' });

  const handleChange = (e) => {
      setPatientData({ ...patientData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const response = await axios.post('/api/patients', patientData);
          alert(response.data.message);
      } catch (error) {
          console.error(error);
      }
  };

  return (
      <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="text" name="contact_number" placeholder="Contact Number" onChange={handleChange} required />
          <textarea name="address" placeholder="Address" onChange={handleChange}></textarea>
          <button type="submit">Register</button>
      </form>
  );
};

export { RegisterPatient };


const ScheduleAppointment = () => {
    const [appointmentData, setAppointmentData] = useState({ patient_id: '', doctor_id: '', appointment_time: '' });
  
    const handleChange = (e) => {
        setAppointmentData({ ...appointmentData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/appointments', appointmentData);
            alert(response.data.message);
        } catch (error) {
            console.error(error);
        }
    };
  
    return (
        <form onSubmit={handleSubmit}>
            <input type="number" name="patient_id" placeholder="Patient ID" onChange={handleChange} required />
            <input type="number" name="doctor_id" placeholder="Doctor ID" onChange={handleChange} required />
            <input type="datetime-local" name="appointment_time" onChange={handleChange} required />
            <button type="submit">Schedule Appointment</button>
        </form>
    );
  };
  
export { ScheduleAppointment };

  
