import Link from "next/link";
import ThemeToggle from "../theme-toggle/theme-toggle";
import style from "./header.module.scss";
import Image from "next/image";
import logo from "../../../public/logos/logo.svg";
import userImage from "../../../public/images/image-avatar.jpg";

export default function Header(){

    return (
        <header className={`${style["header"]}`}>
            <Link href={`/`} className={`${style["logo"]}`}>
                <span className={`${style["logo__bkg"]}`}></span>
                <Image className={`${style["logo__img"]}`} src={logo} alt="circle with a cut like a pie"></Image>
            </Link>
            <ThemeToggle />
            <div className={`${style["user"]}`}>
                <Image className={`${style["user__img"]}`} src={userImage} alt="user image" priority></Image>
            </div>
        </header>
    );
}