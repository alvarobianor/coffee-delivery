import Logo from '@assets/Logo.svg';
import { HeaderContainer, InfosContainer } from './styled';
import { MapPinLine } from '@phosphor-icons/react';

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} />
            <InfosContainer>
                <MapPinLine />
            </InfosContainer>
        </HeaderContainer>
    );
}
