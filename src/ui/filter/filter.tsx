import { MouseEvent, useEffect, useState } from "react";
import style from "./filter.module.scss";

export default function Filter(){

    const [isOpen, setIsOpen] = useState(false);

    const btnClick = (e: MouseEvent) => {
        e.stopPropagation();
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const escListener = (e: KeyboardEvent) => {
            if(e.key === "Escape"){
                if(isOpen){
                    setIsOpen(false);
                }
            }
        };

        const clickListener = () => {
            if(isOpen){
                setIsOpen(false);
            }
        };

        window.addEventListener("keydown", escListener);
        window.addEventListener("click", clickListener);

        return () => {
            window.removeEventListener("keydown", escListener);
            window.removeEventListener("click", clickListener);
        };
    });

    return(
        <div className={`${style["filter"]}`}>
            <button className={`${style["filter__btn"]} ${isOpen ? style["filter__btn--rotate"] : ""}`} onClick={btnClick}>Filter<span className={`${style["filter__btn--show"]}`}>&nbsp; by status</span></button>
            <ul className={`${style["filters"]} ${isOpen ? style["filters--show"] : ""}`} onClick={btnClick}>
                <li className={`${style["filters__list"]}`}>
                    <input type="checkbox" name="draft" id="draft" />
                    <label htmlFor="draft">Draft</label>
                </li>
                <li className={`${style["filters__list"]}`}>
                    <input type="checkbox" name="pending" id="pending" />
                    <label htmlFor="pending">Pending</label>
                </li>
                <li className={`${style["filters__list"]}`}>
                    <input type="checkbox" name="paid" id="paid" />
                    <label htmlFor="paid">Paid</label>
                </li>
            </ul>
        </div>
    );
}