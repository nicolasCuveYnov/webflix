import React from "react";

function BackButton(props) {
    return (
        <button onClick={props.onClick} className="btn">{props.text}</button>
    );
}

export default BackButton;