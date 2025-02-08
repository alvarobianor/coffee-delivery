import { MapPinLine } from '@phosphor-icons/react';
import { styled } from 'styled-components';

export function FinishOrder() {
  return (
    <Container>
      <ContainerHeader>
        <MapPinLine size={22} />
        <ContainerTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </ContainerTitle>
      </ContainerHeader>
      <Form>
        <Input type="text" placeholder="CEP" />
        <Input type="text" placeholder="Rua" />
        <Row>
          <Input type="text" placeholder="Número" />
          <InputWrapper>
            <StyledInput $flexGrow={2} type="text" placeholder="Complemento" />
          </InputWrapper>
        </Row>
        <Row>
          <Input type="text" placeholder="Bairro" />
          <Input $flexGrow={2} type="text" placeholder="Cidade" />
          <Input $widthRem={5} type="text" placeholder="UF" />
        </Row>
      </Form>
    </Container>
  );
}

const Container = styled.main`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;

  svg {
    color: ${({ theme }) => theme.colors['brand-yellow-dark']};
  }
`;

const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    div,
    input {
      width: 100%;
    }
  }
`;

const Row = styled.div`
  display: flex;
  width: 100%;
  gap: 0.75rem;

  @media (max-width: 768px) {
    flex-direction: column;
    div,
    input {
      width: 100%;
    }
  }
`;

interface InputProps {
  $flexGrow?: number;
  $widthRem?: number;
}

const Input = styled.input<InputProps>`
  ${({ $widthRem }) => $widthRem && `width: ${$widthRem}rem;`}
  flex-grow: ${({ $flexGrow = 0 }) => $flexGrow};
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors['base-label']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 0px;
  border-radius: 6px;
`;

const InputWrapper = styled.div`
  display: flex;
  position: relative;
  width: 100%;

  &::after {
    content: 'Optional';
    position: absolute;
    right: 0.75rem;
    top: 50%;
    transform: translateY(-50%);
    font-size: 0.875rem;
    color: ${({ theme }) => theme.colors['base-label']};
    font-style: italic;

    @media (max-width: 768px) {
      font-size: 0.5rem;
    }
  }
`;

const StyledInput = styled(Input)`
  padding-right: 4rem;
`;
