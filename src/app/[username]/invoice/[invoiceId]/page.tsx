import Back from "@/ui/back/back";
import style from "./invoice.module.scss";
import Link from "next/link";

export default function Invoice({params}: {params: {invoiceId: string}}){
    
    const status = "pending";

    return(
            <section className={`${style["invoice"]}`}>
                <Back />
                <article  className={`${style["invoice__actions"]}`}>
                    <p className={`${style["invoice__label"]}`}>Status</p>
                    <p className={`${style["invoice__status"]}`}>{status}</p>
                    <div className={`${style["invoice__buttons"]}`}>
                        <button className={`${style["invoice__button"]} ${style["invoice__button--edit"]}`}>Edit</button>
                        <button className={`${style["invoice__button"]} ${style["invoice__button--delete"]}`}>Delete</button>
                        <button className={`${style["invoice__button"]} ${style["invoice__button--mark"]}`}>Mark as Paid</button>
                    </div>
                </article>
            </section>
    );
}