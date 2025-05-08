import styled, { keyframes } from 'styled-components';
import { Button } from '../../components/Button';
import { BREAKPOINTS } from '../../constants.ts';

export const PageWrapper = styled.div`
  background-color: var(--color-green-100);
  min-height: 100%;
  overflow: clip;
`;

export const ContentWrapper = styled.div`
  max-width: 1248px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 100px;
  margin-left: auto;
  margin-right: auto;
  min-height: min(95vh, 950px);
  position: relative;

  @media screen and (max-width: ${BREAKPOINTS.xxl}) {
    max-width: 90%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  row-gap: 80px;
  column-gap: 30px;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
  }
`;

export const LeftColumn = styled.div`
  padding-top: 20px;
  flex: 5;
  min-width: 350px;

  @media screen and (max-width: ${BREAKPOINTS.md}) {
    min-width: unset;
    text-align: center;
  }
`;

export const RightColumn = styled.div`
  flex: 4;
  display: flex;
  justify-content: center;
`;

const logoReveal = keyframes`
  0% {
    opacity: 0;
    transform: perspective(600px) rotateX(90deg) scale(0.6);
    filter: blur(5px);
    box-shadow: 0 0 0 rgba(0, 0, 0, 0);
  }
  40% {
    opacity: 1;
    filter: blur(0);
  }
  70% {
    transform: perspective(600px) rotateX(-15deg) scale(1.1);
    box-shadow: 0 15px 15px rgba(0, 0, 0, 0.3);
  }
  100% {
    transform: perspective(600px) rotateX(0) scale(1);
    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  }
`;

export const WordyLogoWrapper = styled.span`
  display: inline-block;
  width: ${175 / 16}rem;
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${props =>
      props.theme.shouldAnimate ? logoReveal : 'none'};
    animation-duration: 800ms;
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation-fill-mode: both;
    transform-origin: center top;
    will-change: transform, opacity, filter;
  }

  @media screen and (max-width: ${BREAKPOINTS.md}) {
    width: 30%;
  }
`;

export const WordyLogo = styled.img`
  width: 100%;
  aspect-ratio: 1/1;
`;

const titleLetterReveal = keyframes`
  0% {
    opacity: 0;
    transform: scale(1);
  }
  
  25%{
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: 1;
    transform: scale(0);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Title = styled.h1`
  margin-top: 15px;
`;

export const TitleLetter = styled.span`
  display: inline-block;
  text-transform: uppercase;
  transform: scale(1);
  opacity: 1;

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${props =>
      props.theme.shouldAnimate ? titleLetterReveal : 'none'};
    animation-duration: 1000ms;
    animation-timing-function: linear;
    animation-fill-mode: both;
    will-change: transform;

    &:nth-child(1) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '800ms' : '0ms'};
    }

    &:nth-child(2) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '900ms' : '0ms'};
    }

    &:nth-child(3) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '1000ms' : '0ms'};
    }

    &:nth-child(4) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '1100ms' : '0ms'};
    }

    &:nth-child(5) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '1200ms' : '0ms'};
    }
  }
`;

const descriptionWordReview = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }

  50% {
    transform: translateY(-50%);
    opacity: 1;
  }

  100% {
    transform: translateY(0);
  }
`;

export const Description = styled.h3`
  margin-top: 25px;
`;

export const DescriptionWord = styled.span`
  display: inline-block;

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${props =>
      props.theme.shouldAnimate ? descriptionWordReview : 'none'};
    animation-duration: 500ms;
    animation-timing-function: ease;
    animation-fill-mode: both;
    will-change: transform, opacity;

    &:nth-child(1) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '2000ms' : '0ms'};
    }

    &:nth-child(2) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '2100ms' : '0ms'};
    }

    &:nth-child(3) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '2200ms' : '0ms'};
    }

    &:nth-child(4) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '2300ms' : '0ms'};
    }

    &:nth-child(5) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '2400ms' : '0ms'};
    }

    &:nth-child(6) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '2500ms' : '0ms'};
    }

    &:nth-child(7) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '2600ms' : '0ms'};
    }

    &:nth-child(8) {
      animation-delay: ${props =>
        props.theme.shouldAnimate ? '2700ms' : '0ms'};
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 40px;
  display: flex;
  column-gap: 40px;
  row-gap: 20px;

  @media screen and (max-width: ${BREAKPOINTS.md}) {
    flex-direction: column;
  }
`;

