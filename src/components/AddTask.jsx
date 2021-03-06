import React from 'react';
import Button from './Button'
import './AddTask.css'

const AddTask = ({ handleTaskAddition }) => {

    const [inputData, setInputData] = React.useState('')

    const handleInputChange = (e) => {
        //console.log(typeof e.target.value)
        //console.log(e.target.value)
        setInputData(e.target.value)
    }

    const handleAddTaskClick = () => {
        if (inputData.length !== 0) {
            handleTaskAddition(inputData)
            setInputData('')
        }

    }

    return (
        <div className="add-task-container">
            <input onChange={handleInputChange} value={inputData} className="add-task-input" type="text" />
            <div className="add-task-button-container">
                <Button onClick={handleAddTaskClick} children="Adicionar" />
            </div>
        </div>
    )
}

export default AddTask