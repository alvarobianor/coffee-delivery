import { Container } from './styles';

import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
    return (
        <Container>
            <h1>Musga</h1>
            <Outlet />
        </Container>
    );
}
