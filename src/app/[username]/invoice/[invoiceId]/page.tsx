import Back from "@/ui/back/back";
import style from "./invoice.module.scss";

export default function Invoice({ params }: { params: { invoiceId: string } }) {

    const status = "Paid";

    return (
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
                <h1 className={`${style["invoice__id"]} ${style["invoice__large"]}`}>XM9141</h1>
                <p className={`${style["invoice__small"]}`}>Graphic Design</p>
                <address className={`${style["invoice__small"]} ${style["invoice__address"]} ${style["invoice__address--from"]}`}>
                    19 Union Terrace
                    <br />
                    London
                    <br />
                    E13EZ
                    <br />
                    United Kingdom
                </address>
                <div className={`${style["invoice__to"]}`}>
                    <div className={`${style["invoice__item--first"]}`}>
                        <div className={`${style["invoice__container"]}`}>
                            <p className={`${style["invoice__label"]} ${style["invoice__small"]}`}>Invoice Date</p>
                            <p className={`${style["invoice__info"]} ${style["invoice__large"]}`}>21 Aug 2021</p>
                        </div>
                        <div className={`${style["invoice__container"]}`}>
                            <p className={`${style["invoice__label"]} ${style["invoice__small"]}`}>Payment Due</p>
                            <p className={`${style["invoice__info"]} ${style["invoice__large"]}`}>20 Sep 2021</p>
                        </div>
                    </div>
                    <div className={`${style["invoice__item--second"]}`}>
                        <div className={`${style["invoice__container"]}`}>
                            <p className={`${style["invoice__label"]} ${style["invoice__small"]}`}>Bill To</p>
                            <p className={`${style["invoice__info"]} ${style["invoice__large"]}`}>Alex Grim</p>
                        </div>
                        <address className={`${style["invoice__small"]} ${style["invoice__address"]} ${style["invoice__address--to"]}`}>
                            84 Church Way
                            <br />
                            Bradford
                            <br />
                            BD1 9PB
                            <br />
                            United Kingdom
                        </address>
                    </div>
                    <div className={`${style["invoice__container"]} ${style["invoice__item--third"]}`}>
                        <p className={`${style["invoice__label"]} ${style["invoice__small"]}`}>Sent to</p>
                        <p className={`${style["invoice__info"]} ${style["invoice__large"]}`}>alexgrim@gmail.com</p>
                    </div>
                </div>
            </article>
        </section>
    );
}