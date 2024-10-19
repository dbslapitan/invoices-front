import { ReactNode } from "react";
import style from "./full-modal.module.scss";

export default function FullModal({children}: {children: ReactNode}){
    return(
        <div className={`${style["modal"]}`}>
            {children}
        </div>
    );
}