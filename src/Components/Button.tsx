import { defaultTheme } from '@styles/themes/default';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import styled from 'styled-components';

type PropsStyled = {
    $background: keyof typeof defaultTheme.colors;
};

type Props = {
    $text: string;
    $icon?: ReactNode;
} & PropsStyled &
    ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({ $text, ...rest }: Props) {
    return <ButtonComponent {...rest}>{$text}</ButtonComponent>;
}

const ButtonComponent = styled.button<PropsStyled>`
    padding: 0.75rem 2.8rem;
    color: ${({ theme }) => theme.colors['base-white']};
    font-weight: 700;
    background: ${({ theme, $background }) => theme.colors[$background]};
    font-size: ${({ theme }) => theme.textSizes['components-button-g']};
    border: none;
    border-radius: 6px;
`;
