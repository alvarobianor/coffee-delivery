import { defaultTheme } from '@styles/themes/default';
import styled from 'styled-components';

export type PropsLocationLabel = {
    $color: keyof typeof defaultTheme.colors;
    $background: keyof typeof defaultTheme.colors;
};

export const LocationLabel = styled.button<PropsLocationLabel>`
    background: ${({ $background, theme }) => theme.colors[$background]};
    color: ${({ $color, theme }) => theme.colors[$color]};

    display: flex;
    flex-direction: row;
    align-items: center;

    gap: 0.5rem;

    font-size: 1em;
    font-family: ${({ theme }) => theme.fonts.regular};
    padding: 0.25em 0.5em;
    border: 0;
    border-radius: 8px;
`;
