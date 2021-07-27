import React from 'react';
import './Button.css'

const Button = ({ children, onClick, handleEmptyForm }) => {

    return (
        // <button onClick={onClick} className="button" disabled={handleEmptyForm()} >
        <button onClick={onClick} className="button">
            {children}
        </button >
    )
}

export default Button