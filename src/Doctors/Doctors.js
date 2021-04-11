import React from 'react';
import styles from '../../styles/Doctors/Doctors.module.css';
import Doctor from '../Doctor/Doctor';

export default function Doctors() {
    return (
        <div className={styles.Doctors}>
            <Doctor />
            <Doctor />
            <Doctor />
            <Doctor />
            <Doctor />
        </div>
    )
}
