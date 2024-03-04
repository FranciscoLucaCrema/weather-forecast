import styles from "./InputSelect.module.scss";

function InputSelect({
  handleSelectDays,
  daysOptions,
}: {
  handleSelectDays: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  daysOptions: number;
}) {
  const test = [];
  for (let index = 0; index < daysOptions; index++) {
    test.push(
      <option key={index} value={index}>
        {index + 1} Days
      </option>
    );
  }

  return (
    <select className={styles.inputSelect} onChange={handleSelectDays}>
      {test}
    </select>
  );
}

export default InputSelect;
