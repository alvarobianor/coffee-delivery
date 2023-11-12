import styled from 'styled-components';

export function Shapes() {
  return <Background />;
}

const Background = styled.div`
  width: 512px;
  height: 512px;
  border-radius: 50%;

  background: rgb(16, 209, 227);
  background: radial-gradient(
    circle,
    rgba(16, 209, 227, 1) 7%,
    rgba(108, 9, 121, 1) 57%,
    rgba(255, 0, 26, 0.49343487394957986) 100%
  );

  opacity: 0.9;

  filter: blur(80px);

  transform: matrix(-1, 0, 0, 1, 0, 0);
`;
