import React, { useState } from 'react';
import NavBar from './NavBar';
import styles from '../../styles/Header/Header.module.css';
import Doctors from '../Doctors/Doctors';
import Footer from '../Footer/Footer';
import Link from 'next/link';

const Headertext = () => {
    return (
        <div className={styles.HeaderContent}>
            <h2>The Best </h2>
            <h2 style={{ color: "#EA4949" }}>Vets</h2>
            <h2>In Town .</h2>

            <p>for the ones who truly care for you .</p>
            <div className={styles.HeaderContentBtns}>
                <Link href="/explore">
                    <button>
                        Explore Doctors
                    </button>
                </Link>
                <div>
                    How We Verify Our Vets?
                </div>
            </div>
        </div>
    )
}

export default function Header({ page }) {

    return (
        <div className={styles.Header}>
            <NavBar />

            {
                page === 'Doctor' ? <Doctors /> : <Headertext />
            }

            <Footer />

        </div>
    )
}
