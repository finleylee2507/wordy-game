import styled from 'styled-components';
import * as React from 'react';

type ButtonProps = {
  variant: 'filled' | 'outlined';
  color?: 'green-light' | 'green-dark';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
};

const SIZES = {
  small: {
    fontSize: `clamp(${14 / 16}rem, 1vw + ${12 / 16}rem, ${16 / 16}rem)`,
    padding: 'clamp(6px, 0.5vw + 5px, 8px) clamp(12px, 1vw + 10px, 16px)',
    borderRadius: '6px',
    fontWeight: 600
  },
  medium: {
    fontSize: `clamp(${20 / 16}rem, 2vw + ${16 / 16}rem, ${32 / 16}rem)`,
    padding: 'clamp(8px, 0.5vw + 7px, 10px) clamp(20px, 1.5vw + 15px, 30px)',
    borderRadius: '8px',
    fontWeight: 600
  },
  large: {
    fontSize: `clamp(${28 / 16}rem, 3vw + ${20 / 16}rem, ${44 / 16}rem)`,
    padding: 'clamp(10px, 1vw + 8px, 14px) clamp(30px, 3vw + 20px, 52px)',
    borderRadius: '10px',
    fontWeight: 600
  }
};

const COLORS = {
  'green-light': {
    outlined: {
      backgroundColor: 'var(--color-green-300)',
      color: 'var(--color-green-500)',
      opacity: 0.85
    },
    filled: {
      backgroundColor: 'var(--color-green-500)',
      color: 'var(--color-white)',
      opacity: 0.95
    }
  },
  'green-dark': {
    outlined: {
      backgroundColor: 'var(--color-green-300)',
      color: 'var(--color-green-900)',
      opacity: 0.85
    },
    filled: {
      backgroundColor: 'var(--color-green-900)',
      color: 'var(--color-white)',
      opacity: 0.95
    }
  }
};

const Button = ({
  variant,
  color = 'green-light',
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
    '--text-color': COLORS[color][variant].color,
    '--background-color': COLORS[color][variant].backgroundColor,
    '--border': variant === 'filled' ? 'none' : '1px solid',
    '--border-color': variant === 'filled' ? 'none' : color,
    '--opacity': COLORS[color][variant].opacity,
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
  transition:
    box-shadow 300ms ease,
    opacity 300ms ease;
  opacity: var(--opacity);
  &:hover,
  &:focus {
    box-shadow: var(--box-shadow-hover);
    opacity: 1;
  }
`;

export default Button;
