"use client";
import { useRouter } from "next/navigation";
import style from "./back.module.scss";

export default function Back(){

    const router = useRouter();

    const clickHandler = () => {
        router.back();
    }

    return(
        <button className={`${style["back"]}`} onClick={clickHandler}>Go Back</button>
    );
}