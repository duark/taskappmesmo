import React from 'react';
import Button from './Button'
import { useParams } from 'react-router-dom'
import { useHistory } from 'react-router-dom';

const TaskDetails = () => {

    const params = useParams()
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack();
    }

    return (
        <>
            <div className="back-button-container">
                <Button onClick={handleBackButtonClick} /*handleEmptyForm=false}*/>Voltar</Button>
            </div>
            <div className="task-details-container">
                <h2>{params.taskTitle}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, recusandae reiciendis veniam sequi sapiente aperiam?</p>
            </div>
        </>
    )
}

export default TaskDetails