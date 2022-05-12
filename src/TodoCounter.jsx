import React from "react";
import './TodoCounter.css';

function TodoCounter() {
    return(
        <h2 className="TodoCounter">Has completado <span>2</span> de <span>3</span> TODOs</h2>
    );
}

export { TodoCounter };