import { useStateNumber }from  './NumberContext'

export const ComponentA1 = () => {
  const { number } = useStateNumber();
  return (
    <div>
      <h2>Component A1 - {number}</h2>
    </div>
  );
}
