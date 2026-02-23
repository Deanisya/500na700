import s from "./Preloader.module.scss";

export default function Preloader() {
  return (
    <div className={s.overlay} role="status" aria-label="Загрузка">
      <div className={s.spinner} />
      <span className={s.text}>Загрузка...</span>
    </div>
  );
}
