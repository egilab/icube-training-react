const DummyProducts = [
  {
    id: 1,
    name: 'Product 1',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 120.000',
    img: require('../assets/p1.jpg'),
  },
  {
    id: 2,
    name: 'Product 2',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 220.000',
    img: require('../assets/p2.jpg'),
  },
  {
    id: 3,
    name: 'Product 3',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 320.000',
    img: require('../assets/p3.jpg'),
  },
  {
    id: 4,
    name: 'Product 4',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 420.000',
    img: require('../assets/p4.jpg'),
  },
  {
    id: 5,
    name: 'Product 5',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 520.000',
    img: require('../assets/p5.jpg'),
  },
  {
    id: 6,
    name: 'Product 6',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 620.000',
    img: require('../assets/p6.jpg'),
  },
  {
    id: 7,
    name: 'Product 7',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 420.000',
    img: require('../assets/p7.jpg'),
  },
  {
    id: 8,
    name: 'Product 8',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 520.000',
    img: require('../assets/p8.jpg'),
  },
  {
    id: 9,
    name: 'Product 9',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 620.000',
    img: require('../assets/p9.jpg'),
  },
  {
    id: 10,
    name: 'Product 10',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 120.000',
    img: require('../assets/p1.jpg'),
  },
  {
    id: 11,
    name: 'Product 11',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 220.000',
    img: require('../assets/p2.jpg'),
  },
  {
    id: 12,
    name: 'Product 12',
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
    price: 'Rp. 320.000',
    img: require('../assets/p3.jpg'),
  },
];

const DummyCategory = [
  {
    id: 1,
    name: 'Top',
    child: [
      {
        id: 99,
        name: 'Item A',
      },
      {
        id: 98,
        name: 'Item B',
      },
      {
        id: 97,
        name: 'Item C',
      },
    ],
  },
  {
    id: 2,
    name: 'Bottom',
    child: [],
  },
  {
    id: 3,
    name: 'Shoes',
    child: [
      {
        id: 96,
        name: 'Item D',
      },
      {
        id: 95,
        name: 'Item E',
      },
      {
        id: 94,
        name: 'Item F',
      },
    ],
  },
  {
    id: 4,
    name: 'Jacket',
    child: [],
  },
  {
    id: 5,
    name: 'Tshirt',
    child: [],
  },
];

export {DummyProducts, DummyCategory};
