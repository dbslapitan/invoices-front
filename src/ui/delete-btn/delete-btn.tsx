"use client";

import style from "./delete-btn.module.scss";

export default function DeleteButton(){
    return(
        <button className={`btn--red ${style["delete"]}`}>Delete</button>
    );
}