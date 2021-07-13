export const Llistat = () => {
  const items = [1, 2, 3, 4];

  return (
    <ul>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};
