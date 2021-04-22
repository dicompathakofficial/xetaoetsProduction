import React from 'react';
import styles from '../../../styles/DoctorProfiles/DoctorHome/Date.module.css';
import { MdDateRange } from "react-icons/md";
import Link from 'next/link';

export default function Date() {
    return (
        <Link href="/doctors/appointments">
            <div className={styles.Date}>
                <MdDateRange size="4.5rem" />
            18th April, 2021
            </div>
        </Link>
    )
}
