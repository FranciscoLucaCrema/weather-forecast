import React, { useState } from "react";
import styles from "./Input.module.scss";
import Button from "@/components/Shared/Button";
import Input from "@/components/Form/Input";
import Switch from "@/components/ThemeSwitch";
import InputSelect from "@/components/Form/Select";

function InputContainer({
  fetchData,
}: {
  fetchData: (city: string, days: number) => void;
}) {
  const [value, setValue] = useState<string>("");
  const [days, setDays] = useState<number>(1);

  const handleFetch = async () => {
    await fetchData(value, days);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSelectDays = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDays(parseInt(e.target.value));
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") handleFetch();
  };

  return (
    <div className={styles.input_container}>
      <div className={styles.inputs}>
        <InputSelect handleSelectDays={handleSelectDays} />
        <Input handleChange={handleChange} handleKeyUp={handleKeyUp} />
      </div>
      <Button handleClick={handleFetch} />
      {/* add input 1/10 days */}
      <Switch />
    </div>
  );
}

export default InputContainer;
