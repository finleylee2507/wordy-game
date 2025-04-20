import styled from 'styled-components';
import * as React from 'react';

type ButtonProps = {
  variant: 'filled' | 'outlined';
  color?: string;
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};

const SIZES = {
  small: {
    fontSize: `${16 / 16}rem`,
    padding: '8px 16px',
    borderRadius: '6px',
    fontWeight: 600
  },
  medium: {
    fontSize: `${32 / 16}rem`,
    padding: '12px 26px',
    borderRadius: '8px',
    fontWeight: 600
  },
  large: {
    fontSize: `${44 / 16}rem`,
    padding: '18px 44px',
    borderRadius: '10px',
    fontWeight: 600
  }
};

const Button = ({
  variant,
  color,
  fullWidth = false,
  size = 'small',
  children
}: React.PropsWithChildren<ButtonProps>) => {
  const styles = {
    '--font-size': SIZES[size].fontSize,
    '--padding': SIZES[size].padding,
    '--border-radius': SIZES[size].borderRadius,
    '--font-weight': SIZES[size].fontWeight,
    '--width': fullWidth ? '100%' : 'auto',
    '--text-color': variant === 'filled' ? 'var(--color-white)' : color,
    '--background-color': variant === 'filled' ? color : 'transparent',
    '--border': variant === 'filled' ? 'none' : '1px solid',
    '--border-color': variant === 'filled' ? 'none' : color,
    '--shadow-color': color,
    '--box-shadow':
      variant === 'filled' ? 'var(--shadow-elevation-low)' : 'unset',
    '--box-shadow-hover':
      variant === 'filled'
        ? 'var(--shadow-elevation-medium)'
        : 'var(--shadow-elevation-low)'
  } as React.CSSProperties;

  return <Wrapper style={styles}>{children}</Wrapper>;
};

const Wrapper = styled.button`
  padding: var(--padding);
  border-radius: var(--border-radius);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  width: var(--width);
  color: var(--text-color);
  background-color: var(--background-color);
  border: var(--border);
  border-color: var(--border-color);
  cursor: pointer;
  box-shadow: var(--box-shadow);
  opacity: 0.8;
  transition:
    box-shadow 300ms ease,
    opacity 300ms ease;

  &:hover,
  &:focus {
    box-shadow: var(--box-shadow-hover);
    opacity: 1;
  }
`;

export default Button;
