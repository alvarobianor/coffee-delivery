import { defaultTheme } from '@styles/themes/default';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type ColorKeyofs = keyof typeof defaultTheme.colors;

type Color = Extract<
  ColorKeyofs,
  | 'brand-purple-light'
  | 'brand-yellow-dark'
  | 'brand-yellow'
  | 'brand-yellow-light'
  | 'brand-purple-dark'
  | 'brand-purple'
>;

type PropsStyled = {
  $background?: Color;
  $hoverColor?: Color;
};

type Props = {
  $text: string;
} & Omit<PropsStyled, '$hoverColor'> &
  ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ $text, ...rest }: Props) {
  const backgroundColor: string = rest?.$background ?? '';

  const [base, color, variant] = backgroundColor.split('-');

  let hoverColor = null;

  if (variant == 'light') {
    hoverColor = [base, color].join('-');
  } else {
    hoverColor = [base, color, 'dark'].join('-');
  }

  const hoverColorTyped = hoverColor as unknown as Color | undefined;

  return (
    <ButtonComponent {...rest} $hoverColor={hoverColorTyped}>
      {$text}
    </ButtonComponent>
  );
}

// implements the type secondary and state using a base button to start then
const ButtonComponent = styled.button<PropsStyled>`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors['base-white']};
  font-weight: 700;
  background: ${({ theme, $background = 'base-button' }) =>
    theme.colors[$background as ColorKeyofs]};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  border: none;
  border-radius: 6px;

  :hover {
    background: ${({ theme, $hoverColor = 'base-hover' }) =>
      theme.colors[$hoverColor as ColorKeyofs]};
  }
`;
