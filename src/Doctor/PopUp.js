import React from 'react';
import styles from '../../styles/Doctor/PopUp.module.css';
import { ImCancelCircle } from "react-icons/im";
import { BsArrowRight } from "react-icons/bs";


export default function PopUp({setpopUp}) {

    const handleClose = () => {
        setpopUp(false);
    }

    return (
        <div className={styles.PopUpScreen}>
            <div className={styles.PopUp}>
                <div onClick={handleClose} className={styles.PopUpCancel}>
                    <ImCancelCircle size="2rem" color="#fff" />
                </div>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. 
                    <br />
                    <br />
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
                </p>
                <div className={styles.inputButton}>
                    <BsArrowRight size="2.75rem" /> Continue Booking
                </div>
                <p className={styles.PopUpTerms}>
                    * Terms and Conditions apply
                </p>
            </div>
        </div>
    )
}
