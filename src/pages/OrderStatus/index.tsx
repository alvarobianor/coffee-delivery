import { Coins, HourglassHigh, MapPin } from '@phosphor-icons/react';
import { defaultTheme } from '@styles/themes/default';
import { styled } from 'styled-components';
import Img from 'public/men-motocycle.svg';

export function OrderStatus() {
  return (
    <Container>
      <Header>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </Header>
      <section>
        <Card>
          <Row>
            <Icon $color="brand-purple">
              <MapPin
                size={22}
                weight="fill"
                color={defaultTheme.colors['base-white']}
              />
            </Icon>
            <p>
              Entrega em{' '}
              <b>
                Rua João Daniel Martinelli, 102 <b />
              </b>
              <br />
              Farrapos - Porto Alegre, RS
            </p>
          </Row>

          <Row>
            <Icon $color="brand-yellow">
              <HourglassHigh
                size={22}
                weight="fill"
                color={defaultTheme.colors['base-white']}
              />
            </Icon>

            <p>
              Previsão de entrega
              <br />
              <b>20 min - 30 min </b>
            </p>
          </Row>

          <Row>
            <Icon $color="base-error">
              <Coins
                size={22}
                weight="fill"
                color={defaultTheme.colors['base-white']}
              />
            </Icon>
            <p>
              Pagamento na entrega <br />
              <b>Cartão de Crédito</b>
            </p>
          </Row>
        </Card>
      </section>
      <section>
        <Logo src={Img} alt="Logo do Café" />
      </section>
    </Container>
  );
}

const Container = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  width: 100%;
  flex-direction: row;
  margin-bottom: 5rem;

  grid-template-areas:
    'header header'
    'main sidebar';

  & > :first-child {
    grid-area: header;
  }

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      'header'
      'header'
      'header';
  }
`;

const Header = styled.section`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  > h1 {
    width: 100%;
    font-family: ${({ theme }) => theme.fonts.title};
    font-size: ${({ theme }) => theme.textSizes['title-title-l']};
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }

  > p {
    font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: flex-start;
`;
interface IconProps {
  $color: keyof typeof defaultTheme.colors;
}

const Icon = styled.div<IconProps>`
  min-width: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: ${({ theme, $color }) => theme.colors[$color]};
`;

const Card = styled.div`
  display: flex;
  gap: 2rem;
  flex-direction: column;
  padding: 3rem;
  margin-top: 3rem;
  border-radius: 6px 40px 6px 40px;
  position: relative;
  background: ${({ theme }) => theme.colors['base-background']};

  &::before {
    content: '';
    position: absolute;
    top: -1px;
    left: -1px;
    right: -1px;
    bottom: -1px;
    z-index: -1;
    border-radius: inherit;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors['brand-yellow']},
      ${({ theme }) => theme.colors['brand-purple']}
    );
  }
`;

const Logo = styled.img`
  min-width: 70%;
  min-height: 70%;
  margin: auto auto 0 0;

  @media (max-width: 1200px) {
    min-width: 100%;
    min-height: 100%;
  }
`;
