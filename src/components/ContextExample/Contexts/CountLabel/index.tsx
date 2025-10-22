import { useContext } from "react";
import { CountContext } from ".."

export const CountLabel = () => {
    const {count} = useContext(CountContext);

    return <div>{count}</div>;
};