import styled from 'styled-components';

export type PropsCart = {
    $numItens?: number;
};

export const CartButton = styled.button<PropsCart>`
    background: ${({ theme }) => theme.colors['brand-yellow-light']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};

    display: flex;
    flex-direction: row;
    align-items: center;

    border: 0;
    border-radius: 4px;

    position: relative;

    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
    font-weight: 400;
    padding: 0.5rem;

    ::before {
        content: ' ';
        display: ${({ $numItens }) => $numItens == undefined && 'none'};
        background-color: ${({ theme }) => theme.colors['brand-yellow-dark']};
        padding: 0.75rem;
        border-radius: 50%;
        position: absolute;
        left: calc(100% - 0.75rem);
        bottom: calc(100% - 0.75rem);
    }

    ::after {
        content: ${({ $numItens }) =>
            `${
                $numItens != null && $numItens > 0 && $numItens < 10
                    ? `'${$numItens}'`
                    : `'+9'`
            }` || '0'};
        display: ${({ $numItens }) => $numItens == undefined && 'none'};

        font-family: ${({ theme }) => theme.fonts.regular};
        font-size: 1rem;

        color: red;
        position: absolute;

        left: calc(100% - 0.5rem);
        bottom: calc(100% - 0.5rem);
    }
`;
