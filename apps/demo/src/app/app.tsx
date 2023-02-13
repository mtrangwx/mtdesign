import styles from './app.module.css';
import { useViewportSize } from '@mtdesign/use-viewport-size';

export function App() {
  const size = useViewportSize();
  return (
    <div className={styles.app} data-testid="app">
      {size.width}px / {size.height}px
    </div>
  );
}

export default App;
