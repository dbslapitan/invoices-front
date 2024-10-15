import Link from "next/link";
import Filter from "../filter/filter";
import style from "./invoices-header.module.scss";

export default function InvoicesHeader(){
    return(
        <section className={`${style["header"]}`}>
            <div className={`${style["header__left"]}`}>
                <h1 className={`${style["header__title"]}`}>Invoices</h1>
                <p className={`${style["header__count"]}`}>7 invoices</p>
            </div>
            <Filter />
            <Link href={'/preview/invoices/add'} className={`${style["header__add"]} btn--purple`}>
                <span className={`${style["header__plus"]}`}></span>
                New <span className={`${style["header__add--show"]}`}>&nbsp;Invoice</span>
            </Link>
        </section>
    );
}