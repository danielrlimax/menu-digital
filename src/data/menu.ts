// ============================================================
// DADOS DO CARDÁPIO — substitua por leitura de CSV futuramente
// Estrutura compatível com exportação do Google Sheets (CSV)
// Colunas: id, categoria, nome, descricao, preco, imagem, disponivel, destaque, tag
// ============================================================

export interface MenuItem {
  id: string;
  categoria: string;
  nome: string;
  descricao: string;
  preco: number;
  imagem: string;
  disponivel: boolean;
  destaque: boolean;
  tag?: string; // "Novo" | "Popular" | "Vegano" | "Sem Glúten"
}

export interface Categoria {
  id: string;
  nome: string;
  emoji: string;
}

export const RESTAURANTE = {
  nome: "Bistrô do Zé",
  slogan: "Sabor que conecta pessoas",
  telefone: "(11) 99999-9999",
  instagram: "@bistrodoze",
  horario: "Ter–Dom: 11h às 23h",
  cor: "#c0392b", // cor principal do restaurante
};

export const CATEGORIAS: Categoria[] = [
  { id: "todos", nome: "Todos", emoji: "🍽️" },
  { id: "entradas", nome: "Entradas", emoji: "🥗" },
  { id: "burgers", nome: "Burgers", emoji: "🍔" },
  { id: "pizzas", nome: "Pizzas", emoji: "🍕" },
  { id: "massas", nome: "Massas", emoji: "🍝" },
  { id: "sobremesas", nome: "Sobremesas", emoji: "🍮" },
  { id: "bebidas", nome: "Bebidas", emoji: "🥤" },
];

