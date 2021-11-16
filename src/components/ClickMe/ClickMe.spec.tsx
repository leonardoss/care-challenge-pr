import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import ClickMe, { ClickMeProps } from './ClickMe';

const clickMeProps: ClickMeProps = {
  color: 'secondary',
  size: 'medium',
  variant: 'contained',
  label: 'Click me!',
  disabled: false,
  fullWidth: false,
};

describe('Button Counter', () => {
  const clickCounterButton = () => userEvent.click(screen.getByTestId('demo-button'));
  const captureCounterText = () => screen.getByText(/Clicked/).innerHTML;

  it('should update the counter when the button is clicked', async () => {
    render(<ClickMe {...clickMeProps} />);
    clickCounterButton();
    await waitFor(() => {
      expect(captureCounterText()).toBe('Clicked 1 times.');
    });
  });
});
