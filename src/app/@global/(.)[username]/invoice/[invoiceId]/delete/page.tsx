import FullModal from "@/ui/full-modal/full-modal";
import style from "./page.module.scss";
import Link from "next/link";
import DeleteButton from "@/ui/delete-btn/delete-btn";

export default function Delete({params}: {params: {username: string, invoiceId: string}}){
    return(
        <FullModal className={`${style["modal"]}`}>
            <section className={`${style["delete"]}`}>
                <h1 className={`${style["delete__header"]}`}>Confirm Deletion</h1>
                <p className={`${style["delete__description"]}`}>Are you sure you want to delete invoice #XM9141? This action cannot be undone.</p>
                <Link href={`/${params.username}/invoice/${params.invoiceId}`}  className={`btn--secondary ${style["delete__cancel"]}`}>Cancel</Link>
                <DeleteButton />
            </section>
        </FullModal>
    );
}