const spinningGrid = keyframes`
  0% {
    transform: rotate(0deg) scale(0.3);
    opacity: 0;
  }

  30% {
    opacity: 0.5;
  }

  70% {
    transform: rotate(360deg) scale(1.1);
    opacity: 1;
  }

  85% {
    transform: rotate(360deg) scale(0.95);
  }

  100% {
    transform: rotate(360deg) scale(1);
  }
`;

const fallingGrid = keyframes`
  from {
    transform: translateX(55%) rotate(440deg);
  }
  
  to {
    transform: translateX(55%) rotate(346deg);
  }
`;

export const WordyGridWrapper = styled.div`
  min-width: 400px;
  max-width: 600px;
  filter: drop-shadow(0 5px 8px rgba(0, 0, 0, 0.15));

  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${props =>
      props.theme.shouldAnimate ? spinningGrid : 'none'};
    animation-duration: 1200ms;
    animation-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1);
    animation-fill-mode: both;
    animation-delay: ${props => (props.theme.shouldAnimate ? '1500ms' : '0ms')};
    will-change: transform, opacity;
  }

  @media screen and (max-width: ${BREAKPOINTS.md}) {
    min-width: unset;
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    transform: translateX(55%) rotate(346deg);
    transform-origin: bottom right;
    animation-name: ${props =>
      props.theme.shouldAnimate ? fallingGrid : 'none'};
    animation-duration: 500ms;
    animation-timing-function: ease;
    animation-fill-mode: both;
  }
`;

export const WordyGrid = styled.img`
  width: 100%;
`;

const slideUp = keyframes`
  from {
    transform: translateY(300%);
  }

  to {
    transform: translateY(100%);
  }
`;

export const WordyKeyboardWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  width: 50%;
  transform: translateY(100%);

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation-name: ${props => (props.theme.shouldAnimate ? slideUp : 'none')};
    animation-duration: 800ms;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    animation-delay: ${props => (props.theme.shouldAnimate ? '2700ms' : '0ms')};
  }

  @media screen and (max-width: ${BREAKPOINTS.xl}) {
    display: none;
  }
`;

export const WordyKeyboard = styled.img`
  width: 100%;
  transform: translateY(-50%);
`;

const slideDown = keyframes`
  from {
    transform: translateX(-50%) translateY(-100%);
  }

  to {
    transform: translateX(-50%) translateY(120px);
  }
`;

const slideRight = keyframes`
  from{
    transform: translateX(-100%);
  }
  
  to {
    transform: translateX(-50%);
  }
`;

export const DecorationWrapper = styled.div`
  width: 200px;
  position: absolute;
  top: 0;
  left: 45%;
  transform: translateX(-50%) translateY(120px);

  @media (prefers-reduced-motion: no-preference) {
    will-change: transform;
    animation-name: ${props =>
      props.theme.shouldAnimate ? slideDown : 'none'};
    animation-duration: 800ms;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
    animation-delay: ${props => (props.theme.shouldAnimate ? '2700ms' : '0ms')};
  }

  @media screen and (max-width: ${BREAKPOINTS.xl}) {
    width: 150px;
  }

  @media screen and (max-width: ${BREAKPOINTS.md}) {
    display: block;
    position: absolute;
    top: 20px;
    left: 0;
    width: 20%;
    animation-name: ${props =>
      props.theme.shouldAnimate ? slideRight : 'none'};
    animation-duration: 500ms;
    animation-timing-function: ease-out;
    animation-fill-mode: both;
  }
`;

export const Decoration = styled.img`
  width: 100%;
`;

const buttonReveal = keyframes`
  from {
    opacity: 0;
  }
  
  to {
    opacity: 1;
  }
`;

export const ButtonWrapper = styled.span`
  @media (prefers-reduced-motion: no-preference) {
    animation-name: ${props =>
      props.theme.shouldAnimate ? buttonReveal : 'none'};
    animation-duration: 2000ms;
    animation-timing-function: ease-in-out;
    animation-fill-mode: both;
    animation-delay: ${props => (props.theme.shouldAnimate ? '2500ms' : '0ms')};
  }
`;

const buttonHover = keyframes`
  from {
    transform: scale(1);
  }

  to {
    transform: scale(1.05);
  }
`;

export const CtaButton = styled(Button)`
  will-change: transform;

  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      animation-name: ${buttonHover};
      animation-duration: 500ms;
      animation-timing-function: ease;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
`;
