import styles from './app.module.css';

import { useViewportSize } from '@mtdesign/use-viewport-size';
import { isOdd }  from 'luv-is-odd';
import { useState } from 'react';

// import Button from '@woolworthslimited/core-react-components-button';

export function App() {
  const size = useViewportSize();
  const [ num, setNum] = useState<number>(1);
  const handleUpdate = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNum(+e.target.value);
  }
  return (
    <div data-testid="app">
    {/* <div className={styles.app} data-testid="app"> */}

      <button className="button primary">Button primary</button>
      <button className="button secondary">Button secondary</button>
      <button className="button destructive">Button destructive</button>

      {/* <Button variant="secondary" size="small" onClick={() => console.log('clicked')}>
        Save details
      </Button> */}
      <div><input onChange={handleUpdate} value={num} /></div>
      <div>{isOdd(num) === true ? 'odd' : 'even'}</div>
      {size.width}px / {size.height}px
    </div>
  );
}

export default App;
