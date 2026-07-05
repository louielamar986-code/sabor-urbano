import { MenuItem, GalleryItem, Testimonial } from './types';

// Import images from assets directory to allow Vite to bundle and resolve them properly
import starterImg from './assets/images/sabor_urbano_starter_1783275015633.jpg';
import heroImg from './assets/images/sabor_urbano_hero_1783274987620.jpg';
import dessertImg from './assets/images/sabor_urbano_dessert_1783275028825.jpg';
import interiorImg from './assets/images/sabor_urbano_interior_1783275002905.jpg';

export const MENU_ITEMS: MenuItem[] = [
  // ENTRADAS (Starters)
  {
    id: 'ent-1',
    name: 'Tártaro de Atum do Índico com Abacate',
    description: 'Atum fresco marinado em citrinos, abacate cremoso, gengibre, soja artesanal e óleo de sésamo tostado.',
    price: 650,
    category: 'entradas',
    imageUrl: starterImg
  },
  {
    id: 'ent-2',
    name: 'Croquetes de Pato com Geleia de Piri-Piri',
    description: 'Pato confitado desfiado com especiarias locais, envolvido em crosta estaladiça, acompanhado de geleia picante de piri-piri.',
    price: 520,
    category: 'entradas',
    imageUrl: 'https://images.unsplash.com/photo-1541532713592-79a0317b6b77?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'ent-3',
    name: 'Vieiras Grelhadas com Puré de Couve-Flor',
    description: 'Vieiras seladas na perfeição, creme aveludado de couve-flor trufado e crocante de presunto moçambicano.',
    price: 780,
    category: 'entradas',
    imageUrl: 'https://images.unsplash.com/photo-1532550907401-a500c9a57435?q=80&w=600&auto=format&fit=crop'
  },

  // PRINCIPAIS (Mains)
  {
    id: 'pr-1',
    name: 'Lombo de Borrego em Crosta de Ervas',
    description: 'Lombo macio grelhado com crosta perfumada de ervas finas, puré de batata-doce roxa e molho encorpado de vinho do Porto.',
    price: 1450,
    category: 'principais',
    imageUrl: heroImg
  },
  {
    id: 'pr-2',
    name: 'Pargo Grelhado com Arroz de Coco e Manga',
    description: 'Filete de pargo fresco grelhado na brasa, servido com arroz aromático de coco e salsa cítrica de manga maputense.',
    price: 1250,
    category: 'principais',
    imageUrl: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'pr-3',
    name: 'Ravioli de Abóbora com Manteiga de Sálvia',
    description: 'Massa fresca artesanal recheada com abóbora assada e queijo de cabra local, emulsão de manteiga noisette de sálvia e pinhões tostados.',
    price: 980,
    category: 'principais',
    imageUrl: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=600&auto=format&fit=crop'
  },

  // SOBREMESAS (Desserts)
  {
    id: 'sob-1',
    name: 'Texturas de Chocolate e Flor de Sal',
    description: 'Mousse de chocolate negro 70%, ganache de chocolate branco com cardamomo, crocante de cacau e um toque de flor de sal.',
    price: 480,
    category: 'sobremesas',
    imageUrl: dessertImg
  },
  {
    id: 'sob-2',
    name: 'Semifredo de Maracujá e Gengibre',
    description: 'Sobremesa gelada e aveludada de maracujá fresco com notas sutis de gengibre de Moçambique e calda de hortelã.',
    price: 420,
    category: 'sobremesas',
    imageUrl: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'sob-3',
    name: 'Mil-Folhas de Manga e Baunilha',
    description: 'Folhado estaladiço intercalado com creme diplomata de baunilha de Madagáscar e compota fresca de manga de Maputo.',
    price: 450,
    category: 'sobremesas',
    imageUrl: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=600&auto=format&fit=crop'
  },

  // BEBIDAS (Drinks)
  {
    id: 'beb-1',
    name: 'Infusão Fria de Capim-Limão e Gengibre',
    description: 'Chá frio refrescante feito na hora com capim-limão biológico, sumo de limão fresco e toque de gengibre silvestre.',
    price: 180,
    category: 'bebidas',
    imageUrl: 'https://images.unsplash.com/photo-1531248373027-189b70d75900?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'beb-2',
    name: 'Cocktail Fusão Sabor Urbano',
    description: 'Gin artesanal infundido com especiarias locais, maracujá fresco, xarope caseiro de alecrim e água tónica premium.',
    price: 450,
    category: 'bebidas',
    imageUrl: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=600&auto=format&fit=crop'
  },
  {
    id: 'beb-3',
    name: 'Vinho Tinto Seleção do Sommelier',
    description: 'Vinho tinto encorpado de produtores parceiros com notas profundas de frutos vermelhos, ideal para carnes vermelhas e queijos.',
    price: 420,
    category: 'bebidas',
    imageUrl: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600&auto=format&fit=crop'
  }
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'O Nosso Salão Principal',
    category: 'Ambiente',
    imageUrl: interiorImg
  },
  {
    id: 'gal-2',
    title: 'Texturas de Chocolate',
    category: 'Sobremesa',
    imageUrl: dessertImg
  },
  {
    id: 'gal-3',
    title: 'Tártaro de Atum Gourmet',
    category: 'Entrada',
    imageUrl: starterImg
  },
  {
    id: 'gal-4',
    title: 'Cozinha Criativa',
    category: 'Fusão',
    imageUrl: heroImg
  },
  {
    id: 'gal-5',
    title: 'A Arte de Emplatar',
    category: 'Gastronomia',
    imageUrl: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 'gal-6',
    title: 'Mesa Preparada para Si',
    category: 'Ambiente',
    imageUrl: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?q=80&w=800&auto=format&fit=crop'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    author: 'Ana Sofia Matos',
    role: 'Cliente Frequente',
    text: 'Uma experiência gastronómica inesquecível em Maputo! A fusão de ingredientes locais com técnicas contemporâneas é brilhante. O ambiente intimista e o atendimento personalizado fazem-nos sentir especiais.',
    rating: 5
  },
  {
    id: 'test-2',
    author: 'Rui Fonseca',
    role: 'Crítico de Gastronomia',
    text: 'O tártaro de atum e o lombo de borrego estavam simplesmente perfeitos. O Sabor Urbano conseguiu elevar a gastronomia moçambicana a um patamar internacional fascinante. Recomendo vivamente!',
    rating: 5
  },
  {
    id: 'test-3',
    author: 'Carla Tembe',
    role: 'Amante da Culinária',
    text: 'O meu restaurante favorito de sempre. Cada prato é uma verdadeira obra de arte, tanto visual como no paladar. O serviço é impecável e a decoração em tons grafite e dourado é lindíssima.',
    rating: 5
  }
];
