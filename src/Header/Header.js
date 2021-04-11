import React, {useState} from 'react';
import NavBar from './NavBar';
import styles from '../../styles/Header/Header.module.css';
import Doctors from '../Doctors/Doctors';

const Headertext = ({showDoctors}) => {
    return (
        <div className={styles.HeaderContent}>
            <h2>The Best </h2>
            <h2 style={{ color: "#EA4949" }}>Vets</h2>
            <h2>In Town .</h2>

            <p>for the ones who truly care for you .</p>
            <div className={styles.HeaderContentBtns}>
                    <button onClick={showDoctors}>
                        Explore Doctors
                    </button>
                <div>
                    How We Verify Our Vets?
                </div>
            </div>
        </div>
    )
}

export default function Header() {
    const [doctors, setdoctors] = useState(false);

    const showDoctors = ()=> {
        doctors ? setdoctors(false) : setdoctors(true);
    }

    return (
        <div className={styles.Header}>
            <NavBar />

            {
                doctors ? <Doctors /> : <Headertext showDoctors={showDoctors}/>
            }

        </div>
    )
}
