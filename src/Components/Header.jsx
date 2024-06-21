import React from "react";
import classes from "../Style/Components/header.module.scss"
import TaskModal from "./TaskModal";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FiUser } from "react-icons/fi";


const Header = () => {

    const location = useLocation();
   const navigate = useNavigate();
 
   useEffect(() => {
     console.log('Current location is ', location);
   }, [location]);
    

   const [isModalOpen, setIsModalOpen] = useState(false);

   const handleOpenModal = () => {
       setIsModalOpen(true);
   };

   const handleCloseModal = () => {
       setIsModalOpen(false);
   };

   

   return(
    <div className={classes["Header"]}>

<TaskModal show={isModalOpen} onClose={handleCloseModal}>
                    <div className={classes["TaskModal"]}>
                        <div className={classes["TaskModal_Text"]}>
                            <h1 className={classes["TaskModal_Text_Name"]}>Войдите</h1>
                        </div>
                    </div>
                        <button className={classes["TaskModal_Send"]} onClick={handleOpenModal}>Войдите через Telegram</button>
                </TaskModal>


                        <div className={classes["Header-home"]}>
                        <button className={classes["Header-back"]} onClick={() => navigate("/", {replace: false})}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
  <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.707 1.5ZM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5 5 5Z"/>
</svg>
                    </button>
                        </div>

                    <div className={classes["Header-profile"]}>
                    <button className={classes["Header-ic"]} onClick={handleOpenModal}> 
                    <FiUser size={40} />
                    </button>

                    
                </div>
            
    </div>
   )
}

export default Header;