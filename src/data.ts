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
    price: '9,99',
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
    name: '',
    description: '',
    imgName: '-img',
    price: '',
    tags: [''],
  },
  {
    id: 0,
    name: '',
    description: '',
    imgName: '-img',
    price: '',
    tags: [''],
  },
  {
    id: 0,
    name: '',
    description: '',
    imgName: '-img',
    price: '',
    tags: [''],
  },
];
