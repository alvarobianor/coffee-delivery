import styled from 'styled-components';

export const HeaderContainer = styled.nav`
    display: flex;
    flex-direction: row;

    padding: 2rem 0;

    align-items: center;
    justify-content: space-between;

    img {
        height: 40px;
        width: 84.95px;
    }

    background-color: aquamarine;
`;

export const InfosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    max-height: 2.5rem;
`;
