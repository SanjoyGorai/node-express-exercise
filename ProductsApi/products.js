import React from 'react'
import path from 'path'
// import Iphone from './mobiles/Iphone.webp'
// import OnePlus from './mobiles/OnePlus Nord CE 3 Lite 5G.webp'

const mobiles = [
  {
    brandName: 'Apple iPhone 14 ((PRODUCT)RED, 128 GB)',
    image: 'null',
    price: '54,999',
    color: 'Purple',
  },
  {
    brandName: 'Motorola Edge 40 (Viva Magenta, 256 GB)  (8 GB RAM)#JustHere',
    image: 'null',
    price: '54,999',
    color: 'Purple',
  },
  {
    brandName: '  REDMI Note 12 Pro 5G (Glacier Blue, 128 GB)  (6 GB RAM)',
    image: 'null',
    price: '54,999',
    color: 'Purple',
  },
  {
    brandName: 'Apple iPhone 14',
    image: 'null',
    price: '54,999',
    color: 'Purple',
  },
  {
    brandName: 'OnePlus Nord CE 3 Lite 5G',
    image: 'null',
    price: '74,999',
    color: 'Red',
  },
  {
    brandName: 'REDMI Note 13 Pro 5G',
    image: 'null',
    price: '24,999',
    color: 'Blue',
  },
  {
    brandName: 'Vivo',
    image: 'null',
    price: '15,999',
    color: 'Black, Red, Green',
  },
  {
    brandName: 'OnePlus Nord CE',
    image: "OnePlus",
    price: '45,999',
    color: 'Black',
  },
  {
    brandName: 'OnePlus Nord CE',
    image: "OnePlus",
    price: '45,999',
    color: 'Black',
  },
  {
    brandName: 'OnePlus Nord CE',
    image: "OnePlus",
    price: '45,999',
    color: 'Black',
  },
  {
    "title": "Samsung Galaxy S21 FE 5G with Snapdragon 888 (Lavender, 256 GB)  (8 GB RAM)",
    "image": null,
    "price": "₹33,999",
    "color": ["White", "Graphite", "Lavender", "Navy", "Olive", "White"],
    "RAM": ["4GB", "8GB"],
    "battery": {
      "Battery Capacity": "4500 mAh",
      "Dual Battery": "No"
    },
    "processor": "Snapdragon 888 Processor",
    "SIM Type": "Dual Sim ",
    "Display Size": "16.26 cm (6.4 inch)",
    "GPU": "Adreno 660",
    "Display Type": "Dynamic AMOLED 2X",
    "Operating System": "Android 13",
    "Internal Storage": "256 GB",
    "Network Type": [
      "5G",
      "4G",
      "3G",
      "2G"
    ],
    "Bluetooth Version": "v5.0",
    "Wi-Fi Version": "802.11 a/b/g/n/ac/ax (2.4 GHz | 5 GHz)",
    "Dimensions": {
      "Width": "74.5 mm",
      "Height": "155.7 mm",
      "Depth": "7.9 mm",
      "Weight": "177 g"
    }
  }
]

export const products = [
  {
    category: {
      createdAt: '2024-04-28T04:41:51.000Z',
      id: 1,
      image: 'https://i.imgur.com/QkIs5tT.jpeg',
      name: 'Clothes',
      updatedAt: '2024-04-28T...'
    },
    createdAt: '2024-04-28T...000Z',
    description: 'Step out in style with this sleek navy blue base ball cap',
    id: 9,
    images: [
      { 0: 'https://i.imgur.com/R3iobJA.jpeg' },
      { 1: 'https://i.imgur.com/Wv2ksf.jpeg' },
      { 2: 'https://i.imgur.com/76HAXcA.jpeg' },
    ],
    price: 61,
    title: "Classic Nayv Blue Baseball Cap",
    updatedAt: '2024-04-28T04:41:51.000Z'
  },
  {
    category: {
      createdAt: '2024-04-28T04:41:51.000Z',
      id: 1,
      image: 'https://i.imgur.com/QkIs5tT.jpeg',
      name: 'Clothes',
      updatedAt: '2024-04-28T...'
    },
    createdAt: '2024-04-28T...000Z',
    description: 'Step out in style with this sleek navy blue base ball cap',
    id: 9,
    images: [
      { 0: 'https://i.imgur.com/R3iobJA.jpeg' },
      { 1: 'https://i.imgur.com/Wv2ksf.jpeg' },
      { 2: 'https://i.imgur.com/76HAXcA.jpeg' },
    ],
    price: 61,
    title: "Classic Nayv Blue Baseball Cap",
    updatedAt: '2024-04-28T04:41:51.000Z'
  },
  {
    category: {
      createdAt: '2024-04-28T04:41:51.000Z',
      id: 1,
      image: 'https://i.imgur.com/QkIs5tT.jpeg',
      name: 'Clothes',
      updatedAt: '2024-04-28T...'
    },
    createdAt: '2024-04-28T...000Z',
    description: 'Step out in style with this sleek navy blue base ball cap',
    id: 9,
    images: [
      { 0: 'https://i.imgur.com/R3iobJA.jpeg' },
      { 1: 'https://i.imgur.com/Wv2ksf.jpeg' },
      { 2: 'https://i.imgur.com/76HAXcA.jpeg' },
    ],
    price: 61,
    title: "Classic Nayv Blue Baseball Cap",
    updatedAt: '2024-04-28T04:41:51.000Z'
  },
  {
    category: {
      createdAt: '2024-04-28T04:41:51.000Z',
      id: 1,
      image: 'https://i.imgur.com/QkIs5tT.jpeg',
      name: 'Clothes',
      updatedAt: '2024-04-28T...'
    },
    createdAt: '2024-04-28T...000Z',
    description: 'Step out in style with this sleek navy blue base ball cap',
    id: 9,
    images: [
      { 0: 'https://i.imgur.com/R3iobJA.jpeg' },
      { 1: 'https://i.imgur.com/Wv2ksf.jpeg' },
      { 2: 'https://i.imgur.com/76HAXcA.jpeg' },
    ],
    price: 61,
    title: "Classic Nayv Blue Baseball Cap",
    updatedAt: '2024-04-28T04:41:51.000Z'
  },
  {
    category: {
      createdAt: '2024-04-28T04:41:51.000Z',
      id: 1,
      image: 'https://i.imgur.com/QkIs5tT.jpeg',
      name: 'Clothes',
      updatedAt: '2024-04-28T...'
    },
    createdAt: '2024-04-28T...000Z',
    description: 'Step out in style with this sleek navy blue base ball cap',
    id: 9,
    images: [
      { 0: 'https://i.imgur.com/R3iobJA.jpeg' },
      { 1: 'https://i.imgur.com/Wv2ksf.jpeg' },
      { 2: 'https://i.imgur.com/76HAXcA.jpeg' },
    ],
    price: 61,
    title: "Classic Nayv Blue Baseball Cap",
    updatedAt: '2024-04-28T04:41:51.000Z'
  }
];

export default mobiles