import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { v4 as uuid } from 'uuid';

import { Brand } from '../../models/Brands';

const SeedData = [
  {
    id: uuid(),
    name: 'WS Naturais',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Wickbold',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Vittay',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Vitale Integral',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'VidaVeg',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Vegabom',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Vale Brilhante',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Up2You Cosméticos',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Tropisuco',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Tô Fit',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Tnuva Chocolates',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Tiê',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Tia Sônia',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'The Body Shop',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Terraria Alimentos',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Tero',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Tabajara',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Sorvetes Rochinha',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Soja Mania',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Só Snacks',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Sétima Geração',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Sequóia',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Seeds',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Santulana',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Samurai Food',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Reserva Brasil',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Renata Macena',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Reilly Tattoo',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Pronto Pizza',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Predilecta',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Positiva',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Pizza 047',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Petit Sablé',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Petit Koan',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Pão de Tapioca',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Palmito da Fazenda',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Nutrivita',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Nutripleno',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Nugali',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Nossa Goma',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'NG de France',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Naturelle',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Natural e Ponto',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Natucoa',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Mr. Veggy',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Moringa Mais Vida',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Moringa da Paz',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'ML Salvio',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Miss Croc',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Minnas',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Minha Comida Especial',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Mantiqueira',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Maiori',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Magnum',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Magic Massas',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'LOWKO',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Los Mexicanos',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Lojas Americanas',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'LEVEN',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Labot',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'INSPIRE',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Hypera',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Hellmann´s',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Hart´s Natural',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Hamburgo Hummel',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Guarani Açai',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Grano Square',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Grani Amici',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'GOÛT RAFFINÉ',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Gerônimo',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Gauer do Brasil',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Galpão da Pizza',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Fugini',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Frisabor',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Frescoco',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Flow',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Flormel',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Flora',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Flor de Sal',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'FHOM',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Família de Minas',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Ethic',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Espirito Cacau',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Emi Corado',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Ecocaps',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Duduxo',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'DuBalaco',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Dr. Oetker',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Dom Spinosa Vinagres',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Distr. Mundo Verde',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Diletto',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Delicias do Forno',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'DEJC',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Dani Fernandes',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Da Ilha',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Coopalm',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Comidas do Bem',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Chocolife',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Chocolates Bahia Superior',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Chefel',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Cervejaria Dádiva',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Cerveja Praya',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Cassava',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Caseiros da Roça',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Casa Valduga',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'CarobHouse',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Carne de Jaca & Cia',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Caio Prado Alimentos',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Café Rancheiro',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Borriello',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Bonduelle',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'BlocksBarra',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'BIOZ',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Biowash',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Bioalimentos',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Bergamia',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Benni',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Bellaziata',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Bananinha Paraibuna',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Banana Brasil',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Bambina',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Ayurveda Yoga Club',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'As Resinas',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Arezzo',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'ApisNutri',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Amma',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Aminogel',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'AmazonBai',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Amana Brasil',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Alimentos Convitta',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Alho Oishii',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Álcool Ferreira',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'Açaí Imperador',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
  {
    id: uuid(),
    name: 'A Tal da Castanha',
    description: 'Marca adicionada pelo selo Vegano',
    createdAt: `${new Date()}`,
    updatedAt: `${new Date()}`,
  },
];
export default class BrandSeedData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Brand)
      .values(SeedData)
      .execute();
  }
}
