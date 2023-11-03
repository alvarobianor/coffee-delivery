import { Header } from '@components/header';
import { Container } from './styles';

import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
    return (
        <Container>
            <Header />
            <Outlet />
        </Container>
    );
}
