import styled from 'styled-components';
import { Shapes as ShapesBackground } from '@components/Infos/ShapesBackground';
import { ListItem, Props as ListItemProps } from '@components/Infos/ListItem';
import { ShoppingCart } from '@phosphor-icons/react';

export function Infos() {
  const itens = [
    {
      text: 'Compra simples e segura',
      icon: { color: 'brand-yellow-dark', Icon: ShoppingCart },
    },
    {
      text: 'Embalagem mantém o café intacto',
      icon: { color: 'brand-purple-dark', Icon: ShoppingCart },
    },
    {
      text: 'Entrega rápida e rastreada',
      icon: { color: 'brand-yellow', Icon: ShoppingCart },
    },
    {
      text: 'O café chega fresquinho até você',
      icon: { color: 'brand-purple', Icon: ShoppingCart },
    },
  ] as ListItemProps[];

  return (
    <Container>
      <ShapesBackground />
      <ContainerInformations>
        <Content>
          <TitleInfo>
            Encontre o café perfeito para qualquer hora do dia
          </TitleInfo>
          <DescriptionInfo>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </DescriptionInfo>
          <ListInfo>
            {itens.map((item) => (
              <ListItem icon={item.icon} text={item.text} key={item.text} />
            ))}
          </ListInfo>
        </Content>

        <ImageContainer>
          <img src="coffee-info.png" alt="coffee" width={'80%'} />
        </ImageContainer>
      </ContainerInformations>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 5.87rem 0;
  position: relative;
`;

const ContainerInformations = styled.div`
  width: 100%;
  height: auto;
  max-height: 35.5rem;

  display: flex;
`;

const ImageContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: right;
`;

const Content = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const TitleInfo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: ${({ theme }) => theme.textSizes['title-title-xl']};
  line-height: 100%;
  margin-bottom: 1.5rem;
`;
const DescriptionInfo = styled.p`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${({ theme }) => theme.textSizes['text-regular-l']};
  font-style: normal;
  font-weight: 400;
`;
const ListInfo = styled.ul`
  margin-top: auto;
  margin-bottom: 1rem;

  list-style-type: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  li:nth-child(n + 3) {
    margin-top: 1rem;
  }

  li {
    width: 50%;
  }
`;
