import { render } from '@testing-library/react';

import ReactComponentsSwitch from './react-components-switch';

describe('ReactComponentsSwitch', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ReactComponentsSwitch />);
    expect(baseElement).toBeTruthy();
  });
});
