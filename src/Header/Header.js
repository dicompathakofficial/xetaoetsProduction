import React from 'react';
import NavBar from './NavBar';
import styles from '../../styles/Header/Header.module.css';

export default function Header() {
    return (
        <div className={styles.Header}>
            <NavBar />
            <div className={styles.HeaderContent}>
                <h2>The Best </h2>
                <h2 style={{ color: "#EA4949" }}>Vets</h2>
                <h2>In Town .</h2>

                <p>for the ones who truly care for you .</p>
                <div className={styles.HeaderContentBtns}>
                    <button>
                        Explore Doctors
                    </button>
                    <div>
                        How We Verify Our Vets?
                    </div>
                </div>
            </div>
        </div>
    )
}
