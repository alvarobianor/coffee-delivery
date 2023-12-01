export type Coffe = {
  id: number;
  name: string;
  description: string;
  imgName: string;
  price: string | number;
  tags: string[];
};

export const infos: Coffe[] = [
  {
    id: 1,
    name: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    imgName: 'mocaccino-img.png',
    price: '11,99',
    tags: ['Tradicional', 'Com leite'],
  },
  {
    id: 2,
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    imgName: 'expresso-tradicional-img',
    price: '6,99',
    tags: ['tradicional'],
  },
  {
    id: 3,
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    imgName: 'expresso-americano-img',
    price: '5,99',
    tags: ['tradicional'],
  },
  {
    id: 4,
    name: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    imgName: 'expresso-cremoso-img',
    price: '8,99',
    tags: ['tradicional'],
  },
  {
    id: 5,
    name: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    imgName: 'cafe-com-leite-img',
    price: '8,99',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 6,
    name: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    imgName: 'latte-img',
    price: '8,99',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 7,
    name: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    imgName: 'capuccino-img',
    price: '10,99',
    tags: ['tradiocinal', 'com leite'],
  },
  {
    id: 8,
    name: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    imgName: 'macchiato-img',
    price: '9,99',
    tags: ['tradicional', 'com leite'],
  },
  {
    id: 9,
    name: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    imgName: 'chocolate-quente-img',
    price: '14,99',
    tags: ['especial', 'com leite'],
  },
  {
    id: 10,
    name: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    imgName: 'cubano-img',
    price: '15,99',
    tags: ['especial', 'alcoólico', 'gelado'],
  },
  {
    id: 11,
    name: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    imgName: 'havaiano-img',
    price: '15,99',
    tags: ['especial'],
  },
  {
    id: 12,
    name: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    imgName: 'arabe-img',
    price: 'especial',
    tags: ['15,99'],
  },
  {
    id: 13,
    name: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    imgName: 'irlandes-img',
    price: '19,99',
    tags: ['especial', 'alcoólico'],
  },
];
