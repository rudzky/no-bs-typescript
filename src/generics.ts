function useState<T>(initial: T): [() => T, (v: T) => void] {
  let val: T = initial;
  return [
    () => val,
    (v: T) => {
      val = v;
    },
  ];
}

const [state, setState] = useState(10);
console.log(state());
setState(29);
console.log(state());

const [state2, setState2] = useState<string | null>(null);
console.log(state2());
setState2("str");
console.log(state2());

interface Rank<RankItem> {
  item: RankItem;
  rank: number;
}

function ranker<RankItem>(
  items: RankItem[],
  rank: (v: RankItem) => number
): RankItem[] {
  const ranks: Rank<RankItem>[] = items.map((item) => ({
    item,
    rank: rank(item),
  }));

  ranks.sort((a, b) => a.rank - b.rank);

  return ranks.map((rank) => rank.item);
}

interface Pokemon {
  name: string;
  hp: number;
}

const pokemon: Pokemon[] = [
  {
    name: "Bulbasour",
    hp: 20,
  },
  {
    name: "Pikachu",
    hp: 30,
  },
];

const ranks = ranker(pokemon, ({ hp }) => hp);
console.log(ranks);
