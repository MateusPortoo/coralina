export type Tone = "coral" | "palm" | "gold" | "sand";

export type Product = {
  slug: string;
  name: string;
  category: string;
  price: number;
  tone: Tone;
  description: string;
  images: string[];
  isNew?: boolean;
};

export const products: Product[] = [
  {
    slug: "vestido-maresia",
    name: "Vestido Maresia",
    category: "Vestidos",
    price: 698,
    tone: "coral",
    isNew: true,
    description:
      "Seda fluida com estampa botânica exclusiva. Cai leve, balança com o vento e vai do pé na areia ao jantar à beira-mar.",
    images: ["/products/vestido-maresia.jpg"],
  },
  {
    slug: "maio-coral",
    name: "Maiô Coral",
    category: "Maiôs",
    price: 398,
    tone: "gold",
    description:
      "Maiô estruturado em coral quente, cavado e elegante. Modela o corpo e marca presença na primeira mergulhada.",
    images: ["/products/maio-coral.jpg"],
  },
  {
    slug: "saida-croche-ilhabela",
    name: "Saída Crochê Ilhabela",
    category: "Saídas",
    price: 540,
    tone: "sand",
    isNew: true,
    description:
      "Crochê feito à mão, ponto aberto e respirável. A saída de praia que vira look inteiro.",
    images: ["/products/saida-croche-ilhabela.jpg"],
  },
  {
    slug: "vestido-coqueiro",
    name: "Vestido Coqueiro",
    category: "Vestidos",
    price: 754,
    tone: "palm",
    description:
      "Linho verde-palmeira com bordado de coqueiros. Fresco, natural e atemporal.",
    images: ["/products/vestido-coqueiro.jpg"],
  },
  {
    slug: "kaftan-botanica",
    name: "Kaftan Botânica",
    category: "Saídas",
    price: 480,
    tone: "coral",
    description:
      "Kaftan leve com estampa tropical viva. Solta no corpo, perfeita pra dias de calor sem esforço.",
    images: ["/products/kaftan-botanica.jpg"],
  },
  {
    slug: "maio-duna",
    name: "Maiô Duna",
    category: "Maiôs",
    price: 420,
    tone: "sand",
    description:
      "Maiô canelado em tom areia, decote escultural. Minimalismo que combina com tudo.",
    images: ["/products/maio-duna.jpg"],
  },
  {
    slug: "chapeu-palha-costa",
    name: "Chapéu Palha Costa",
    category: "Acessórios",
    price: 280,
    tone: "gold",
    description:
      "Chapéu de palha natural de aba larga. Sombra com estilo pro sol do meio-dia.",
    images: ["/products/chapeu-palha-costa.jpg"],
  },
  {
    slug: "vestido-solara",
    name: "Vestido Solará",
    category: "Vestidos",
    price: 620,
    tone: "coral",
    isNew: true,
    description:
      "Slip dress acetinado cor de pôr do sol, caimento fluido. Do day off ao jantar sem trocar de roupa.",
    images: ["/products/vestido-solara.jpg"],
  },
  {
    slug: "bolsa-palha-mare",
    name: "Bolsa Palha Maré",
    category: "Acessórios",
    price: 360,
    tone: "palm",
    description:
      "Bolsa de palha trançada espaçosa. Leva tudo pra praia com cara de campanha.",
    images: ["/products/bolsa-palha-mare.jpg"],
  },
];

export const toneStyles: Record<Tone, string> = {
  coral: "linear-gradient(150deg, var(--color-coral) 0%, var(--color-coral-deep) 100%)",
  palm: "linear-gradient(150deg, var(--color-palm) 0%, var(--color-palm-deep) 100%)",
  gold: "linear-gradient(150deg, var(--color-gold) 0%, var(--color-coral) 100%)",
  sand: "linear-gradient(150deg, var(--color-cream) 0%, var(--color-gold) 100%)",
};

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function priceBRL(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
  });
}
