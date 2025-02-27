import { MapPinLine } from '@phosphor-icons/react';
import {
  ContainerHeader,
  ContainerContent,
  ContainerTitle,
  Icon,
} from '@styles/GlobalStyles';
import { useFormContext } from 'react-hook-form';
import styled, { css } from 'styled-components';

export function FinishOrder() {
  const { register } = useFormContext();
  return (
    <ContainerContent>
      <ContainerHeader>
        <Icon $color="brand-yellow-dark">
          <MapPinLine size={22} />
        </Icon>
        <ContainerTitle>
          <h3>Endereço de Entrega</h3>
          <p>Informe o endereço onde deseja receber seu pedido</p>
        </ContainerTitle>
      </ContainerHeader>
      <Form>
        <Input
          type="text"
          placeholder="CEP"
          required
          {...register('code', { required: true })}
        />
        <Input
          type="text"
          placeholder="Rua"
          required
          {...register('street', { required: true })}
        />
        <Row>
          <Input
            type="text"
            placeholder="Número"
            required
            {...register('number', { required: true })}
          />
          <InputWrapper>
            <StyledInput
              $flexGrow={2}
              type="text"
              placeholder="Complemento"
              {...register('complement', { required: true })}
            />
          </InputWrapper>
        </Row>
        <Row>
          <Input
            type="text"
            placeholder="Bairro"
            required
            {...register('neighborhood', { required: true })}
          />
          <Input
            $flexGrow={2}
            type="text"
            placeholder="Cidade"
            required
            {...register('city', { required: true })}
          />
          <Input
            $widthRem={5}
            type="text"
            placeholder="UF"
            required
            {...register('state', { required: true })}
          />
        </Row>
      </Form>
    </ContainerContent>
  );
}

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

interface InputProps {
  $flexGrow?: number;
  $widthRem?: number;
  $hasError?: boolean;
}

const Input = styled.input<InputProps>`
  ${({ $widthRem }) => $widthRem && `width: ${$widthRem}rem;`}
  flex-grow: ${({ $flexGrow = 0 }) => $flexGrow};
  padding: 0.75rem;
  color: ${({ theme }) => theme.colors['base-label']};
  background-color: ${({ theme }) => theme.colors['base-input']};
  border: 1px solid transparent;
  border-radius: 6px;
  ${({ $hasError }) =>
    $hasError &&
    css`
      border-color: ${({ theme }) => theme.colors['base-error']};
    `}
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
