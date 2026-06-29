import css from './CafeInfo.module.css';

export default function Cafeinfo() {
  return (
    <div className={css.container}>
      <h1 className={css.title}> Кафе "Sip Happens" </h1>
      <p className={css.description}>
        Будь ласка, оцініть наш сервіс, вибравши один із варіантів нижче.
      </p>{' '}
    </div>
  );
}
