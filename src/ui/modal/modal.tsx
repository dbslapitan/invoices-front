"use client";

import { ReactNode, useEffect } from "react";
import style from "./modal.module.scss";
import { useRouter } from "next/navigation";

export default function Modal({ children }: {children: ReactNode}){

    const router = useRouter();

    const clickHandler = () => {
        router.back();
    }

    useEffect(() => {
        const main = document.querySelector("main");
        const modal = document.querySelector("#modal");
        (main as HTMLElement).style.maxHeight = `${modal?.clientHeight}px`;
        (main as HTMLElement).style.overflowY = `clip`;

        const onResize = () => {
            (main as HTMLElement).style.maxHeight = `${modal?.clientHeight}px`;
            (main as HTMLElement).style.overflowY = `clip`;
        };

        window.addEventListener("resize", onResize);

        return () => {
            window.removeEventListener("resize", onResize);
            (main as HTMLElement).style.maxHeight = `none`;
            (main as HTMLElement).style.overflowY = `auto`;
        }

    });

    return(
        <div className={`${style["modal"]}`} id="modal" onClick={clickHandler}>
           {children}
        </div>
    );
}