"use client";

import { FormEvent, MouseEvent, MutableRefObject, useEffect, useRef, useState } from "react";
import Back from "../back/back";
import style from "./invoice-action.module.scss";
import Image from "next/image";
import left from "../../../public/icons/icon-arrow-left.svg";
import right from "../../../public/icons/icon-arrow-right.svg";
import { v4 as uuidv4 } from "uuid";
import trash from "../../../public/icons/icon-delete.svg";
import chevron from "../../../public/icons/icon-arrow-down.svg";
import { Invoice } from "@/models/invoice";

export default function InvoiceAction() {

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const [dueDate, setDueDate] = useState(new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate()));
    const [isDueOpen, setIsDueOpen] = useState(false);
    const [isTermsOpen, setIsTermsOpen] = useState(false);
    const [monthToDisplay, setMonthToDisplay] = useState(new Date(dueDate.getFullYear(), dueDate.getMonth(), 1));
    const days = [];
    const dayOfWeek = monthToDisplay.getDay();

    const [invoice, setInvoice] = useState<Invoice>({
        isDraft: true,
        billFrom: {
            street: "",
            city: "",
            postal: "",
            country: ""
        },
        billTo: {
            name: "",
            email: "",
            street: "",
            city: "",
            postal: "",
            country: ""
        },
        invoiceDate: (new Date()).getTime(),
        terms: 1,
        items: [{
            name: "",
            qty: 1,
            price: 0
        }]
    });

    const addRef: MutableRefObject<null | HTMLButtonElement> = useRef(null);
    const isScrollDown = useRef(false);

    const [items, setItems] = useState([{
        id: uuidv4(),
        name: "",
        qty: 1,
        price: 0
    }]);

    for (let i = 0; i < 42; i++) {
        days.push(new Date(monthToDisplay.getFullYear(), monthToDisplay.getMonth(), i + 1 - dayOfWeek));
    }

    useEffect(() => {
        if (isScrollDown.current) {
            (addRef.current as HTMLButtonElement).scrollIntoView({
                behavior: "smooth"
            });
            isScrollDown.current = false;
        }

    });

    const formHandler = (e: MouseEvent) => {
        e.stopPropagation();
        if (isDueOpen) {
            setIsDueOpen(false);
        }
        if (isTermsOpen) {
            setIsTermsOpen(false);
        }
    };

    const termClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        if (isDueOpen) {
            setIsDueOpen(false);
        }
        setIsTermsOpen(!isTermsOpen);
    };

    const dueClickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        if (isTermsOpen) {
            setIsTermsOpen(false);
        }
        setIsDueOpen(!isDueOpen);
    };

    const onCheckHandler = (e: FormEvent) => {
        setDueDate(new Date(Number((e.target as HTMLInputElement).value)));
    };

    const previousMonthHandler = () => {
        setMonthToDisplay(new Date(monthToDisplay.setMonth(monthToDisplay.getMonth() - 1)));
    };

    const nextMonthHandler = () => {
        setMonthToDisplay(new Date(monthToDisplay.setMonth(monthToDisplay.getMonth() + 1)));
    };

    const addItem = () => {
        setItems([...items, {
            id: uuidv4(),
            name: "",
            qty: 1,
            price: 0
        }
        ]);

        isScrollDown.current = true;
    };

    const deleteItem = (index: number) => {

        if (items.length === 1) {
            setItems([{
                id: uuidv4(),
                name: "",
                qty: 1,
                price: 0
            }
            ]);
        }
        else {
            setItems([...items].toSpliced(index, 1));
        }
    }

    const submitHandler = (e: FormEvent) => {
        e.preventDefault();
    };

    const termHandler = (term: number) => {
        const temp = JSON.parse(JSON.stringify(invoice));
        (temp as Invoice).terms = term;
        setInvoice(temp);
    };

    return (
        <form className={`${style["action"]}`} onClick={formHandler} onSubmit={submitHandler}>
            <Back />
            <div className={`${style["scroll"]}`}>
                <h1 className={`${style["action__title"]}`}>New Invoice</h1>

                <fieldset className={`${style["fieldset"]}`}>
                    <legend className={`${style["fieldset__legend"]}`}>Bill From</legend>
                    <div className={`${style["fieldset__block"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="from-street">Street Address</label>
                        <input className={`${style["fieldset__input"]}`} type="text" id="from-street" defaultValue={invoice.billFrom.street} />
                    </div>
                    <div className={`${style["fieldset__block"]} ${style["fieldset__block--city"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="from-city">City</label>
                        <input className={`${style["fieldset__input"]}`} type="text" id="from-city" defaultValue={invoice.billFrom.city} />
                    </div>
                    <div className={`${style["fieldset__block"]} ${style["fieldset__block--postal"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="from-postal">Post Code</label>
                        <input className={`${style["fieldset__input"]}`} type="text" id="from-postal" defaultValue={invoice.billFrom.postal} />
                    </div>
                    <div className={`${style["fieldset__block"]} ${style["fieldset__block--country"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="from-country">Country</label>
                        <input className={`${style["fieldset__input"]}`} type="text" id="from-country" defaultValue={invoice.billFrom.country} />
                    </div>
                </fieldset>
                <fieldset className={`${style["fieldset"]} ${style["fieldset--to"]}`}>
                    <legend className={`${style["fieldset__legend"]}`}>Bill To</legend>
                    <div className={`${style["fieldset__block"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="to-street">Street Address</label>
                        <input className={`${style["fieldset__input"]}`} type="text" id="to-street" defaultValue={invoice.billTo.street} />
                    </div>
                    <div className={`${style["fieldset__block"]} ${style["fieldset__block--city"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="to-city">City</label>
                        <input className={`${style["fieldset__input"]}`} type="text" id="to-city"  defaultValue={invoice.billTo.city}/>
                    </div>
                    <div className={`${style["fieldset__block"]} ${style["fieldset__block--postal"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="to-postal">Post Code</label>
                        <input className={`${style["fieldset__input"]}`} type="text" id="to-postal" defaultValue={invoice.billTo.postal} />
                    </div>
                    <div className={`${style["fieldset__block"]} ${style["fieldset__block--country"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="to-country">Country</label>
                        <input className={`${style["fieldset__input"]}`} type="text" id="to-country" defaultValue={invoice.billTo.country} />
                    </div>
                    <div className={`${style["fieldset__block"]} ${style["fieldset__block--due"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="to-due">Invoice Date</label>
                        <input type="button" className={`${style["fieldset__input"]}`} id="to-due" value={`${dueDate.getDate()} ${months[dueDate.getMonth()]} ${dueDate.getFullYear()}`} onClick={dueClickHandler} />
                        <section className={`${style["calendar"]} ${isDueOpen ? style["calendar--show"] : ""}`} onClick={(e) => e.stopPropagation()}>
                            <div className={`${style["calendar__head"]}`}>
                                <button type="button" className={`${style["calendar__previous"]}`} onClick={previousMonthHandler}><Image src={left} alt="left carret" /></button>
                                <h2 className={`${style["calendar__date"]}`}>{`${months[monthToDisplay.getMonth()]} ${monthToDisplay.getFullYear()}`}</h2>
                                <button type="button" className={`${style["calendar__next"]}`}><Image src={right} alt="left carret" onClick={nextMonthHandler} /></button>
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
                                        return (
                                            <div key={day.getTime()} className={`${style["calendar__day"]}`}>
                                                <input className={`${style["calendar__radio"]}`} type="radio" id={`${day.getTime()}`} value={day.getTime()} name="calendar"
                                                    disabled={day.getTime() < monthToDisplay.getTime() || day.getTime() > (new Date((new Date(monthToDisplay.getTime())).setMonth(monthToDisplay.getMonth() + 1)).setDate(0)) || day.getTime() < (new Date((new Date().getFullYear()), (new Date()).getMonth(), (new Date()).getDate()).getTime())}
                                                    defaultChecked={dueDate.getTime() === day.getTime()} onChange={onCheckHandler} />
                                                <label className={`${style["calendar__label"]}`} htmlFor={`${day.getTime()}`}>{day.getDate()}</label>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </section>
                    </div>
                    <div className={`${style["fieldset__block"]} ${style["fieldset__block--term"]}`}>
                        <Image className={`${style["fieldset__block--chevron"]}`} src={chevron} alt="chevron right"></Image>
                        <label className={`${style["fieldset__label"]}`} htmlFor="to-terms">Payment Terms</label>
                        <input type="button" className={`${style["fieldset__input"]}`} id="to-due" value={`Net ${invoice.terms} Day`} onClick={termClickHandler} />
                        <div className={`${style["select"]} ${isTermsOpen ? style["select--show"] : ""}`}>
                            <button type="button" className={`${style["select__option"]}`} onClick={() => termHandler(1)}>Net 1 Day</button>
                            <button type="button" className={`${style["select__option"]}`} onClick={() => termHandler(7)}>Net 7 Days</button>
                            <button type="button" className={`${style["select__option"]}`} onClick={() => termHandler(14)}>Net 14 Days</button>
                            <button type="button" className={`${style["select__option"]}`} onClick={() => termHandler(30)}>Net 30 Days</button>
                        </div>
                    </div>
                    <div className={`${style["fieldset__block"]} ${style["fieldset__block"]}`}>
                        <label className={`${style["fieldset__label"]}`} htmlFor="to-description">Project Description</label>
                        <input className={`${style["fieldset__input"]}`} type="text" id="to-description" />
                    </div>
                </fieldset>
                <fieldset className={`${style["fieldset"]} ${style["fieldset__items"]}`}>
                    <legend className={`${style["fieldset__legend"]} ${style["fieldset__legend--large"]}`}>Item List</legend>
                    {
                        items.map((item, index) => {
                            return (
                                <div key={item.id} className={`${style["item"]}`}>
                                    <div className={`${style["fieldset__block"]} ${style["item__container"]}  ${style["item__container--name"]}`}>
                                        <label className={`${style["fieldset__label"]} ${style["item__label"]}`} htmlFor={`name-${index}`}>Item Name</label>
                                        <input className={`${style["fieldset__input"]} ${style["item__input"]}`} type="text" id={`name-${index}`} defaultValue={item.name} />
                                    </div>
                                    <div className={`${style["fieldset__block"]} ${style["item__container"]}  ${style["item__container--qty"]}`}>
                                        <label className={`${style["fieldset__label"]} ${style["item__label"]}`} htmlFor={`qty-${index}`}>Qty.</label>
                                        <input className={`${style["fieldset__input"]} ${style["item__input"]}`} type="number" id={`qty-${index}`} defaultValue={item.qty} />
                                    </div>
                                    <div className={`${style["fieldset__block"]} ${style["item__container"]}  ${style["item__container--price"]}`}>
                                        <label className={`${style["fieldset__label"]} ${style["item__label"]}`} htmlFor={`price-${index}`}>Price</label>
                                        <input className={`${style["fieldset__input"]} ${style["item__input"]}`} type="number" id={`price-${index}`} defaultValue={item.price} />
                                    </div>
                                    <div className={`${style["fieldset__block"]} ${style["item__container"]}  ${style["item__container--total"]}`}>
                                        <p className={`${style["fieldset__label"]} ${style["item__label"]}`}>Total</p>
                                        <p className={`${style["item__input--total"]}`}>{ item.qty * item.price }</p>
                                    </div>
                                    <button type="button" className={`${style["item__delete"]}`} onClick={() => deleteItem(index)}><Image src={trash} alt="trash can"></Image></button>
                                </div>
                            );
                        })
                    }
                    <button className={`btn--secondary ${style["item__add"]}`} type="button" onClick={addItem} ref={addRef}>+ Add New Item</button>
                </fieldset>
            </div>
            <div className={`${style["action__gradient"]}`}></div>
            <div className={`${style["buttons"]}`}>
                <button type="button" className={`${style["buttons__discard"]} btn--secondary`}>Discard</button>
                <button type="button" className={`${style["buttons__draft"]}`}>Save as Draft</button>
                <button type="submit" className={`${style["buttons__save"]} btn--purple`}>Save & Send</button>
            </div>
        </form>
    );
}