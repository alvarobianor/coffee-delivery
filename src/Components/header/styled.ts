import styled from 'styled-components';

export const HeaderContainer = styled.nav`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 6.5rem;

    background-color: ${({ theme }) => theme.colors['brand-yellow-light']};

    align-items: center;
    justify-content: space-between;

    img {
        height: 5rem;
        width: 5rem;
    }
`;
