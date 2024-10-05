import { ReactNode } from "react";
import Back from "../back/back";
import style from "./modal.module.scss";

export default function Modal({ children }: {children: ReactNode}){

    return(
        <div className={`${style["modal"]}`}>
           {children}
        </div>
    );
}