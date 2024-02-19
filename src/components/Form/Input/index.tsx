import styles from "./Input.module.scss";

function Input({
  handleChange,
  handleKeyUp,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}) {
  return (
    <>
      <input
        className={styles.input}
        onKeyUp={handleKeyUp}
        type="text"
        placeholder="Name city"
        onChange={handleChange}
      />
    </>
  );
}

export default Input;
