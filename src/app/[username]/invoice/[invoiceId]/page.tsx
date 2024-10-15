import Back from "@/ui/back/back";
import style from "./invoice.module.scss";
import Link from "next/link";

export default function Invoice({params}: {params: {invoiceId: string}}){
    return(
            <section className={`${style["invoice"]}`}>
                <Back />
            </section>
    );
}