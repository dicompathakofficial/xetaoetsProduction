import React from 'react';
import styles from '../../../styles/DoctorProfiles/DoctorAppointments/DoctorAppointments.module.css';
import Appointment from './Appointment';

export default function DoctorAppointments() {
    return (
        <div className={styles.DoctorAppointments}>
            <h2>Here are your appointments for 2nd Mar, Tue</h2>
            <div className={styles.Appointments}>
                <Appointment />
                <Appointment />
                <Appointment />
                <Appointment />
            </div>
        </div>
    )
}
