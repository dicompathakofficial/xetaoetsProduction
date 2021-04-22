import React from 'react';
import DoctorNav from '../../src/DoctorProfiles/DoctorNav/DoctorNav';
import DoctorAppointments from '../../src/DoctorProfiles/DoctorAppointments/DoctorAppointments';
import styles from '../../styles/DoctorProfiles/AppointmentPage.module.css';


export default function appointments() {
    return (
        <div className={styles.AppointmentsPage}>
            <DoctorNav />
            <DoctorAppointments />
        </div>
    )
}
