import React, { useState } from 'react';
import styles from '../../../styles/DoctorProfiles/DoctorNav/DoctorNav.module.css';
import Link from 'next/link';

export default function DoctorNav() {

    const [menu, setmenu] = useState(false);

    const handleMenu = () => {
        menu === true ? setmenu(false) : setmenu(true);
    }
    return (
        <div className={styles.DoctorNav}>
            <div className={styles.DoctorNavContainer}>
                <div className={styles.logo}>
                    <img src="/images/logo.png" />
                </div>
                <div onClick={handleMenu} className={styles.DoctorNavLogout}>
                    Menu
                    {
                        menu && (
                            <div className={styles.DoctorMenuContent}>
                                <Link href="/doctors">
                                    <div>Appointments</div>
                                </Link>
                                <div>Create Listings</div>
                                <div>Logout</div>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}

const MenuContent = () => {

}
