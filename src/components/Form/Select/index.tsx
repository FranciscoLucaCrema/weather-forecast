import styles from "./InputSelect.module.scss";

function InputSelect({
  handleSelectDays,
  daysOptions,
}: {
  handleSelectDays: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  daysOptions: number[];
}) {
  return (
    <select className={styles.inputSelect} onChange={handleSelectDays}>
      {daysOptions.map((option) => (
        <option key={option} value={option}>
          {option} Days
        </option>
      ))}
    </select>
  );
}

export default InputSelect;
