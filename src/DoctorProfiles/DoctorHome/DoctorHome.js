import React from 'react';
import styles from '../../../styles/DoctorProfiles/DoctorHome/DoctorHome.module.css';
import Image from 'next/image';

export default function DoctorHome() {
    return (
        <div className={styles.DoctorHome}>
            <div className={styles.DoctorHomeHeader}>
                <h2>
                    <span>
                        <img
                            src="https://source.unsplash.com/_N7I1JyPYJw"
                        />
                    </span>
                    Welcome Back, Dr. Kamal
                </h2>
                <h3>Here are your appointments for the week .</h3>
                <h4>Kindly select a date to view your appointments.</h4>
            </div>
        </div>
    )
}
