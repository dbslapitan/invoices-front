"use client";

import { MouseEvent, useState } from "react";
import Back from "../back/back";
import style from "./invoice-action.module.scss";
import Image from "next/image";
import left from "../../../public/icons/icon-arrow-left.svg";
import right from "../../../public/icons/icon-arrow-right.svg";

export default function InvoiceAction(){

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [ due, setDue ] = useState((new Date()));
    const [ isDueOpen, setIsDueOpen ] = useState(false);
    const month = months[due.getMonth()];
    const day = due.getDate();
    const year = due.getFullYear();
    const days = [];
    const daysOfPrevious = (new Date(year, due.getMonth(), 0)).getDate();
    const daysOfCurrent = (new Date(year, due.getMonth() + 1, 0)).getDate();
    const dayOfWeek = (new Date(year, due.getMonth(), 1)).getDay();
    for(let i = 0; i < 42; i++){
        if(i < dayOfWeek){
            days.push(daysOfPrevious - dayOfWeek + i + 1);
        }
        else if(i >= dayOfWeek && i <= daysOfCurrent + 1){
            days.push(i - dayOfWeek + 1);
        }
        else{
            days.push(i - daysOfCurrent - 1);
        }

    }

    const clickHandler = (e: MouseEvent) => {
        e.stopPropagation();
    };

    const calendarHandler = () => {
        setIsDueOpen(!isDueOpen);
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
                    <input type="button" className={`${style["fieldset__input"]}`} id="to-due" value={`${day} ${month} ${year}`} onClick={calendarHandler}/>
                    <section className={`${style["calendar"]} ${ isDueOpen ? style["calendar--show"] : ""}`}>
                        <div className={`${style["calendar__head"]}`}>
                            <button className={`${style["calendar__previous"]}`}><Image src={left} alt="left carret"/></button>
                            <h2 className={`${style["calendar__date"]}`}>Aug 2021</h2>
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
                                days.map((day, index) => {
                                    return(
                                        <div key={`${month}${year}${index}`} className={`${style["calendar__day"]}`}>
                                            <input className={`${style["calendar__radio"]}`} type="radio" id={`${month}${year}${index}`} value={day} name="calendar" disabled={index < dayOfWeek || daysOfCurrent < index + 1}/>
                                            <label className={`${style["calendar__label"]}`} htmlFor={`${month}${year}${index}`}>{day}</label>
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