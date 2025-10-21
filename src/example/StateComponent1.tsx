import { useState } from "react";

export const StateComponent1 = () => {
    const [message, setMessage] = useState('');

    const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setMessage(e.target.value); // setter
    };

    return (
        <div>
            <input onChange={onChange}/>
            <p>{message}</p>
        </div>
    )
}