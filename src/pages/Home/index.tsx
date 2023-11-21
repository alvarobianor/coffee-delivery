import { CatalogOfCoffees } from '@components/CatalogOfCoffees';
import { Infos } from '@components/Infos';

export function Home() {
  return (
    <>
      <Infos />
      {/* TODO Immplements the grid of CardCoffees */}
      <CatalogOfCoffees />
    </>
  );
}
