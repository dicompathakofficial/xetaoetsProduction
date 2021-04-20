import React from 'react';
import DoctorNav from '../../src/DoctorProfiles/DoctorNav/DoctorNav';
import DoctorHome from '../../src/DoctorProfiles/DoctorHome/DoctorHome';
import styles from '../../styles/DoctorProfiles/DoctorProfile.module.css';

export default function index() {
    return (
        <div className={styles.DoctorIndex}>
            <DoctorNav />
            <DoctorHome />
        </div>
    )
}
