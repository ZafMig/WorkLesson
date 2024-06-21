import React from 'react';
import classes from "../Style/Components/finaltaskmodal.module.scss"
import { IoIosCloseCircle } from "react-icons/io";

const FinalTaskModal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={classes["modal"]}>
            <div className={classes["modal-content"]}>
               
                {children}
            </div>
        </div>
    );
};

export default FinalTaskModal;
