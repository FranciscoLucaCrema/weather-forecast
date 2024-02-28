import styles from "./InputSelect.module.scss";

function InputSelect({
  handleSelectDays,
}: {
  handleSelectDays: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}) {
  return (
    <>
      <select className={styles.inputSelect} onChange={handleSelectDays}>
        <option value="">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </>
  );
}

export default InputSelect;
