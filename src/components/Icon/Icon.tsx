import { IoClose, IoHome, IoSettings } from 'react-icons/io5';
import * as S from './Icon.styles.ts';
import * as React from 'react';
import { IoIosStats, IoMdHelpCircle } from 'react-icons/io';

type IconProps = {
  id: 'close' | 'help' | 'stats' | 'settings' | 'home';
  color?: string;
  size?: number;
  strokeWidth?: number;
};

const icons = {
  close: IoClose,
  help: IoMdHelpCircle,
  stats: IoIosStats,
  settings: IoSettings,
  home: IoHome
};

const Icon: React.FC<IconProps> = ({
  id,
  color,
  size,
  strokeWidth,
  ...delegated
}) => {
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
