import { Header } from '@components/header';
import { ContainerLayout } from './styles';

import { Outlet } from 'react-router-dom';

export function DefaultLayout() {
    return (
        <ContainerLayout>
            <Header />
            <Outlet />
        </ContainerLayout>
    );
}
