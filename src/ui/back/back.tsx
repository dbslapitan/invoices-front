"use client";

import { useRouter } from "next/navigation";
import style from "./back.module.scss";
import { MouseEvent } from "react";

export default function Back({className = ""} : {className?: string}){

    const router = useRouter();
    const clickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        router.back();
    }

    return(
        <button type="button" className={`${style["back"]} ${className}`} onClick={clickHandler}>Go Back</button>
    );
}