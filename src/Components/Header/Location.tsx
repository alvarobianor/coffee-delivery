import { MapPinLine, Icon } from '@phosphor-icons/react';
import styled from 'styled-components';

type Props = {
  text: string;
  Icon?: Icon;
};

export function Location({ text, Icon = MapPinLine }: Props) {
  return (
    <ContainerLocation>
      <Icon size={22} />
      {text}
    </ContainerLocation>
  );
}

const ContainerLocation = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  padding: 0.5rem;

  background-color: ${({ theme }) => theme.colors['brand-purple-light']};
  color: ${({ theme }) => theme.colors['brand-purple-dark']};

  font-size: ${({ theme }) => theme.textSizes['text-regular-s']};
  font-weight: 500;

  border: 0px;
  border-radius: 6px;
`;
