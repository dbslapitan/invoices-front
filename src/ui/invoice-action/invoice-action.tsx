"use client";

import { MouseEvent, useState } from "react";
import Back from "../back/back";
import style from "./invoice-action.module.scss";

export default function InvoiceAction(){

    const month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [ due, setDue ] = useState((new Date()));
    const toDate = `${due.getDate()} ${month[due.getMonth()]} ${due.getFullYear()}`;

    const clickHandler = (e: MouseEvent) => {
        e.stopPropagation();
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
                    <input type="button" className={`${style["fieldset__input"]}`} id="to-due" value={toDate}/>
                </div>
            </fieldset>
        </form>
    );
}