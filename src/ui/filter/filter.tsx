import { useState } from "react";
import style from "./filter.module.scss";

export default function Filter(){

    const [isOpen, setIsOpen] = useState(false);

    return(
        <div className={`${style["filter"]}`}>
            <button className={`${style["filter__btn"]} ${isOpen ? style["filter__btn--rotate"] : ""}`} onClick={() => setIsOpen(!isOpen)}>Filter</button>
        </div>
    );
}