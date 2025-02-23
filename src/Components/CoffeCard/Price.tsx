import styled from 'styled-components';

type Props = {
  $price: number;
  $currency?: 'real' | 'dolar';
};

export function Price({ $price, $currency = 'real' }: Props) {
  const formatedPrice = new Intl.NumberFormat('pt-BR', {}).format($price);
  return (
    <Container>
      <Currency>{$currency == 'dolar' ? '$' : 'R$'}</Currency>
      <Value>{formatedPrice}</Value>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;

  align-items: first baseline;
  gap: 0.15rem;
`;

const Currency = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  text-align: center;
`;

const Value = styled.p`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes['title-title-m']};
  text-align: center;
`;
