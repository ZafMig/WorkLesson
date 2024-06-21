import React, {useState} from "react";
import classes from "../Style/Components/lessons.module.scss"
import Header from "./Header";
import { LuClock3 } from "react-icons/lu";
import TaskModal from "./TaskModal";
import CompleteTaskModal from "./CompleteTaskModal";
import pen from "../Style/images/Frame20.png"
import FinalTaskModal from "./FinalTaskModal";
import { GiFireworkRocket } from "react-icons/gi";

const Lessons = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [isCompleteModalOpen, setIsCompleteModalOpen] = useState(false);

    const [isFinalTaskModalOpen, setIsFinalTaskModalOpen] = useState(false);

    const handleOpenFinalModal = () => {
        setIsFinalTaskModalOpen(true);
    };

    const handleCloseFinalModal = () => {
        setIsFinalTaskModalOpen(false);
    };


    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    const handleOpenCompleteModal = () => {
        setIsCompleteModalOpen(true);
    };

    const handleCloseCompleteModal = () => {
        setIsCompleteModalOpen(false);
    };

    const handleCompleteTask = () => {
        handleCloseModal();
        handleOpenCompleteModal();
   }

    return(
        <div className={classes["Page"]}>
            <Header></Header>


            <div className={classes["Page_Home"]}>
                <div className={classes["Page_Home-name"]}>
                    НАЗВАНИЕ ВАКАНСИИ
                </div>

                <div className={classes["Page_Home-info"]}>
                Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit
                </div>


                <div className={classes["Page_Home-svg"]}>
                <svg width="99" height="626"  fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="19" stroke="#D5101C" stroke-width="2" stroke-dasharray="3 3"/>
                <path d="M12 22L19 28L29 13" stroke="#D5101C" stroke-width="2"/>
                <line x1="19.5" y1="607" x2="19.5" y2="151" stroke="#EDA4A8" stroke-width="3"/>
                <line x1="19.5" y1="140" x2="19.5" y2="40" stroke="#D5101C" stroke-width="3"/>
                <line x1="28" y1="301.5" x2="92" y2="301.5" stroke="#D5101C" stroke-dasharray="2 2"/>
                <line x1="28" y1="143.5" x2="92" y2="143.5" stroke="#D5101C"/>
                <line x1="28" y1="405.5" x2="92" y2="405.5" stroke="#D5101C" stroke-dasharray="2 2"/>
                <line x1="28" y1="509.5" x2="92" y2="509.5" stroke="#D5101C" stroke-dasharray="2 2"/>
                <line x1="28" y1="613.5" x2="92" y2="613.5" stroke="#D5101C" stroke-dasharray="2 2"/>
                <circle cx="19.75" cy="144.75" r="15.75" fill="#D5101C"/>
                <circle cx="19.75" cy="301.5" r="12" fill="#D5101C"/>
                <circle cx="19.75" cy="405.5" r="12" fill="#D5101C"/>
                <circle cx="19.75" cy="509.5" r="12" fill="#D5101C"/>
                <circle cx="19.75" cy="613.5" r="12" fill="#D5101C"/>
                <circle cx="95.5" cy="301.5" r="3.5" fill="#D5101C"/>
                <circle cx="95.5" cy="143.5" r="3.5" fill="#D5101C"/>
                <circle cx="95.5" cy="405.5" r="3.5" fill="#D5101C"/>
                <circle cx="95.5" cy="509.5" r="3.5" fill="#D5101C"/>
                <circle cx="95.5" cy="613.5" r="3.5" fill="#D5101C"/>
                </svg>
                </div>

                <div className={classes["Page_Home_Lesson"]}>
                    <div className={classes["Page_Home_Lesson-block"]}>
                        <div className={classes["Page_Home_Lesson-block-name"]}>
                                <h1 className={classes["Page_Home_Lesson-block-name-name"]}>Название задания</h1>
                                <p className={classes["Page_Home_Lesson-block-name-com"]}>Задание выполнено</p>
                                <button className={classes["Page_Home_Lesson-block-name-btn"]}>Посмотреть задание</button>
                        </div>
                        <div className={classes["Page_Home_Lesson-block-prog"]}>
                                <h1 className={classes["Page_Home_Lesson-block-prog-name"]}>Название задания</h1>
                                <p className={classes["Page_Home_Lesson-block-prog-com"]}>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.</p>
                                <button className={classes["Page_Home_Lesson-block-prog-btn"]} onClick={handleOpenCompleteModal}>Задание проверяется <LuClock3 /></button>
                        </div>
                        <div className={classes["Page_Home_Lesson-block-name"]}>
                                <h1 className={classes["Page_Home_Lesson-block-name-name"]}>Название задания</h1>
                                <button className={classes["Page_Home_Lesson-block-name-btn"]} onClick={handleOpenModal}>Посмотреть задание</button>
                        </div>
                        <div className={classes["Page_Home_Lesson-block-name"]}>
                                <h1 className={classes["Page_Home_Lesson-block-name-name"]}>Название задания</h1>
                                <button className={classes["Page_Home_Lesson-block-name-btn"]} onClick={handleOpenModal}>Посмотреть задание</button>
                        </div>
                        <div className={classes["Page_Home_Lesson-block-name"]}>
                                <h1 className={classes["Page_Home_Lesson-block-name-name"]}>Название задания</h1>
                                <button className={classes["Page_Home_Lesson-block-name-btn"]} onClick={handleOpenModal}>Посмотреть задание</button>
                        </div>
                        <div className={classes["Page_Home_Lesson-block-name"]}>
                                <h1 className={classes["Page_Home_Lesson-block-name-name"]}>Название задания</h1>
                                <button className={classes["Page_Home_Lesson-block-name-btn"]} onClick={handleOpenFinalModal}>Посмотреть задание</button>
                        </div>
                    </div>

                </div>
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

                <TaskModal show={isModalOpen} onClose={handleCloseModal}>
                    <div className={classes["TaskModal"]}>
                        <img className={classes["TaskModal_Icon"]} src={pen} alt="" />
                        <div className={classes["TaskModal_Text"]}>
                            <p className={classes["TaskModal_Text_Task"]}>Задание 1</p>
                            <h1 className={classes["TaskModal_Text_Name"]}>НАЗВАНИЕ ЗАДАНИЯ</h1>
                        </div>
                    </div>
                        <p className={classes["TaskModal_Description"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim  veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea  commodo consequat. Duis aute irure dolor in reprehenderit in voluptate  velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <p className={classes["TaskModal_Recomendation"]}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua?</p>
                        <p className={classes["TaskModal_Answer"]}>Ваш ответ:</p>
                        <textarea className={classes["TaskModal_Textarea"]} name="comment"></textarea>
                        <button className={classes["TaskModal_Send"]} onClick={handleCompleteTask}>Отправить</button>
                </TaskModal>

                <CompleteTaskModal show={isCompleteModalOpen} onClose={handleCloseCompleteModal}>
                    <div className={classes["CompleteTaskModal"]}>
                        <div className={classes["CompleteTaskModal_Container"]}>
                            <h1 className={classes["CompleteTaskModal_Container_Thanks"]}>Спасибо за ответ!</h1>
                            <p className={classes["CompleteTaskModal_Container_Description"]}>Наши HR его проверят и в скором времени вам откроется доступ к следующему этапу.</p>
                            <button className={classes["CompleteTaskModal_Container_Continue"]} onClick={handleCloseCompleteModal}>Продолжить</button>
                        </div>
                        
                        

                    </div>                    
                </CompleteTaskModal>

                <FinalTaskModal show={isFinalTaskModalOpen} onClose={handleCloseFinalModal}>
                    <div className={classes["FinalTaskModal"]}>
                        <div className={classes["FinalTaskModal_Container"]}>
                           <h1 className={classes["FinalTaskModal_Container_Thanks"]}>Поздравляем! <GiFireworkRocket></GiFireworkRocket></h1>
                            <p className={classes["FinalTaskModal_Container_Description"]}>Поздравляем вы завершили обучение! Давайте закрепим знания итоговым тестированием.</p>
                            <button className={classes["FinalTaskModal_Container_Continue"]} onClick={handleCloseFinalModal}>Перейти к тестированию</button>

                        </div>

                    </div>
                    
                </FinalTaskModal>

                
        </div>
    )
}

export default Lessons;