import { ReactNode } from "react";
import style from "./full-modal.module.scss";

export default function FullModal({children, className=""}: {children: ReactNode, className?: string}){
    return(
        <div className={`${style["modal"]} ${className}`}>
            {children}
        </div>
    );
}