export const MENU: MenuItem[] = [
  // ── ENTRADAS ──────────────────────────────────────────────
  {
    id: "e001",
    categoria: "entradas",
    nome: "Bruschetta Italiana",
    descricao: "Pão italiano grelhado com tomate cereja, manjericão fresco, alho e azeite extra virgem.",
    preco: 28.9,
    imagem: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=600&q=80",
    disponivel: true,
    destaque: false,
    tag: "Popular",
  },
  {
    id: "e002",
    categoria: "entradas",
    nome: "Batata Frita Rústica",
    descricao: "Batatas cortadas com casca, temperadas com alecrim, alho e flor de sal. Acompanha molho especial da casa.",
    preco: 32.0,
    imagem: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600&q=80",
    disponivel: true,
    destaque: false,
  },
  {
    id: "e003",
    categoria: "entradas",
    nome: "Bolinho de Bacalhau",
    descricao: "6 unidades crocantes por fora, cremosos por dentro. Acompanha aioli de ervas.",
    preco: 42.5,
    imagem: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=600&q=80",
    disponivel: true,
    destaque: true,
    tag: "Popular",
  },
  {
    id: "e004",
    categoria: "entradas",
    nome: "Salada Caesar",
    descricao: "Alface romana, croutons artesanais, parmesão em lascas e molho caesar clássico.",
    preco: 36.0,
    imagem: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&q=80",
    disponivel: true,
    destaque: false,
    tag: "Vegano",
  },

  // ── BURGERS ───────────────────────────────────────────────
  {
    id: "b001",
    categoria: "burgers",
    nome: "Smash Clássico",
    descricao: "2x smash 120g, cheddar americano, alface americana, tomate, cebola caramelizada e molho especial. Pão brioche.",
    preco: 45.9,
    imagem: "images/burger.jpg",
    disponivel: true,
    destaque: true,
    tag: "Popular",
  },
  {
    id: "b002",
    categoria: "burgers",
    nome: "Bacon Crush",
    descricao: "Blend 180g, bacon artesanal crocante, queijo gruyère, cebola crispy, maionese defumada. Pão australiano.",
    preco: 52.9,
    imagem: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80",
    disponivel: true,
    destaque: false,
    tag: "Novo",
  },
  {
    id: "b003",
    categoria: "burgers",
    nome: "Frango Crispy",
    descricao: "Filé de frango empanado, pickles, coleslaw, molho honey mustard. Pão brioche tostado.",
    preco: 42.9,
    imagem: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=600&q=80",
    disponivel: true,
    destaque: false,
  },
  {
    id: "b004",
    categoria: "burgers",
    nome: "Veggie Burger",
    descricao: "Blend de grão-de-bico e beterraba, queijo vegano, alface, tomate, cebola roxa e tahine. Pão integral.",
    preco: 44.9,
    imagem: "https://images.unsplash.com/photo-1520072959219-c595dc870360?w=600&q=80",
    disponivel: false,
    destaque: false,
    tag: "Vegano",
  },

  // ── PIZZAS ────────────────────────────────────────────────
  {
    id: "p001",
    categoria: "pizzas",
    nome: "Margherita",
    descricao: "Molho de tomate San Marzano, mozzarella de búfala, manjericão fresco, azeite extra virgem. Massa fina.",
    preco: 58.0,
    imagem: "images/pizza.jpg",
    disponivel: true,
    destaque: true,
    tag: "Popular",
  },
  {
    id: "p002",
    categoria: "pizzas",
    nome: "Pepperoni Suprema",
    descricao: "Molho especial, mozzarella, pepperoni fatiado, orégano fresco e azeite temperado.",
    preco: 68.0,
    imagem: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=600&q=80",
    disponivel: true,
    destaque: false,
  },
  {
    id: "p003",
    categoria: "pizzas",
    nome: "Quatro Queijos",
    descricao: "Mozzarella, gorgonzola, parmesão e catupiry. Finalizada com mel de trufa.",
    preco: 72.0,
    imagem: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&q=80",
    disponivel: true,
    destaque: false,
    tag: "Novo",
  },

  // ── MASSAS ────────────────────────────────────────────────
  {
    id: "m001",
    categoria: "massas",
    nome: "Carbonara Clássica",
    descricao: "Espaguete al dente, guanciale, ovos caipiras, parmesão curado e pimenta-do-reino. Receita romana.",
    preco: 56.0,
    imagem: "https://images.unsplash.com/photo-1612874742237-6526221588e3?w=600&q=80",
    disponivel: true,
    destaque: true,
  },
  {
    id: "m002",
    categoria: "massas",
    nome: "Nhoque ao Sugo",
    descricao: "Nhoque de batata artesanal ao molho de tomate com manjericão e parmesão ralado na hora.",
    preco: 48.0,
    imagem: "https://images.unsplash.com/photo-1551183053-bf91798d792f?w=600&q=80",
    disponivel: true,
    destaque: false,
    tag: "Vegano",
  },
  {
    id: "m003",
    categoria: "massas",
    nome: "Lasanha da Casa",
    descricao: "Camadas de massa fresca, ragù de carne bovina, molho bechamel e mozzarella gratinada.",
    preco: 62.0,
    imagem: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=600&q=80",
    disponivel: true,
    destaque: false,
    tag: "Popular",
  },

  // ── SOBREMESAS ────────────────────────────────────────────
  {
    id: "s001",
    categoria: "sobremesas",
    nome: "Petit Gâteau",
    descricao: "Bolinho de chocolate com centro derretido, acompanha bola de sorvete de baunilha e calda de frutas vermelhas.",
    preco: 34.0,
    imagem: "images/dessert.jpg",
    disponivel: true,
    destaque: true,
    tag: "Popular",
  },
  {
    id: "s002",
    categoria: "sobremesas",
    nome: "Tiramisù",
    descricao: "Receita italiana clássica com mascarpone, café espresso, biscoito champanhe e cacau em pó.",
    preco: 32.0,
    imagem: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&q=80",
    disponivel: true,
    destaque: false,
  },
  {
    id: "s003",
    categoria: "sobremesas",
    nome: "Cheesecake de Frutas",
    descricao: "Base de biscoito amanteigado, creme de cream cheese e calda de frutas vermelhas frescas.",
    preco: 30.0,
    imagem: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?w=600&q=80",
    disponivel: false,
    destaque: false,
    tag: "Sem Glúten",
  },

  // ── BEBIDAS ───────────────────────────────────────────────
  {
    id: "d001",
    categoria: "bebidas",
    nome: "Limonada Suíça",
    descricao: "Limão, leite condensado, creme de leite e gelo. Refrescante e cremosa.",
    preco: 18.0,
    imagem: "https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=600&q=80",
    disponivel: true,
    destaque: false,
    tag: "Popular",
  },
  {
    id: "d002",
    categoria: "bebidas",
    nome: "Suco Natural",
    descricao: "Laranja, abacaxi com hortelã, melancia ou morango. Feito na hora, sem adição de açúcar.",
    preco: 16.0,
    imagem: "https://images.unsplash.com/photo-1534353436294-0dbd4bdac845?w=600&q=80",
    disponivel: true,
    destaque: false,
  },
  {
    id: "d003",
    categoria: "bebidas",
    nome: "Refrigerante",
    descricao: "Coca-Cola, Guaraná Antarctica, Sprite ou Fanta. Lata 350ml gelada.",
    preco: 8.0,
    imagem: "images/drinks.jpg",
    disponivel: true,
    destaque: false,
  },
  {
    id: "d004",
    categoria: "bebidas",
    nome: "Cerveja Artesanal",
    descricao: "IPA, Weiss ou Stout. Produção local. Garrafa 500ml.",
    preco: 28.0,
    imagem: "https://images.unsplash.com/photo-1535958636474-b021ee887b13?w=600&q=80",
    disponivel: true,
    destaque: true,
    tag: "Novo",
  },
  {
    id: "d005",
    categoria: "bebidas",
    nome: "Água Mineral",
    descricao: "Com ou sem gás. 500ml.",
    preco: 6.0,
    imagem: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=600&q=80",
    disponivel: true,
    destaque: false,
  },
];
