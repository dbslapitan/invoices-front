"use client";

import Link from "next/link";
import style from "./invoice.module.scss";

export default function Invoice(){
    return(
        <Link href={"#"} className={`${style["invoice"]}`}>
            <h2 className={`${style["invoice__id"]}`}>RT3080</h2>
            <p className={`${style["invoice__due"]}`}>Due 19 Aug 2021</p>
            <p className={`${style["invoice__name"]}`}>Jensen Huang</p>
            <p className={`${style["invoice__amount"]}`}>$1,800.90</p>
            <p className={`${style["invoice__status"]} ${style["invoice__status--green"]}`}> <span className={`${style["invoice__bullet"]}`}></span>Paid</p>
        </Link>
    );
}