import { useStateNumber } from './NumberContext'

export const ComponentA2 = () => {
  const { setNumber, number } = useStateNumber();

  return (
    <div>
      <h2>Component A2</h2>
      <button
        type="button"
        onClick={()=> {setNumber(number+1)}}
      >
        Add
      </button>
    </div>
  );
}
