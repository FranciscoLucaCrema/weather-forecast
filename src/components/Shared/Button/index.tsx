import styles from "./Button.module.scss";

function Button({
  handleClick,
}: {
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      Buscar
    </button>
  );
}

export default Button;
