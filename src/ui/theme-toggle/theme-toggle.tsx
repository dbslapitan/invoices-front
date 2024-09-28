"use client";

import { useState } from "react";
import moon from "../../../public/icons/icon-moon.svg";
import sun from "../../../public/icons/icon-sun.svg";
import style from "./theme-toggle.module.scss";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function ThemeToggle(){

    const { resolvedTheme, setTheme } = useTheme();

    const toggleTheme = () => {
        if(resolvedTheme === "dark"){
            setTheme("light");
        } else{
            setTheme("dark");
        }
    }

    return(
        <button className={`${style["theme"]} ${!!!resolvedTheme ? "" : style["theme--loading"]}`} onClick={toggleTheme}>
        </button>
    );
}