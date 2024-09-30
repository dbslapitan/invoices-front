import style from "./no-invoice.module.scss";
import empty from "../../../public/images/illustration-empty.svg";
import Image from "next/image";

export default function NoInvoice(){
    return(
        <div className={`${style["empty"]}`}>
            <Image src={empty} alt="Illustration for no invoices"></Image>
            <h2 className={`${style["empty__header"]}`}>There is nothing here</h2>
            <p className={`${style["empty__body"]}`}>Create an invoice by clicking the <span>New</span> button and get started</p>
        </div>
    );
}