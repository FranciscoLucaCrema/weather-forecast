import { useState } from "react";
import styles from "./Input.module.scss";
import Button from "@/components/Shared/Button";
import Input from "@/components/Form/Input";
import Switch from "@/components/ThemeSwitch";

function InputContainer({ fetchData }: { fetchData: (city: string) => void }) {
  const [value, setValue] = useState<string>("");

  const handleFetch = async () => {
    await fetchData(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleFetch();
  };

  return (
    <div className={styles.input_container}>
      <Input handleChange={handleChange} handleKeyUp={handleKeyUp} />
      <Button handleClick={handleFetch} />
      <Switch />
    </div>
  );
}

export default InputContainer;
