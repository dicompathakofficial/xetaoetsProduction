import React, {useState} from 'react';
import styles from '../../../styles/DoctorProfiles/DoctorAppointments/Appointment.module.css';
import { IoMdDoneAll } from "react-icons/io";
import { MdDone } from "react-icons/md";

export default function Appointment() {
    const [complete, setcomplete] = useState(false);

    const handleComplete = () => {
        complete ? setcomplete(false) : setcomplete(true);
    }
    return (
        <div className={styles.Appointment}>
            <h4><span>1.</span> Kumar Bhupen Bora</h4>
            {
                complete ? <div onClick={handleComplete} className={styles.Completed}><IoMdDoneAll size="2.5rem" color="#fff"/></div> : <button onClick={handleComplete}><MdDone size="2.5rem" color="#fff"/></button>
            }
        </div>
    )
}
