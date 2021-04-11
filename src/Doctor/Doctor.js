import React from 'react';
import styles from '../../styles/Doctor/Doctor.module.css';

export default function Doctor() {
    return (
        <div className="Doctor">
            <style jsx>
                {`
                    .Doctor {
                        background-image: url("https://source.unsplash.com/random");
                        width: 100%;
                        background-color: pink;
                        height: 40rem;
                        border-radius: 16px;
                        background-size: cover;
                    }
                `}
            </style>
            <div className={styles.DoctorScreen}>
                    <div className={styles.DoctorInfo}>
                        <h2>Dr. Kumar Yogi</h2>
                        <p>With over 2 + years of experience.</p>
                    </div>
            </div>
        </div>
    )
}
