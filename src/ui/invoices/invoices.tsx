"use client";

import InvoicesHeader from "../invoices-header/invoices-header";
import NoInvoice from "../no-invoice/no-invoice";

export default function Invoices(){
    return(
        <>
            <InvoicesHeader />
            <NoInvoice />
        </>
    );
}