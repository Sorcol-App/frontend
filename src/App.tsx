import './styles/tailwind.css';
import './styles/globals.css';

import { Button } from './components/atoms/Button/Button';

function App() {
  return (
    <>
      <Button label={'Componente de prueba'} primary={true} />
    </>
  );
}

export default App;
