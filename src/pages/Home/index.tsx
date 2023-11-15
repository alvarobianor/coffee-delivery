import { CoffeeCard } from '@components/CoffeCard';
import { Infos } from '@components/Infos';

export function Home() {
  return (
    <>
      <Infos />
      {/* Immplements the grid of CardCoffees */}
      <CoffeeCard />
    </>
  );
}
