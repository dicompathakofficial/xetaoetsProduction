import React from 'react';
import styles from '../../../styles/DoctorProfiles/DoctorNav/DoctorNav.module.css';

export default function DoctorNav() {
    return (
        <div className={styles.DoctorNav}>
            <div className={styles.DoctorNavContainer}>
                <div className={styles.logo}>
                    <img src="./images/logo.png" />
                </div>
                <div className={styles.DoctorNavLogout}>
                    Menu
                </div>
            </div>
        </div>
    )
}
