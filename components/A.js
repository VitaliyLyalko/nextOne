import Link from "next/link";
import s from '../styles/link.module.css'

export  default  function A({text, href}) {
    return (
        <Link href={href} className={s.link}>{text}</Link>
    )
}