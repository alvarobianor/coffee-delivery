import Logo from '@assets/Logo.svg';
import { HeaderContainer } from './styled';
import { Location } from '@components/location';
import { MapPinLine } from '@phosphor-icons/react';

export function Header() {
    return (
        <HeaderContainer>
            <img src={Logo} />
            <Location
                location="Choro, CE"
                icon={<MapPinLine weight="fill" />}
                $background="brand-purple-light"
                $color="brand-purple"
            />
        </HeaderContainer>
    );
}
