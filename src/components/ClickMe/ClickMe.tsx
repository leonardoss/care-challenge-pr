import { useState } from 'react';
import { Button, Typography } from '@material-ui/core';

export interface ClickMeProps {
  color?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outlined';
  label?: string;
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
}

const ClickMe: React.FC<ClickMeProps> = ({
  color = 'secondary',
  size = 'medium',
  variant = 'contained',
  label = 'Click me!',
  disabled = false,
  fullWidth = false,
}) => {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button
        type="button"
        color={color}
        size={size}
        variant={variant}
        disabled={disabled}
        fullWidth={fullWidth}
        data-testid="demo-button"
        onClick={() => {
          setCount(count + 1);
        }}>
        {label}
      </Button>
      <Typography>{`Clicked ${count} times.`}</Typography>
    </>
  );
};

export default ClickMe;
