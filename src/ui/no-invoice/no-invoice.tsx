import style from "./no-invoice.module.scss";
import empty from "../../../public/images/illustration-empty.svg";
import Image from "next/image";

export default function NoInvoice(){
    return(
        <div className={`${style["empty"]}`}>
            <Image className={`${style["empty__img"]}`} src={empty} alt="Illustration for no invoices" width={0} height={160} priority></Image>
            <h2 className={`${style["empty__header"]}`}>There is nothing here</h2>
            <p className={`${style["empty__body"]}`}>Create an invoice by clicking the <strong>New</strong> <strong className={`${style["empty__body--show"]}`}>Invoice</strong> button and get started</p>
        </div>
    );
}