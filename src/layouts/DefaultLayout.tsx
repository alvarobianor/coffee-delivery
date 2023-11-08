import { Header } from '@components/Header';
import styled from 'styled-components';

import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
    return (
        <ContainerLayout>
            <Header />
            <Outlet />
        </ContainerLayout>
    );
}

const ContainerLayout = styled.div`
    display: flex;
    flex-direction: column;

    padding: 0rem 10rem;

    min-width: 50rem;
    min-height: 31.25rem;
`;
