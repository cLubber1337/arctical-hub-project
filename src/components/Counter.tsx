import {useState} from 'react'
import styles from "./counter.module.scss"

export const Counter = () => {

    const [count, setCount] = useState(0);

    return (
        <div>
            <div className={styles.green}>score: {count}</div>
            <div>
                <button onClick={()=>setCount(prev=>prev+1)}>click</button>
            </div>

        </div>
    );
};

