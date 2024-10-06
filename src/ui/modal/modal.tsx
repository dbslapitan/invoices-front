"use client";

import { ReactNode } from "react";
import style from "./modal.module.scss";
import { useRouter } from "next/navigation";

export default function Modal({ children }: {children: ReactNode}){

    const router = useRouter();

    const clickHandler = () => {
        router.back();
    }

    return(
        <div className={`${style["modal"]}`} onClick={clickHandler}>
           {children}
        </div>
    );
}