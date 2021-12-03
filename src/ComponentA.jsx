import { ComponentA2 } from './ComponentA2';
import { ComponentA1} from './ComponentA1';

export const ComponentA = () => {
  return (
    <div>
      <h2>Component A</h2>
      <ComponentA1 />
      <ComponentA2 />
    </div>
  );
}
