import Back from "@/ui/back/back";
import style from "./invoice.module.scss";
import Link from "next/link";

export default function Invoice({params}: {params: {invoiceId: string}}){
    
    const status = "Paid";

    return(
            <section className={`${style["invoice"]}`}>
                <Back />
                <article className={`${style["invoice__actions"]}`}>
                    <p className={`${style["invoice__label"]}`}>Status</p>
                    <p className={`${style["invoice__status"]} ${style[`invoice__status--${status}`]}`}>{status}</p>
                    <div className={`${style["invoice__buttons"]}`}>
                        <button className={`btn--secondary ${style["invoice__button"]} ${style["invoice__button--edit"]}`}>Edit</button>
                        <button className={`btn--red ${style["invoice__button"]} ${style["invoice__button--delete"]}`}>Delete</button>
                        <button className={`btn--purple ${style["invoice__button"]} ${style["invoice__button--mark"]}`}>Mark as Paid</button>
                    </div>
                </article>
                <article className={`${style["invoice__details"]}`}>
                    <h1 className={`${style["invoice__id"]}`}>XM9141</h1>
                </article>
            </section>
    );
}