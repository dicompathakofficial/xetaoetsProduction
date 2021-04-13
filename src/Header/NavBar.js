import React from 'react';
import styles from '../../styles/Header/NavBar.module.css';

export default function NavBar() {
    return (
        <div className={styles.NavBar}>
            <div>Pets Pundit .</div>
            <button>Vet ? Register Now</button>
        </div>
    )
}
