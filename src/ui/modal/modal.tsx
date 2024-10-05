import Back from "../back/back";
import style from "./modal.module.scss";

export default function Modal(){

    return(
        <section className={`${style["modal"]}`}>
            <Back />
            <h1>New Invoice</h1>
            
        </section>
    );
}