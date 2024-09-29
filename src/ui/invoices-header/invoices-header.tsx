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
            <button>
                New
            </button>
        </section>
    );
}