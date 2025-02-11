import { styled } from 'styled-components';

export function Divider() {
  return <Line />;
}

const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors['base-button']};
`;
