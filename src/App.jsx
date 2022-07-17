import React, { useState } from "react";
import './index.css'; 


const App = () => {

    const [name,setName]=useState('Click ME');
    

    const purple = "#8e44ad";

    const [count,setCount]=useState(purple);

    const bgColo = () => {
        let newBg = "#34495e";
        let newName = 'OUCHH 🦁';
        setCount(newBg);
        setName(newName);
    }

    const bgBack = () => {
        setCount(purple);
        setName("Ayyo 😠"); 
    }


    return (
        <>
            <div style={ { backgroundColor : count } }>
                <button onMouseEnter={bgColo} onMouseLeave={bgBack}>{name}</button>
            </div>
        </>
    );
}


export default App;