import Image from "next/image";
import Link from "next/link";
import s from "./Header.module.scss";

export default function Header() {
  return (
    <header className={s.header_flex}>
      <Link href="/">
        <Image src="/icons/logo.svg" alt="logo" width={70} height={84} className={s.logo} />
      </Link>
      <Link href="/#feedback" className={s.gradientBorder}>
        <span className={s.feedback_text}>Связаться с нами</span>
      </Link>
    </header>
  );
}
