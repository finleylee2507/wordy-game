import * as React from 'react';
import * as S from './NavBar.styles.ts';
import { Icon } from '../Icon';
import AppIcon from '../../../public/assets/wordy-icon.svg';
import { useBreakpoint } from '../../hooks';
import { BREAKPOINTS_NUMERIC, View } from '../../constants.ts';
import { useDialog, useView } from '../../providers';
import { DialogType } from '../../types.ts';

const ICON_SIZE_MAP: Record<keyof typeof BREAKPOINTS_NUMERIC, number> = {
  sm: 20,
  md: 24,
  lg: 24,
  xl: 24,
  xxl: 24
};

const NavBar: React.FC = () => {
  const iconColor = 'var(--color-gray-500)';
  const currWindowWidth = useBreakpoint(BREAKPOINTS_NUMERIC);
  const iconSize = ICON_SIZE_MAP[currWindowWidth];

  const { setCurrentView } = useView();
  const { openDialog } = useDialog();

  const handleGoHome = () => {
    setCurrentView(View.Landing);
  };

  const handleShowHelp = () => {
    openDialog(DialogType.INSTRUCTIONS);
  };

  return (
    <S.Wrapper>
      <S.ButtonGroup>
        <S.IconButton onClick={handleGoHome}>
          <Icon id="home" color={iconColor} size={iconSize} />
        </S.IconButton>
        <S.IconButton onClick={handleShowHelp}>
          <Icon id="help" color={iconColor} size={iconSize} />
        </S.IconButton>
      </S.ButtonGroup>
      <S.Branding>
        <S.AppLogoWrapper>
          <S.AppLogo src={AppIcon} />
        </S.AppLogoWrapper>
        <S.Heading>WORDY</S.Heading>
      </S.Branding>

      <S.ButtonGroup>
        <S.IconButton>
          <Icon id="stats" color={iconColor} size={iconSize} />
        </S.IconButton>
        <S.IconButton>
          <Icon id="settings" color={iconColor} size={iconSize} />
        </S.IconButton>
      </S.ButtonGroup>
    </S.Wrapper>
  );
};

export default NavBar;
