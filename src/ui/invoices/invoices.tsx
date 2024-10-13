"use client";

import Invoice from "../invoice/invoice";
import InvoicesHeader from "../invoices-header/invoices-header";
import NoInvoice from "../no-invoice/no-invoice";
import style from "./invoices.module.scss";

export default function Invoices(){
    return(
        <section className={`${style["invoices"]}`}>
            <InvoicesHeader />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
            <Invoice />
        </section>
    );
}