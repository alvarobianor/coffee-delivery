import Logo from '@assets/Logo.svg';
import styled from 'styled-components';

import { CartButton } from './CartButton';
import { Location } from './Location';

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} />
      <InfosContainer>
        <Location text="Choro, CE" />
        <CartButton />
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
`;

const InfosContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;

  max-height: 2.5rem;
`;
