"use client";

import { MouseEvent, ReactNode, useEffect } from "react";
import style from "./full-modal.module.scss";
import { useRouter } from "next/navigation";

export default function FullModal({children, className=""}: {children: ReactNode, className?: string}){

    const router = useRouter();

    useEffect(() => {
        document.body.style.overflowY = "clip";

        const escPressed = (e: KeyboardEvent) => {  
            if(e.key === "Escape"){
                router.back();
            }
        }

        window.addEventListener("keyup", escPressed);

        return () => {
            document.body.style.overflowY = "auto";
            window.removeEventListener("keyup", escPressed);
        };
    });

    const overlayClick = () => {
        router.back();
    }

    const pageClick = (e: MouseEvent) => {
        e.stopPropagation();
    }

    return(
        <div className={`${style["modal"]} ${className}`} onClick={overlayClick}>
            <div onClick={pageClick}>
                {children}
            </div>
        </div>
    );
}