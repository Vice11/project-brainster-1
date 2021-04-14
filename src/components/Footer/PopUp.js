import React from 'react';
import "./PopUp.css";
import { AiFillCloseCircle } from "react-icons/ai";

const PopUp = (props) => {
    return (
        <div className="popup-box">
            <div className="box">
                <AiFillCloseCircle
                    className="close-icon"
                    onClick={props.handleClose}
                />
                {props.content}
            </div>
        </div>
    );
};

export default PopUp;