"use client";

import InvoicesHeader from "../invoices-header/invoices-header";
import NoInvoice from "../no-invoice/no-invoice";
import style from "./main.module.scss";

export default function Main(){
    return(
        <>
            <InvoicesHeader />
            <NoInvoice />
        </>
    );
}