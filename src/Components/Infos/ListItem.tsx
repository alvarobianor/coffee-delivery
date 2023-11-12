import { Icon } from '@phosphor-icons/react';
import { defaultTheme } from '@styles/themes/default';
import styled from 'styled-components';
type ColorKeyofs = keyof typeof defaultTheme.colors;

type Color = Extract<
  ColorKeyofs,
  | 'brand-purple-light'
  | 'brand-yellow-dark'
  | 'brand-yellow'
  | 'brand-yellow-light'
  | 'brand-purple-dark'
  | 'brand-purple'
>;
export type Props = {
  text: string;
  icon: {
    Icon: Icon;
    color: Color;
  };
};

export function ListItem({ text, icon: { Icon, color } }: Props) {
  return (
    <Container>
      <BackgroundIcon color={color}>
        <Icon size={16} color="white" />
      </BackgroundIcon>
      {text}
    </Container>
  );
}

const Container = styled.li`
  display: flex;
  gap: 1rem;
  flex-direction: row;
  align-items: center;

  width: auto;
  height: 2rem;
`;

const BackgroundIcon = styled.div<{ color: Color }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 2rem;
  width: 2rem;
  border-radius: 50%;

  background-color: ${({ theme, color }) => theme.colors[color]};
`;
