import { ShoppingCart } from '@phosphor-icons/react';
import { CartButton } from './styled';

export function Cart() {
    return (
        <CartButton $numItens={50}>
            <ShoppingCart weight="fill" />
        </CartButton>
    );
}
