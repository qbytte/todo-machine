import React from "react";
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className="TodoItem">
            <span>✅</span>
            <p>{props.text}</p>
            <span>❌</span>
        </li>
    );
}

export { TodoItem }