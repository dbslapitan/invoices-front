"use client";

import Invoice from "../invoice/invoice";
import InvoicesHeader from "../invoices-header/invoices-header";
import NoInvoice from "../no-invoice/no-invoice";

export default function Invoices(){
    return(
        <>
            <InvoicesHeader />
            <Invoice />
        </>
    );
}