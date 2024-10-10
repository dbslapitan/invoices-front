"use client";

import { FormEvent, MouseEvent, useState } from "react";
import Back from "../back/back";
import style from "./invoice-action.module.scss";
import Image from "next/image";
import left from "../../../public/icons/icon-arrow-left.svg";
import right from "../../../public/icons/icon-arrow-right.svg";

export default function InvoiceAction(){

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [ dueDate, setDueDate ] = useState(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate()));
    const [ isDueOpen, setIsDueOpen ] = useState(false);
    const [ monthToDisplay, setMonthToDisplay ] = useState(new Date(dueDate.getFullYear(), dueDate.getMonth(), 1));
    const days = [];
    const dayOfWeek = monthToDisplay.getDay();
    for(let i = 0; i < 42; i++){
        days.push(new Date(monthToDisplay.getFullYear(), monthToDisplay.getMonth(), i + 1 - dayOfWeek));
    }

    const clickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        if(isDueOpen){
            setIsDueOpen(false);
        }
    };

    const calendarHandler = () => {
        setIsDueOpen(!isDueOpen);
    };

    const onCheckHandler = (e: FormEvent) => {
        setDueDate(new Date(Number((e.target as HTMLInputElement).value)));
    };

    return(
        <form className={`${style["action"]}`} onClick={clickHandler} onSubmit={() => console.log("onSubmit")}>
            <Back />
            <h1 className={`${style["action__title"]}`}>New Invoice</h1>
            <fieldset className={`${style["fieldset"]}`}>
                <legend className={`${style["fieldset__legend"]}`}>Bill From</legend>
                <div className={`${style["fieldset__block"]}`}>
                    <label className={`${style["fieldset__label"]}`} htmlFor="from-street">Street Address</label>
                    <input className={`${style["fieldset__input"]}`} type="text" id="from-street" />
                </div>
                <div className={`${style["fieldset__block"]} ${style["fieldset__block--city"]}`}>
                    <label className={`${style["fieldset__label"]}`} htmlFor="from-city">City</label>
                    <input className={`${style["fieldset__input"]}`} type="text" id="from-city" />
                </div>
                <div className={`${style["fieldset__block"]} ${style["fieldset__block--postal"]}`}>
                    <label className={`${style["fieldset__label"]}`} htmlFor="from-postal">Post Code</label>
                    <input className={`${style["fieldset__input"]}`} type="text" id="from-postal" />
                </div>
                <div className={`${style["fieldset__block"]} ${style["fieldset__block--country"]}`}>
                    <label className={`${style["fieldset__label"]}`} htmlFor="from-country">Country</label>
                    <input className={`${style["fieldset__input"]}`} type="text" id="from-country" />
                </div>
            </fieldset>
            <fieldset className={`${style["fieldset"]} ${style["fieldset--to"]}`}>
                <legend className={`${style["fieldset__legend"]}`}>Bill To</legend>
                <div className={`${style["fieldset__block"]}`}>
                    <label className={`${style["fieldset__label"]}`} htmlFor="to-street">Street Address</label>
                    <input className={`${style["fieldset__input"]}`} type="text" id="to-street" />
                </div>
                <div className={`${style["fieldset__block"]} ${style["fieldset__block--city"]}`}>
                    <label className={`${style["fieldset__label"]}`} htmlFor="to-city">City</label>
                    <input className={`${style["fieldset__input"]}`} type="text" id="to-city" />
                </div>
                <div className={`${style["fieldset__block"]} ${style["fieldset__block--postal"]}`}>
                    <label className={`${style["fieldset__label"]}`} htmlFor="to-postal">Post Code</label>
                    <input className={`${style["fieldset__input"]}`} type="text" id="to-postal" />
                </div>
                <div className={`${style["fieldset__block"]} ${style["fieldset__block--country"]}`}>
                    <label className={`${style["fieldset__label"]}`} htmlFor="to-country">Country</label>
                    <input className={`${style["fieldset__input"]}`} type="text" id="to-country" />
                </div>
                <div className={`${style["fieldset__block"]} ${style["fieldset__block--due"]}`}>
                    <label className={`${style["fieldset__label"]}`} htmlFor="to-due">Invoice Date</label>
                    <input type="button" className={`${style["fieldset__input"]}`} id="to-due" value={`${dueDate.getDate()} ${months[dueDate.getMonth()]} ${dueDate.getFullYear()}`} onClick={calendarHandler}/>
                    <section className={`${style["calendar"]} ${ isDueOpen ? style["calendar--show"] : ""}`} onClick={(e) => e.stopPropagation()}>
                        <div className={`${style["calendar__head"]}`}>
                            <button className={`${style["calendar__previous"]}`}><Image src={left} alt="left carret"/></button>
                            <h2 className={`${style["calendar__date"]}`}>{`${months[monthToDisplay.getMonth()]} ${monthToDisplay.getFullYear()}`}</h2>
                            <button className={`${style["calendar__next"]}`}><Image src={right} alt="left carret"/></button>
                        </div>
                        <div className={`${style["calendar__dates"]}`}>
                            <p className={`${style["calendar__day"]} ${style["calendar__day--red"]} ${style["calendar__day--padding"]}`}>Su</p>
                            <p className={`${style["calendar__day"]} ${style["calendar__day--padding"]}`}>Mo</p>
                            <p className={`${style["calendar__day"]} ${style["calendar__day--padding"]}`}>Tu</p>
                            <p className={`${style["calendar__day"]} ${style["calendar__day--padding"]}`}>We</p>
                            <p className={`${style["calendar__day"]} ${style["calendar__day--padding"]}`}>Th</p>
                            <p className={`${style["calendar__day"]} ${style["calendar__day--padding"]}`}>Fr</p>
                            <p className={`${style["calendar__day"]} ${style["calendar__day--padding"]}`}>Sa</p>
                            {
                                days.map(day => {
                                    return(
                                        <div key={day.getTime()} className={`${style["calendar__day"]}`}>
                                            <input className={`${style["calendar__radio"]}`} type="radio" id={`${day.getTime()}`} value={day.getTime()} name="calendar" 
                                            disabled={day.getTime() < monthToDisplay.getTime() || day.getTime() > (new Date((new Date(monthToDisplay.getTime())).setMonth(monthToDisplay.getMonth() + 1)).setDate(0))}
                                            defaultChecked={dueDate.getTime() === day.getTime()} onChange={onCheckHandler}/>
                                            <label className={`${style["calendar__label"]}`} htmlFor={`${day.getTime()}`}>{day.getDate()}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </section>
                </div>
            </fieldset>
        </form>
    );
}