import './Main.css'
import { useState, useEffect } from 'react'

const Main = () => {

    const [num, setNum] = useState(1);
    const [userName, setUserName] = useState('Eshban')

    // useEffect for userName changes
    useEffect(() => {
        console.log("start useEffect 1 - userName changed:", userName);
    }, [userName]);
    
    // useEffect for num changes, with condition for when num reaches 10
    useEffect(() => {
        console.log("start useEffect 2 - num changed:", num);

        if (num === 10) {
            console.log("Number reached 10! start effect...");
          
        }
    }, [num]);
    
    return (
        <div className="main">
            <h1>Use Effect & State</h1>
            <p>Number: {num}</p>
            <button onClick={() => setNum(num + 1)}>Increase number</button>

            <p>Name: {userName}</p>
            <button onClick={() => setUserName(userName === "Eshban" ? "John" : "Eshban")}>
                Change Name
            </button>
        </div>
    );
}

export default Main;
