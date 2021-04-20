import React from 'react'
import styles from '../../../styles/DoctorProfiles/DoctorHome/Dates.module.css';
import Date from './Date';

export default function Dates() {
    return (
        <div className={styles.Dates}>
            <Date />
            <Date />
            <Date />

            <Date />
            <Date />
        </div>
    )
}
