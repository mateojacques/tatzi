// USER INFO
export const USER_LOCATION = 'Alejandro Korn, Buenos Aires';

export const TATTOO_STYLES = [
  {id: 1, name: 'Realismo', slug: 'realism'},
  {id: 2, name: 'Blackwork', slug: 'blackwork'},
  {id: 3, name: 'Tradicional', slug: 'traditional'},
];

export const TATTOO_ARTISTS = [
  {
    id: 1001,
    name: 'Lukas Tattoo',
    username: 'lukastattoo',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2003, name: 'Tradicional'},
    ],
    location: {
      city: 'Burzaco',
    },
    calification: {
      average: 4.5,
      reviewsQuantity: 10,
    },
    profileImage: 'https://i.imgur.com/VfgpIyq.png',
    works: [
      {
        id: 3001,
        image: 'https://i.imgur.com/pGMSCDU.png',
      },
      {
        id: 3002,
        image: 'https://i.imgur.com/WjLH9z3.png',
      },
      {
        id: 3003,
        image: 'https://i.imgur.com/zQWKblf.png',
      },
    ],
  },
  {
    id: 1002,
    name: 'Hell Studio',
    username: 'hellstudio',
    tattooStyles: [
      {id: 2002, name: 'Realismo'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Adrogué',
    },
    calification: {
      average: 5,
      reviewsQuantity: 25,
    },
    profileImage: 'https://i.imgur.com/lVMexex.png',
    works: [
      {
        id: 3011,
        image: 'https://i.imgur.com/ggbzwji.png',
      },
      {
        id: 3012,
        image: 'https://i.imgur.com/pq0MvY0.png',
      },
      {
        id: 3013,
        image: 'https://i.imgur.com/FjGe23H.png',
      },
    ],
  },
  {
    id: 1003,
    name: 'Ink Master',
    username: 'inkmaster',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2002, name: 'Realismo'},
    ],
    location: {
      city: 'Buenos Aires',
    },
    calification: {
      average: 4.8,
      reviewsQuantity: 15,
    },
    profileImage: 'https://i.imgur.com/8gP6QYc.png',
    works: [
      {
        id: 3021,
        image: 'https://i.imgur.com/N3HvhWU.png',
      },
      {
        id: 3022,
        image: 'https://i.imgur.com/VrS1r6l.png',
      },
      {
        id: 3023,
        image: 'https://i.imgur.com/djKcoRj.png',
      },
    ],
  },
  {
    id: 1004,
    name: 'Ink Dreams',
    username: 'inkdreams',
    tattooStyles: [
      {id: 2003, name: 'Tradicional'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Quilmes',
    },
    calification: {
      average: 4.7,
      reviewsQuantity: 20,
    },
    profileImage: 'https://i.imgur.com/1O3JHHL.png',
    works: [
      {
        id: 3031,
        image: 'https://i.imgur.com/rOMu1vk.png',
      },
      {
        id: 3032,
        image: 'https://i.imgur.com/C1XZanY.png',
      },
      {
        id: 3033,
        image: 'https://i.imgur.com/3TzPzV5.png',
      },
    ],
  },
  {
    id: 1005,
    name: 'Color Fusion',
    username: 'colorfusion',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Avellaneda',
    },
    calification: {
      average: 4.6,
      reviewsQuantity: 18,
    },
    profileImage: 'https://i.imgur.com/2bSAXS6.png',
    works: [
      {
        id: 3041,
        image: 'https://i.imgur.com/x9L7JiB.png',
      },
      {
        id: 3042,
        image: 'https://i.imgur.com/Tt3ZD7v.png',
      },
      {
        id: 3043,
        image: 'https://i.imgur.com/Dpmk98z.png',
      },
    ],
  },
  {
    id: 1006,
    name: 'Dark Ink',
    username: 'darkink',
    tattooStyles: [
      {id: 2002, name: 'Realismo'},
      {id: 2003, name: 'Tradicional'},
    ],
    location: {
      city: 'Lomas de Zamora',
    },
    calification: {
      average: 4.9,
      reviewsQuantity: 22,
    },
    profileImage: 'https://i.imgur.com/Jpyp6Mx.png',
    works: [
      {
        id: 3051,
        image: 'https://i.imgur.com/4vBMD6W.png',
      },
      {
        id: 3052,
        image: 'https://i.imgur.com/CtjQJTo.png',
      },
      {
        id: 3053,
        image: 'https://i.imgur.com/j1bYUeA.png',
      },
    ],
  },
  {
    id: 1007,
    name: 'Artistic Skin',
    username: 'artisticskin',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Banfield',
    },
    calification: {
      average: 4.7,
      reviewsQuantity: 19,
    },
    profileImage: 'https://i.imgur.com/INMInyS.png',
    works: [
      {
        id: 3061,
        image: 'https://i.imgur.com/rrrTSEi.png',
      },
      {
        id: 3062,
        image: 'https://i.imgur.com/1pgQ29T.png',
      },
      {
        id: 3063,
        image: 'https://i.imgur.com/J3Z7lx2.png',
      },
    ],
  },
  {
    id: 1008,
    name: 'Soul Art',
    username: 'soulart',
    tattooStyles: [
      {id: 2002, name: 'Realismo'},
      {id: 2003, name: 'Tradicional'},
    ],
    location: {
      city: 'Florencio Varela',
    },
    calification: {
      average: 4.6,
      reviewsQuantity: 16,
    },
    profileImage: 'https://i.imgur.com/nrI0wje.png',
    works: [
      {
        id: 3071,
        image: 'https://i.imgur.com/owrUobG.png',
      },
      {
        id: 3072,
        image: 'https://i.imgur.com/G2uJnXe.png',
      },
      {
        id: 3073,
        image: 'https://i.imgur.com/rLYrZaI.png',
      },
    ],
  },
  {
    id: 1009,
    name: 'Eternal Ink',
    username: 'eternalink',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Monte Grande',
    },
    calification: {
      average: 4.8,
      reviewsQuantity: 17,
    },
    profileImage: 'https://i.imgur.com/V6js86P.png',
    works: [
      {
        id: 3081,
        image: 'https://i.imgur.com/L4UDFqG.png',
      },
      {
        id: 3082,
        image: 'https://i.imgur.com/0vXuQUe.png',
      },
      {
        id: 3083,
        image: 'https://i.imgur.com/wP54QrK.png',
      },
    ],
  },
  {
    id: 1010,
    name: 'Bright Art',
    username: 'brightart',
    tattooStyles: [
      {id: 2002, name: 'Realismo'},
      {id: 2003, name: 'Tradicional'},
    ],
    location: {
      city: 'Temperley',
    },
    calification: {
      average: 4.9,
      reviewsQuantity: 23,
    },
    profileImage: 'https://i.imgur.com/JesSldH.png',
    works: [
      {
        id: 3091,
        image: 'https://i.imgur.com/mgAQlhw.png',
      },
      {
        id: 3092,
        image: 'https://i.imgur.com/zUolDpv.png',
      },
      {
        id: 3093,
        image: 'https://i.imgur.com/XH8Q7tn.png',
      },
    ],
  },
  {
    id: 1011,
    name: 'Inked Up',
    username: 'inkedup',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Ezeiza',
    },
    calification: {
      average: 4.7,
      reviewsQuantity: 21,
    },
    profileImage: 'https://i.imgur.com/Gm3pM17.png',
    works: [
      {
        id: 3101,
        image: 'https://i.imgur.com/TK6EiXV.png',
      },
      {
        id: 3102,
        image: 'https://i.imgur.com/L1yKUPs.png',
      },
      {
        id: 3103,
        image: 'https://i.imgur.com/7DhCzjp.png',
      },
    ],
  },
  {
    id: 1012,
    name: 'Artistic Touch',
    username: 'artistictouch',
    tattooStyles: [
      {id: 2002, name: 'Realismo'},
      {id: 2003, name: 'Tradicional'},
    ],
    location: {
      city: 'Rafael Calzada',
    },
    calification: {
      average: 4.8,
      reviewsQuantity: 24,
    },
    profileImage: 'https://i.imgur.com/2Jpmm5E.png',
    works: [
      {
        id: 3111,
        image: 'https://i.imgur.com/39MX9Jo.png',
      },
      {
        id: 3112,
        image: 'https://i.imgur.com/3NhEWsS.png',
      },
      {
        id: 3113,
        image: 'https://i.imgur.com/VK2ld7K.png',
      },
    ],
  },
  {
    id: 1013,
    name: 'Ink Wave',
    username: 'inkwave',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'San Justo',
    },
    calification: {
      average: 4.7,
      reviewsQuantity: 18,
    },
    profileImage: 'https://i.imgur.com/Zl8RT5l.png',
    works: [
      {
        id: 3121,
        image: 'https://i.imgur.com/ra5vsOr.png',
      },
      {
        id: 3122,
        image: 'https://i.imgur.com/jCXTzYt.png',
      },
      {
        id: 3123,
        image: 'https://i.imgur.com/eqTZrKz.png',
      },
    ],
  },
  {
    id: 1014,
    name: 'Color Blaze',
    username: 'colorblaze',
    tattooStyles: [
      {id: 2002, name: 'Realismo'},
      {id: 2003, name: 'Tradicional'},
    ],
    location: {
      city: 'Berazategui',
    },
    calification: {
      average: 4.9,
      reviewsQuantity: 20,
    },
    profileImage: 'https://i.imgur.com/rlHn0MT.png',
    works: [
      {
        id: 3131,
        image: 'https://i.imgur.com/zueGZ5S.png',
      },
      {
        id: 3132,
        image: 'https://i.imgur.com/ox7eQmb.png',
      },
      {
        id: 3133,
        image: 'https://i.imgur.com/m76WErM.png',
      },
    ],
  },
  {
    id: 1015,
    name: 'Eternal Art',
    username: 'eternalart',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Longchamps',
    },
    calification: {
      average: 4.8,
      reviewsQuantity: 22,
    },
    profileImage: 'https://i.imgur.com/TJrz5iN.png',
    works: [
      {
        id: 3141,
        image: 'https://i.imgur.com/MXhq98N.png',
      },
      {
        id: 3142,
        image: 'https://i.imgur.com/zThvavN.png',
      },
      {
        id: 3143,
        image: 'https://i.imgur.com/AQWleUj.png',
      },
    ],
  },
  {
    id: 1016,
    name: 'Color Splash',
    username: 'colorsplash',
    tattooStyles: [
      {id: 2002, name: 'Realismo'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Wilde',
    },
    calification: {
      average: 4.7,
      reviewsQuantity: 19,
    },
    profileImage: 'https://i.imgur.com/OpFQbH4.png',
    works: [
      {
        id: 3151,
        image: 'https://i.imgur.com/N09fPY9.png',
      },
      {
        id: 3152,
        image: 'https://i.imgur.com/GMOR0JQ.png',
      },
      {
        id: 3153,
        image: 'https://i.imgur.com/yHx5X4i.png',
      },
    ],
  },
  {
    id: 1017,
    name: 'Dark Artistry',
    username: 'darkartistry',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2003, name: 'Tradicional'},
    ],
    location: {
      city: 'Don Bosco',
    },
    calification: {
      average: 4.8,
      reviewsQuantity: 23,
    },
    profileImage: 'https://i.imgur.com/tTnWRGT.png',
    works: [
      {
        id: 3161,
        image: 'https://i.imgur.com/qSKGrYs.png',
      },
      {
        id: 3162,
        image: 'https://i.imgur.com/WOqPwso.png',
      },
      {
        id: 3163,
        image: 'https://i.imgur.com/22BQby3.png',
      },
    ],
  },
  {
    id: 1018,
    name: 'Tattoo Fusion',
    username: 'tattoofusion',
    tattooStyles: [
      {id: 2002, name: 'Realismo'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Lanús',
    },
    calification: {
      average: 4.9,
      reviewsQuantity: 24,
    },
    profileImage: 'https://i.imgur.com/zDQgtpS.png',
    works: [
      {
        id: 3171,
        image: 'https://i.imgur.com/kztfVfr.png',
      },
      {
        id: 3172,
        image: 'https://i.imgur.com/Zs5Qg5A.png',
      },
      {
        id: 3173,
        image: 'https://i.imgur.com/fLJugjW.png',
      },
    ],
  },
  {
    id: 1019,
    name: 'Artistic Dreams',
    username: 'artisticdreams',
    tattooStyles: [
      {id: 2001, name: 'Blackwork'},
      {id: 2003, name: 'Tradicional'},
    ],
    location: {
      city: 'Quilmes Oeste',
    },
    calification: {
      average: 4.7,
      reviewsQuantity: 20,
    },
    profileImage: 'https://i.imgur.com/A0p7kLW.png',
    works: [
      {
        id: 3181,
        image: 'https://i.imgur.com/SpM9k9v.png',
      },
      {
        id: 3182,
        image: 'https://i.imgur.com/tdYyijV.png',
      },
      {
        id: 3183,
        image: 'https://i.imgur.com/AMM25Lr.png',
      },
    ],
  },
  {
    id: 1020,
    name: 'Ink Fusion',
    username: 'inkfusion',
    tattooStyles: [
      {id: 2002, name: 'Realismo'},
      {id: 2004, name: 'Microrrealismo'},
    ],
    location: {
      city: 'Gerli',
    },
    calification: {
      average: 4.8,
      reviewsQuantity: 22,
    },
    profileImage: 'https://i.imgur.com/B5Z96Tu.png',
    works: [
      {
        id: 3191,
        image: 'https://i.imgur.com/D1JhKrs.png',
      },
      {
        id: 3192,
        image: 'https://i.imgur.com/p7g4pWR.png',
      },
      {
        id: 3193,
        image: 'https://i.imgur.com/r0jV52J.png',
      },
    ],
  },
];
