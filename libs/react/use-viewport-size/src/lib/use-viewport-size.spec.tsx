import { act } from '@testing-library/react';
import ReactDOM from 'react-dom';

import { useViewportSize }  from './use-viewport-size';

describe('UseViewportSize', () => {
  it('should render successfully', () => {
    // Setup
    const container = document.createElement('div');
    document.body.appendChild(container);

    const App = () => {
      const size = useViewportSize();
      console.log(size);
      return <div>{JSON.stringify(size)}</div>
    }

    // Act
    act(() => {
      ReactDOM.render(<App/>, container);
    })

    // Assert
    expect(container.textContent).toEqual('{"width":1024,"height":768}');

    // Tear down
    document.body.removeChild(container);
  });
});
