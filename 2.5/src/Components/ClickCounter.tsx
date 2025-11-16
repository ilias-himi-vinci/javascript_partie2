import { useState } from "react"

interface ClickCounterProps {
    title : string;
    on10ClickMessage? : string;
    onMouseOverMessage? : string;
}

const ClickCounter = ( {title, on10ClickMessage  =" Master !", onMouseOverMessage = "Click !"} : ClickCounterProps) => {
    const [count, setCount] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div>
            <h2>{title}</h2>

            {isHovered ? <p>{onMouseOverMessage}</p> : null }

            <button onClick={() => setCount(count+1)}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                >
                
                count is {count}
            </button>

            {count >= 10 && (
                <p>{on10ClickMessage}</p>
            )}
        </div>
        


    );
};

export default ClickCounter;