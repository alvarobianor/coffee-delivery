import Logo from '@assets/Logo.svg';
import styled from 'styled-components';

import { MapPinLine } from '@phosphor-icons/react';
import { Button } from '@components/Button';

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} />
            <InfosContainer>
                <Button $background="brand-purple" $text="Choró, CE" />
                <MapPinLine />
            </InfosContainer>
        </HeaderContainer>
    );
}

const HeaderContainer = styled.header`
    display: flex;
    height: 6.5rem;
    flex-direction: row;

    align-items: center;
    justify-content: space-between;

    img {
        height: 40px;
        width: 84.95px;
    }

    background-color: aquamarine;
`;

const InfosContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    max-height: 2.5rem;
`;
