function Button({
  handleClick,
}: {
  handleClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}) {
  return (
    <button type="button" onClick={handleClick}>
      Buscar
    </button>
  );
}

export default Button;
