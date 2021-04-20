import React from 'react';
import styles from '../../../styles/DoctorProfiles/DoctorHome/Date.module.css';
import { MdDateRange } from "react-icons/md";

export default function Date() {
    return (
        <div className={styles.Date}>
            <MdDateRange size="4.5rem"/>
            18th April, 2021
        </div>
    )
}
