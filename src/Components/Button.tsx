import { defaultTheme } from '@styles/themes/default';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

type Color = keyof typeof defaultTheme.colors;

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

  let hoverColor = undefined;

  if (variant == 'light' && ['yellow', 'purple'].includes(color)) {
    hoverColor = [base, color].join('-');
  } else if (['yellow', 'purple'].includes(color)) {
    hoverColor = [base, color, 'dark'].join('-');
  }

  const hoverColorTyped = hoverColor as unknown as Color | undefined;

  return (
    <ButtonComponent {...rest} $hoverColor={hoverColorTyped}>
      {$text}
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button<PropsStyled>`
  padding: 0.75rem 2.8rem;
  color: ${({ theme }) => theme.colors['base-white']};
  font-weight: 700;
  background: ${({ theme, $background = 'base-button' }) =>
    theme.colors[$background]};
  font-size: ${({ theme }) => theme.textSizes['components-button-g']};
  border: none;
  border-radius: 6px;

  :hover {
    background: ${({ theme, $hoverColor = 'base-hover' }) =>
      theme.colors[$hoverColor]};
  }
`;
