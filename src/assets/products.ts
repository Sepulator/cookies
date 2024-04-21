export interface Product {
  image: string,
  title: string,
  text: string,
  price: number,
  basePrice: number,
  weight: string
}

export const productsData: Product[] = [
  {
    image: 'cookie-01.png',
    title: 'Лучшие друзья',
    text: 'Печенье, с которого все началось! Наше фирменное печенье с шоколадной крошкой и грецкими орехами хрустящее снаружи с достаточно толстой и липкой серединкой.',
    price: 20,
    basePrice: 20,
    weight: '2 шт./ 200 гр.'
  },
  {
    image: 'cookie-02.png',
    title: 'Шоколадный француз',
    text: 'Это печенье, изготовленное из тёмного французского какао и полусладкой шоколадной стружки, наверняка удовлетворит даже самого заядлого любителя шоколада.',
    price: 24,
    basePrice: 24,
    weight: '2 шт./ 200 гр.'
  },
  {
    image: 'cookie-03.png',
    title: 'Овсянка с изюмом, Сэр!',
    text: 'Это сдобное маслянистое печенье весом шесть унций каждое, золотисто-коричневое снаружи, влажное внутри и наполненное пухлым сладким изюмом.',
    price: 18,
    basePrice: 18,
    weight: '2 шт./ 200 гр.'
  },
  {
    image: 'cookie-04.png',
    title: 'Шоколадное наслаждение',
    text: 'Идеально хрустящее снаружи и достаточно густое и липкое в центре, это печенье наполнено полусладкой и тёмной шоколадной стружкой, придающей богатую глубину вкуса.',
    price: 24,
    basePrice: 24,
    weight: '2 шт./ 200 гр.'
  },
  {
    image: 'cookie-05.png',
    title: 'Арахисовый рай',
    text: 'Сладкое, пикантное и идеально сбалансированное печенье удовлетворяет тягу любителей арахисового масла и шоколада.',
    price: 20,
    basePrice: 20,
    weight: '2 шт./ 200 гр.'
  },
  {
    image: 'cookie-06.png',
    title: 'Шоколадный ореховый деликатес',
    text: 'Наша фирменная рецептура печенья с шоколадными крошками и грецкими орехами гарантирует незабываемый вкусовой опыт. Каждое печенье хрустит снаружи, но раскрывает внутри нежную сердцевину.',
    price: 18,
    basePrice: 18,
    weight: '2 шт./ 200 гр.'
  },
  {
    image: 'cookie-07.png',
    title: 'Ассорти фирменного печенья',
    text: 'Зачем выбирать один, когда можно получить их все? Наш классический ассортимент печенья включает в себя по одному из четырёх оригинальных вкусов печенья.',
    price: 36,
    basePrice: 36,
    weight: '4 шт./ 400 гр.'
  },
  {
    image: 'cookie-08.png',
    title: 'Лимонное печенье',
    text: 'Весна уже не за горами, но нам не терпелось подарить вам немного солнечного света: наше первое лимонное печенье. Это лакомство жевательное, лимонное, не слишком сладкое и даже немного… освежающее?',
    price: 33,
    basePrice: 33,
    weight: '4 шт./ 400 гр.'
  },
  {
    image: 'cookie-09.png',
    title: 'Любители шоколада',
    text: 'Вам больше не нужно выбирать фаворитов. Мы сделали этот набор для всех людей, которые действительно любят шоколад…',
    price: 38,
    basePrice: 38,
    weight: '4 шт./ 400 гр.'
  },
  {
    image: 'cookie-10.png',
    title: 'Карамель и кокос',
    text: 'Побалуйте себя кокосовым, маслянистым, карамельным печеньем, которое обладает невиданным ранее вкусом и текстурой. Наслаждение круглый год.',
    price: 33,
    basePrice: 33,
    weight: '4 шт./ 400 гр.'
  },
  {
    image: 'cookie-11.png',
    title: 'Веганское с шоколадной крошкой',
    text: 'Наше веганское безглютеновое печенье содержит кусочки хрустящих грецких орехов и полусладкую веганскую шоколадную стружку.',
    price: 39,
    basePrice: 39,
    weight: '4 шт./ 400 гр.'
  },
  {
    image: 'cookie-12.png',
    title: 'Крем-брюле ореховое печенье',
    text: 'Используя уникальную смесь ингредиентов, мы создали печенье с кусочками крем-брюле и миндальными орехами, которое обещает неповторимые гастрономические ощущения. Каждый кусочек обладает хрустящей корочкой и тает во рту.',
    price: 35,
    basePrice: 35,
    weight: '4 шт./ 400 гр.'
  },
];
