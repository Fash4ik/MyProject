const dishes = [

  {
    id: 1,
    name: 'Огурцы Суномоно',
    image: '/images/dish1.png',
    calories: 20,
    protein: 0.5,
    fat: 1,
    carbs: 2
  },

  {
    id: 2,
    name: 'Капуста Кимчи',
    image: '/images/dish2.png',
    calories: 70,
    protein: 5,
    fat: 2.5,
    carbs: 6.5
  },

  {
    id: 3,
    name: 'Ростки сои цукемоно',
    image: '/images/dish3.png',
    calories: 150,
    protein: 12,
    fat: 6.5,
    carbs: 10
  },

  {
    id: 4,
    name: 'Открытый ролл лосось',
    image: '/images/dish4.png',
    calories: 150,
    protein: 8,
    fat: 2.5,
    carbs: 23
  },

  {
    id: 5,
    name: 'Открытый ролл тунец',
    image: '/images/dish5.png',
    calories: 180,
    protein: 10,
    fat: 6.5,
    carbs: 20
  },

  {
    id: 6,
    name: 'Креветки Карааге',
    image: '/images/dish6.png',
    calories: 660,
    protein: 25,
    fat: 37,
    carbs: 56
  },

  {
    id: 7,
    name: 'Копченый тофу',
    image: '/images/dish7.png',
    calories: 85,
    protein: 7.5,
    fat: 4,
    carbs: 4.75
  },

  {
    id: 8,
    name: 'Негимаки',
    image: '/images/dish8.png',
    calories: 240,
    protein: 16,
    fat: 15,
    carbs: 10
  },

  {
    id: 9,
    name: 'Курица карааге',
    image: '/images/dish9.png',
    calories: 520,
    protein: 30,
    fat: 35,
    carbs: 15
  },

  {
    id: 10,
    name: 'Батат фри',
    image: '/images/dish10.png',
    calories: 220,
    protein: 2,
    fat: 8,
    carbs: 35
  },

  {
    id: 11,
    name: 'Эдамаме',
    image: '/images/dish11.png',
    calories: 190,
    protein: 18,
    fat: 8,
    carbs: 14
  },

  {
    id: 12,
    name: 'Баклажан фри',
    image: '/images/dish12.png',
    calories: 170,
    protein: 3,
    fat: 9,
    carbs: 18
  },

  {
    id: 13,
    name: 'Такояки с креветкой | с гребешком',
    image: '/images/dish13.png',
    calories: 260,
    protein: 12,
    fat: 15,
    carbs: 18
  },

  {
    id: 14,
    name: 'Тайяки',
    image: '/images/dish14.png',
    calories: 300,
    protein: 6,
    fat: 8,
    carbs: 50
  },

  {
    id: 15,
    name: 'Онигири',
    image: '/images/dish15.png',
    calories: 180,
    protein: 5,
    fat: 2,
    carbs: 35
  },

  {
    id: 16,
    name: 'Салат из овощей',
    image: '/images/dish16.png',
    calories: 120,
    protein: 3,
    fat: 6,
    carbs: 12
  },

  {
    id: 17,
    name: 'Гёдза - курица | креветки | свинина | говядина',
    image: '/images/dish17.png',
    calories: 250,
    protein: 12,
    fat: 10,
    carbs: 22
  },

  {
    id: 18,
    name: 'Сашими лосось',
    image: '/images/dish18.png',
    calories: 190,
    protein: 22,
    fat: 12,
    carbs: 0
  },

  {
    id: 19,
    name: 'Сашими тунец',
    image: '/images/dish19.png',
    calories: 130,
    protein: 26,
    fat: 2,
    carbs: 0
  },

  {
    id: 20,
    name: 'Сашими гребешок',
    image: '/images/dish20.png',
    calories: 150,
    protein: 30,
    fat: 1,
    carbs: 0
  },

  {
    id: 21,
    name: 'Тунец стратачелла',
    image: '/images/dish21.png',
    calories: 300,
    protein: 28,
    fat: 20,
    carbs: 8
  },

  {
    id: 22,
    name: 'Сет сашими',
    image: '/images/dish22.png',
    calories: 400,
    protein: 50,
    fat: 15,
    carbs: 5
  },

  {
    id: 23,
    name: 'Мисо с тофу',
    image: '/images/dish23.png',
    calories: 90,
    protein: 7,
    fat: 4,
    carbs: 8
  },

  {
    id: 24,
    name: 'Мисо с креветками',
    image: '/images/dish24.png',
    calories: 130,
    protein: 12,
    fat: 5,
    carbs: 10
  },

  {
    id: 25,
    name: 'Суп с говядиной кимчи',
    image: '/images/dish25.png',
    calories: 280,
    protein: 30,
    fat: 10,
    carbs: 12
  },

  {
    id: 26,
    name: 'Кушияки утка',
    image: '/images/dish26.png',
    calories: 340,
    protein: 26,
    fat: 24,
    carbs: 4
  },

  {
    id: 27,
    name: 'Кушияки курица',
    image: '/images/dish27.png',
    calories: 290,
    protein: 28,
    fat: 15,
    carbs: 5
  },

  {
    id: 28,
    name: 'Кушияки говядина',
    image: '/images/dish28.png',
    calories: 360,
    protein: 35,
    fat: 20,
    carbs: 3
  },

  {
    id: 29,
    name: 'Кушияки креветка',
    image: '/images/dish29.png',
    calories: 260,
    protein: 22,
    fat: 14,
    carbs: 6
  },

  {
    id: 30,
    name: 'Цукуне утка | курица',
    image: '/images/dish30.png',
    calories: 320,
    protein: 30,
    fat: 20,
    carbs: 8
  },

  {
    id: 31,
    name: 'JPAN Lager',
    image: '/images/dish31.png',
    calories: 150,
    protein: 1.5,
    fat: 0,
    carbs: 12
  },

  {
    id: 32,
    name: 'JPAN Weiss',
    image: '/images/dish32.png',
    calories: 180,
    protein: 2,
    fat: 0,
    carbs: 15
  },

  {
    id: 34,
    name: 'Рамен с курицей',
    image: '/images/dish34.png',
    calories: 490,
    protein: 35,
    fat: 15,
    carbs: 50
  },

  {
    id: 35,
    name: 'Рамен с морепродуктами',
    image: '/images/dish35.png',
    calories: 450,
    protein: 40,
    fat: 10,
    carbs: 48
  },

  {
    id: 36,
    name: 'Мисо рамен',
    image: '/images/dish36.png',
    calories: 420,
    protein: 30,
    fat: 12,
    carbs: 48
  },

  {
    id: 37,
    name: 'Сырный рамен',
    image: '/images/dish37.png',
    calories: 530,
    protein: 35,
    fat: 25,
    carbs: 45
  },

  {
    id: 38,
    name: 'Рамен с уткой',
    image: '/images/dish38.png',
    calories: 550,
    protein: 40,
    fat: 35,
    carbs: 20
  },

  {
    id: 39,
    name: 'Нику рамен',
    image: '/images/dish39.png',
    calories: 480,
    protein: 28,
    fat: 12,
    carbs: 58
  },

  {
    id: 40,
    name: 'Чикен-кацу',
    image: '/images/dish40.png',
    calories: 460,
    protein: 32,
    fat: 10,
    carbs: 50
  },

  {
    id: 41,
    name: 'Чикен-кацу карри',
    image: '/images/dish41.png',
    calories: 470,
    protein: 30,
    fat: 12,
    carbs: 52
  },

  {
    id: 42,
    name: 'Карри с говядиной | морепродуктами',
    image: '/images/dish42.png',
    calories: 430,
    protein: 12,
    fat: 10,
    carbs: 60
  },

  {
    id: 43,
    name: 'Удон с креветками',
    image: '/images/dish43.png',
    calories: 460,
    protein: 35,
    fat: 15,
    carbs: 48
  },

  {
    id: 44,
    name: 'Удон с курицей',
    image: '/images/dish44.png',
    calories: 490,
    protein: 40,
    fat: 22,
    carbs: 45
  },

  {
    id: 45,
    name: 'Яки удон с овощами',
    image: '/images/dish45.png',
    calories: 480,
    protein: 38,
    fat: 18,
    carbs: 50
  },

  {
    id: 46,
    name: 'Удон сукияки',
    image: '/images/dish46.png',
    calories: 250,
    protein: 8,
    fat: 6,
    carbs: 20
  },

  {
    id: 47,
    name: 'Мезмен соборо',
    image: '/images/dish47.png',
    calories: 300,
    protein: 12,
    fat: 6,
    carbs: 45
  },

  {
    id: 48,
    name: 'Яки соба с морепродуктами',
    image: '/images/dish48.png',
    calories: 280,
    protein: 11,
    fat: 5,
    carbs: 44
  },

  {
    id: 49,
    name: 'Соба гюнику',
    image: '/images/dish49.png',
    calories: 320,
    protein: 14,
    fat: 15,
    carbs: 38
  },

  {
    id: 50,
    name: 'Гюдон',
    image: '/images/dish50.png',
    calories: 340,
    protein: 15,
    fat: 12,
    carbs: 40
  },

  {
    id: 51,
    name: 'Караагедон',
    image: '/images/dish51.png',
    calories: 180,
    protein: 14,
    fat: 3,
    carbs: 28
  },

  {
    id: 52,
    name: 'Фудзидон',
    image: '/images/dish52.png',
    calories: 220,
    protein: 18,
    fat: 6,
    carbs: 24
  },

  {
    id: 53,
    name: 'Унадон',
    image: '/images/dish53.png',
    calories: 210,
    protein: 17,
    fat: 7,
    carbs: 23
  },

  {
    id: 54,
    name: 'Кайсендон',
    image: '/images/dish54.png',
    calories: 190,
    protein: 15,
    fat: 4,
    carbs: 22
  },

  {
    id: 55,
    name: 'Покедон',
    image: '/images/dish55.png',
    calories: 200,
    protein: 16,
    fat: 5,
    carbs: 22
  },

  {
    id: 56,
    name: 'Momo',
    image: '/images/dish56.png',
    calories: 210,
    protein: 18,
    fat: 6,
    carbs: 20
  },

  {
    id: 57,
    name: 'Aki',
    image: '/images/dish57.png',
    calories: 220,
    protein: 17,
    fat: 8,
    carbs: 22
  },


 {
    id: 58,
    name: 'Atsupuru',
    image: '/images/dish58.png',
    calories: 150,
    protein: 5,
    fat: 7,
    carbs: 18
  },
  {
    id: 59,
    name: 'Japanese Spritz',
    image: '/images/dish59.png',
    calories: 120,
    protein: 0,
    fat: 0,
    carbs: 15
  },
  {
    id: 60,
    name: 'Груша',
    image: '/images/dish60.png',
    calories: 57,
    protein: 0.4,
    fat: 0.1,
    carbs: 15
  },
  {
    id: 61,
    name: 'Ривень',
    image: '/images/dish61.png',
    calories: 35,
    protein: 1,
    fat: 0.2,
    carbs: 7
  },
  {
    id: 62,
    name: 'Латте Ramune',
    image: '/images/dish62.png',
    calories: 140,
    protein: 6,
    fat: 4,
    carbs: 18
  },
  {
    id: 63,
    name: 'Дрип-кофе specialty',
    image: '/images/dish63.png',
    calories: 5,
    protein: 0.3,
    fat: 0,
    carbs: 1
  },
  {
    id: 64,
    name: 'Фильтр тоник',
    image: '/images/dish64.png',
    calories: 10,
    protein: 0,
    fat: 0,
    carbs: 3
  },
  {
    id: 65,
    name: 'Манго',
    image: '/images/dish65.png',
    calories: 60,
    protein: 0.8,
    fat: 0.4,
    carbs: 15
  },
  {
    id: 66,
    name: 'Таро',
    image: '/images/dish66.png',
    calories: 70,
    protein: 1.5,
    fat: 0.1,
    carbs: 17
  },
  {
    id: 67,
    name: 'Карамель ',
    image: '/images/dish67.png',
    calories: 250,
    protein: 1,
    fat: 10,
    carbs: 38
  },
  {
    id: 68,
    name: 'Ягоды',
    image: '/images/dish68.png',
    calories: 45,
    protein: 1,
    fat: 0.3,
    carbs: 12
  },
  {
    id: 69,
    name: 'Матча Латте',
    image: '/images/dish69.png',
    calories: 160,
    protein: 5,
    fat: 6,
    carbs: 20
  },
  {
    id: 70,
    name: 'De leche',
    image: '/images/dish70.png',
    calories: 230,
    protein: 4,
    fat: 12,
    carbs: 25
  },
  {
    id: 71,
    name: 'Тоник грейпфрут',
    image: '/images/dish71.png',
    calories: 50,
    protein: 0,
    fat: 0,
    carbs: 13
  },
  {
    id: 72,
    name: 'Мусс таро',
    image: '/images/dish72.png',
    calories: 180,
    protein: 3,
    fat: 8,
    carbs: 24
  },
  {
    id: 73,
    name: 'Кофейная фисташка',
    image: '/images/dish73.png',
    calories: 200,
    protein: 5,
    fat: 15,
    carbs: 10
  },
  {
    id: 74,
    name: 'Манго-вишня',
    image: '/images/dish74.png',
    calories: 140,
    protein: 1,
    fat: 0.3,
    carbs: 35
  },
  {
    id: 75,
    name: 'Матча бабл гам',
    image: '/images/dish75.png',
    calories: 190,
    protein: 2,
    fat: 6,
    carbs: 30
  },
  {
    id: 76,
    name: 'Ходзича соленая карамель ',
    image: '/images/dish76.png',
    calories: 220,
    protein: 4,
    fat: 12,
    carbs: 20
  },
  {
    id: 78,
    name: 'Воздух',
    image: '/images/dish78.png',
    calories: 10,
    protein: 0,
    fat: 0,
    carbs: 2
  },
  {
    id: 79,
    name: 'Вода',
    image: '/images/dish79.png',
    calories: 0,
    protein: 0,
    fat: 0,
    carbs: 0
  },
  {
    id: 80,
    name: 'Дендро',
    image: '/images/dish80.png',
    calories: 45,
    protein: 0.5,
    fat: 0.2,
    carbs: 11
  },
  {
    id: 81,
    name: 'Земля',
    image: '/images/dish81.png',
    calories: 30,
    protein: 1,
    fat: 0,
    carbs: 6
  },
  {
    id: 82,
    name: 'Грушевый пирог ',
    image: '/images/dish82.png',
    calories: 270,
    protein: 3,
    fat: 15,
    carbs: 30
  },
  {
    id: 83,
    name: 'Японский грог',
    image: '/images/dish83.png',
    calories: 180,
    protein: 2,
    fat: 8,
    carbs: 20
  },
  {
    id: 84,
    name: 'Кедровый гранат',
    image: '/images/dish84.png',
    calories: 140,
    protein: 3,
    fat: 5,
    carbs: 20
  },
  {
    id: 85,
    name: 'Asahi',
    image: '/images/dish85.png',
    calories: 150,
    protein: 1.6,
    fat: 0,
    carbs: 13
  },
  {
    id: 86,
    name: 'Dream team bear',
    image: '/images/dish86.png',
    calories: 170,
    protein: 4,
    fat: 7,
    carbs: 18
  },
  {
    id: 87,
    name: 'Jeju',
    image: '/images/dish87.png',
    calories: 130,
    protein: 1,
    fat: 0,
    carbs: 12
  },
  {
    id: 88,
    name: 'Hitachino Espresso Stout',
    image: '/images/dish88.png',
    calories: 210,
    protein: 2,
    fat: 0,
    carbs: 18
  },
  {
    id: 89,
    name: 'Hitachino DaiDai',
    image: '/images/dish89.png',
    calories: 150,
    protein: 0,
    fat: 0,
    carbs: 14
  },
  {
    id: 90,
    name: 'Hitachino Ginger Ale',
    image: '/images/dish90.png',
    calories: 130,
    protein: 0,
    fat: 0,
    carbs: 33
  },
  {
    id: 91,
    name: 'Hitachino Nipponia',
    image: '/images/dish91.png',
    calories: 170,
    protein: 1,
    fat: 0,
    carbs: 15
  },
  {
    id: 92,
    name: 'Hitachino Yuzu Ginger',
    image: '/images/dish92.png',
    calories: 120,
    protein: 2,
    fat: 3,
    carbs: 18
  },
  {
    id: 93,
    name: 'Японский сникерс',
    image: '/images/dish93.png',
    calories: 270,
    protein: 4,
    fat: 15,
    carbs: 30
  },
  {
    id: 94,
    name: 'Мусс кокос-папайя',
    image: '/images/dish94.png',
    calories: 220,
    protein: 3,
    fat: 12,
    carbs: 22
  },
  {
    id: 95,
    name: 'Мисо-кунжут',
    image: '/images/dish95.png',
    calories: 130,
    protein: 6,
    fat: 7,
    carbs: 10
  },
  {
    id: 96,
    name: 'Тоторо',
    image: '/images/dish96.png',
    calories: 160,
    protein: 2,
    fat: 6,
    carbs: 20
  },
  {
    id: 97,
    name: 'кальцифер',
    image: '/images/dish97.png',
    calories: 250,
    protein: 3,
    fat: 18,
    carbs: 20
  },
  {
    id: 98,
    name: 'Гриб',
    image: '/images/dish98.png',
    calories: 40,
    protein: 3,
    fat: 0.5,
    carbs: 7
  },
  {
    id: 99,
    name: 'Моти',
    image: '/images/dish99.png',
    calories: 180,
    protein: 2,
    fat: 1,
    carbs: 40
  },
  {
    id: 100,
    name: 'Сиба-ину',
    image: '/images/dish100.png',
    calories: 210,
    protein: 4,
    fat: 9,
    carbs: 20
  }
];

export default dishes;