import Logo from '@assets/Logo.svg';
import { HeaderContainer, InfosContainer } from './styled';
import { Location } from '@components/location';
import { MapPinLine } from '@phosphor-icons/react';
import { Cart } from '@components/cart';

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} />
            <InfosContainer>
                <Location
                    location="Choro, CE"
                    icon={<MapPinLine weight="fill" />}
                    $background="brand-purple-light"
                    $color="brand-purple-dark"
                />
                <Cart />
            </InfosContainer>
        </HeaderContainer>
    );
}
