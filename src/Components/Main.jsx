import React, {useState, useEffect} from "react";
import { useNavigate, useLocation } from "react-router-dom";
import classes from "../Style/Components/main.module.scss"
import TaskModal from "./TaskModal";
import { FiUser } from "react-icons/fi";


const Main = () => {
       
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    
   const location = useLocation();
   const navigate = useNavigate();
 
   useEffect(() => {
     console.log('Current location is ', location);
   }, [location]);
    

    return(

        


        <div className={classes["Home"]}>
                
                   
  

        <div className={classes["Page"]}>
            <div className={classes["Page_Header"]}>
                <div className={classes["Page_Header-profile"]}>
                    <button className={classes["Page_Header-ic"]} onClick={handleOpenModal}> 
                    <FiUser size={40} />
                    </button>
                </div>
            </div>

            <div className={classes["Page_Main"]}>
              
                <div className={classes["Page_Main-bg"]}>
                
               <div className={classes["Page_Main-button"]}>
                        <button className={classes["Page_Main-btn"]}>Приступить к обучению</button>
                    </div>
                    </div>
               </div>

               <div className={classes["Page_Work"]}>

                    <div className={classes["Page_Work-content"]}>
                    <div className={classes["Page_Work-content-h1"]}>
                            Вакансии
                    </div>

                    <div className={classes["Page_Work-content-h2"]}>
                        Актуальные вакансии в салонах ЦирюльникЪ
                    </div>

                    <div className={classes["Page_work-content-city"]}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" fill="currentColor" class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                    <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                    Калининград
                
                    <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" fill="currentColor" class="bi bi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                    </svg>
                    </div> 
               </div>
               </div>
              
               <div className={classes["Page_Works"]}>
                   <div className={classes["Page_Works-name"]}> Женский парикмахер</div>

                    <div className={classes["Page_Works-text"]}>
                        
                    <svg className={classes["Page_Works-text-svg"]} width="8" height="9" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="3" r="2.5" fill="#D5101C"/>
                    </svg>
                    
                    Советский проспект, 2а
                    </div>
                    <button className={classes["Page_Works-btn"]} onClick={() => navigate("lessons", {replace: false})}>Пройти обучение</button>
               </div>
               <div className={classes["Page_Works"]}>
                   <div className={classes["Page_Works-name"]}> Мужской парикмахер</div>

                    <div className={classes["Page_Works-text"]}>
                    <svg className={classes["Page_Works-text-svg"]} width="8" height="9" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="3" r="2.5" fill="#D5101C"/>
                    </svg>
                    Советский проспект, 2а
                    </div>
                    <button className={classes["Page_Works-btn"]}  onClick={() => navigate("lessons", {replace: false})} >Пройти обучение</button>
               </div>

               <div className={classes["Page_Works"]}>
                   <div className={classes["Page_Works-name"]}>Администратор</div>

                    <div className={classes["Page_Works-text"]}>
                    <svg className={classes["Page_Works-text-svg"]} width="8" height="9" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="3" r="2.5" fill="#D5101C"/>
                    </svg>
                    Советский проспект, 2а
                    </div>
                    <button className={classes["Page_Works-btn"]} onClick={() => navigate("lessons", {replace: false})}>Пройти обучение</button>
               </div>


               <div className={classes["Page_Works"]}>
                   <div className={classes["Page_Works-name"]}>Промоутер</div>

                    <div className={classes["Page_Works-text"]}>
                    <svg className={classes["Page_Works-text-svg"]} width="8" height="9" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="3" r="2.5" fill="#D5101C"/>
                    </svg>
                    Советский проспект, 2а
                    </div>
                    <button className={classes["Page_Works-btn"]} onClick={() => navigate("lessons", {replace: false})}>Пройти обучение</button>
               </div>

               <div className={classes["Page_Works"]}>
                   <div className={classes["Page_Works-name"]}> Мастер Маникюра</div>

                    <div className={classes["Page_Works-text"]}>
                    <svg className={classes["Page_Works-text-svg"]} width="8" height="9" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="2.5" cy="3" r="2.5" fill="#D5101C"/>
                    </svg>
                    Советский проспект, 2а
                    </div>
                    <button className={classes["Page_Works-btn"]} onClick={() => navigate("lessons", {replace: false})}>Пройти обучение</button>
               </div>

               <div className={classes["Page_Footer"]}>
                <div className={classes["Page_Footer-text"]}>©  ЦирюльникЪ. Все права защищены 
                </div>
                <div className={classes["Page_Footer-svg"]}>
                <svg  width="70" height="16" viewBox="0 0 44 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_601_186)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8.28668 5.90595C7.50857 6.2296 5.95342 6.89946 3.62126 7.91555C3.24256 8.06615 3.04417 8.21348 3.02611 8.35754C2.99559 8.601 3.30047 8.69687 3.71565 8.82741C3.77212 8.84517 3.83064 8.86357 3.89062 8.88307C4.29909 9.01585 4.84855 9.17118 5.13419 9.17735C5.3933 9.18295 5.68249 9.07613 6.00176 8.85689C8.18077 7.386 9.30559 6.64254 9.37621 6.62651C9.42603 6.6152 9.49507 6.60099 9.54184 6.64256C9.58862 6.68414 9.58402 6.76288 9.57907 6.784C9.54886 6.91276 8.35208 8.0254 7.73275 8.60119C7.53967 8.78069 7.40272 8.90801 7.37472 8.93709C7.312 9.00223 7.24809 9.06385 7.18665 9.12307C6.80718 9.48889 6.52261 9.76321 7.20241 10.2112C7.52909 10.4265 7.79051 10.6045 8.05131 10.7821C8.33612 10.9761 8.62019 11.1695 8.98774 11.4104C9.08139 11.4718 9.17082 11.5356 9.25793 11.5977C9.58938 11.834 9.88717 12.0463 10.2551 12.0124C10.4688 11.9928 10.6896 11.7917 10.8018 11.1922C11.0668 9.77543 11.5878 6.70564 11.7081 5.44065C11.7187 5.32982 11.7054 5.18798 11.6948 5.12572C11.6841 5.06345 11.6618 4.97474 11.5809 4.90907C11.4851 4.83129 11.3371 4.81489 11.2709 4.81606C10.97 4.82136 10.5084 4.98188 8.28668 5.90595Z" fill="white"/>
                </g>
                <g clip-path="url(#clip1_601_186)">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.1247 1.12471C28 2.24942 28 4.0596 28 7.68V8.32C28 11.9404 28 13.7506 29.1247 14.8753C30.2494 16 32.0596 16 35.68 16H36.32C39.9404 16 41.7506 16 42.8753 14.8753C44 13.7506 44 11.9404 44 8.32V7.68C44 4.0596 44 2.24942 42.8753 1.12471C41.7506 0 39.9404 0 36.32 0H35.68C32.0596 0 30.2494 0 29.1247 1.12471ZM30.7 4.8667C30.7867 9.0267 32.8667 11.5267 36.5134 11.5267H36.7201V9.1467C38.0601 9.28003 39.0733 10.26 39.48 11.5267H41.3734C40.8534 9.63337 39.4866 8.5867 38.6333 8.1867C39.4866 7.69337 40.6866 6.49337 40.9733 4.8667H39.2533C38.8799 6.1867 37.7734 7.3867 36.7201 7.50003V4.8667H35V9.48003C33.9333 9.21337 32.5867 7.92003 32.5267 4.8667H30.7Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_601_186">
                <rect width="80" height="16" fill="white"/>
                </clipPath>
                <clipPath id="clip1_601_186">
                <rect width="16" height="16" fill="white" transform="translate(28)"/>
                </clipPath>
                </defs>
                </svg>
                </div>



                
               </div>


               </div>

               <TaskModal show={isModalOpen} onClose={handleCloseModal}>
                    <div className={classes["TaskModal"]}>
                        <div className={classes["TaskModal_Text"]}>
                            <h1 className={classes["TaskModal_Text_Name"]}>Войдите</h1>
                        </div>
                    </div>
                        <button className={classes["TaskModal_Send"]} onClick={handleOpenModal}>Войдите через Telegram</button>
                </TaskModal>

               </div>

   
    )
}

export default Main;