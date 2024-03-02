import React, { useState } from 'react';
import '../../styles/index.css';

function Light() {
    const [selected, setSelected] = useState('');

    return (
    <div className="traffic">
        <div className="blackBar"></div>
        <div className="blackBox">
            <div 
                onClick={() => setSelected('red')}
                className={
                "light red" + (selected === 'red' ? " selected" : "")
                }></div>
            <div 
                onClick={() => setSelected('yellow')}
                className={
                "light yellow" + (selected === 'yellow' ? " selected" : "")
            }></div>
            <div 
                onClick={() => setSelected('green')}
                className={
                "light green" + (selected === 'green' ? " selected" : "")
            }></div>
        </div>
    </div>
    )
}

export default Light;