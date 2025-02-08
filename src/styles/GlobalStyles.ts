import styled, { createGlobalStyle, DefaultTheme } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
/* TODO use media queries or similar */
  *{
    margin: 0 ;
    padding: 0;
    box-sizing: border-box;
    outline:  none;
  }

  body {
    background: ${({ theme }) => theme.colors['base-background']};
    color:  ${({ theme }) => theme.colors['base-text']};
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: ${({ theme }) => theme.fonts.regular};
    font-weight: 400;
    font-size: ${({ theme }) => theme.textSizes['text-regular-m']};
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

`;
export const ContainerMain = styled.main`
  display: flex;
  gap: 2rem;
  width: 100%;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px;
`;

export const ContainerHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 0.5rem;
`;

interface IconProps {
  $color: keyof DefaultTheme['colors'];
}

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ theme, $color }) => theme.colors[$color]};
`;

export const ContainerTitle = styled.div`
  display: flex;
  flex-direction: column;
`;
