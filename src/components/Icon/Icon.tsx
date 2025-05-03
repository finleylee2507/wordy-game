import { X } from 'react-feather';
import * as S from './Icon.styles.ts';

type IconProps = {
  id: 'close';
  color?: string;
  size?: number;
  strokeWidth?: number;
};

const icons = {
  close: X
};

const Icon = ({ id, color, size, strokeWidth, ...delegated }: IconProps) => {
  const Component = icons[id];

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`);
  }

  return (
    <S.Wrapper strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </S.Wrapper>
  );
};

export default Icon;
