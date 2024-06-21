import React from 'react';
import classes from "../Style/Components/taskmodal.module.scss";

const CompleteTaskModal = ({ show, onClose, children }) => {
    if (!show) {
        return null;
    }

    return (
        <div className={classes["modal"]}>
            <div className={classes["modal-content"]}>
                { <button className={classes["modal-close"]} onClick={onClose}>
                
                </button> }
                {children}
            </div>
        </div>
    );
};

export default CompleteTaskModal;
