import React from 'react';
import classes from "../Style/Components/taskmodal.module.scss";
import { IoIosCloseCircle } from "react-icons/io";

const TaskModal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={classes["modal"]}>
            <div className={classes["modal-content"]}>
                <button className={classes["modal-close"]} onClick={onClose}>
                <IoIosCloseCircle color='grey'/>
                </button>
                {children}
            </div>
        </div>
    );
};

export default TaskModal;
