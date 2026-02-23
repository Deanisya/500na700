import Image from "next/image";
import s from "./Footer.module.scss";

export default function Footer() {
  return (
    <div className={s.footer_gradient}>
      <div className="container">
        <div className={s.footer_flex}>
          <Image
            src="/icons/logo_footer.svg"
            alt="logo"
            width={103}
            height={124}
          />
          <p className={s.text}>Креативное агентство 500na700</p>
        </div>
      </div>
    </div>
  );
}
