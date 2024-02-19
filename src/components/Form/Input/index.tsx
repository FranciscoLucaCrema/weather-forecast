function Input({
  handleChange,
}: {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div>
      <input type="text" placeholder="Name city" onChange={handleChange} />
    </div>
  );
}

export default Input;
