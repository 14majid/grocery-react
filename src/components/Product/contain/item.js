import {fromage, bridel, oeuf, poudre, fondu, yaourt, paquetVit, Fromagepresi, dolima} from "./image/ProduitLait/ImageLait.js";
import {riz, petitPois, tomate, haricot, huile,  piment, cube, sel, farine} from "./image/epice-sale/epice.js";
import {chocolat, sucre, biscuit, cafe, thé, confiture, beurre} from "./image/epice-sucre/sucre.js";
import {boissonVimto, troisX, king, coca, fanta, sprite, siropMenthe, siropVimto, orangina, pressea} from "./image/boisson/boisson.js";

const itemsLait = [
    {
        id: 1,
        image: fromage,
        name: "Fromage La Vache qui rit",
        price: "1,000F",
    },
    {
        id: 2,
        image: bridel,
        name: "Bouteille de Lait Bridel",
        price: "350F",
    },
    {
        id: 3,
        image: oeuf,
        name: "Paquet d'Oeuf",
        price: "3,000f",
    },
    {
        id: 4,
        image: poudre,
        name: "Lait en Poudre Vitalait",
        price: "1,500F",
    },
    {
        id: 5,
        image: fondu,
        name: "Fromage Fondu",
        price: "500F",
    },
    {
        id: 6,
        image: yaourt,
        name: "Yaourt Danone",
        price: "400F",
    },
    {
        id: 7,
        image: paquetVit,
        name: "Paquet Vitalait",
        price: "10,000F",
    },
    {
        id: 8,
        image: Fromagepresi,
        name: "Fromage President",
        price: "1,000F",
    },
    {
        id: 9,
        image: dolima,
        name: "Sachet Dolima",
        price: "450F",
    },
]

const itemsEpiceSalé = [
    {
        id: 1,
        image: riz,
        name: "Sac de Riz",
        price: "50,000F",
    },
    {
        id: 2,
        image: petitPois,
        name: "Pot de Petit Pois",
        price: "5,000F",
    },
    {
        id: 3,
        image: tomate,
        name: "Pot de Tomate",
        price: "1,000F",
    },
    {
        id: 4,
        image: haricot,
        name: "Pot de Haricot",
        price: "1,500F",
    },
    {
        id: 5,
        image: huile,
        name: "Bouteille d'Huile",
        price: "6,800F",
    },
    {
        id: 6,
        image: piment,
        name: "Pot de Piment",
        price: "500F",
    },
    {
        id: 7,
        image: cube,
        name: "boite de Cube",
        price: "1,000F",
    },
    {
        id: 8,
        image: sel,
        name: "Sel",
        price: "500F",
    },
    {
        id: 9,
        image: farine,
        name: "Sac de Farine",
        price: "19,000F",
    },
]


const itemsEpiceSucre = [
    {
        id: 1,
        image: chocolat,
        name: "Pot de Chocolat",
        price: "3,500F",
    },
    {
        id: 2,
        image: confiture,
        name: "Pot de Confiture",
        price: "5,000F",
    },
    {
        id: 3,
        image: beurre,
        name: "Pot de Beurre",
        price: "1,000F",
    },
    {
        id: 4,
        image: sucre,
        name: "Pot de Beurre",
        price: "700F",
    },
    {
        id: 5,
        image: cafe,
        name: "Pot de Beurre",
        price: "800F",
    },
    {
        id: 6,
        image: thé,
        name: "Lipton ice tea",
        price: "1,300F",
    },
    {
        id: 7,
        image: biscuit,
        name: "Biscuit Biscot",
        price: "50F",
    },
]

const itemsboisson = [
    {
        id: 1,
        image: boissonVimto,
        name: "Boisson Vimto",
        price: "700F",
    },
    {
        id: 2,
        image: troisX,
        name: "Boisson 3X",
        price: "500F",
    },
    {
        id: 3,
        image: king,
        name: "Boisson King",
        price: "600F",
    },
    {
        id: 4,
        image: coca,
        name: "Boisson Coca",
        price: "250F",
    },
    {
        id: 5,
        image: fanta,
        name: "Boisson Fanta",
        price: "300F",
    },
    {
        id: 6,
        image: sprite,
        name: "Boisson Sprite",
        price: "500F",
    },
    {
        id: 7,
        image: siropMenthe,
        name: "Sirop Menthe",
        price: "2,000F",
    },
    {
        id: 8,
        image: siropVimto,
        name: "Sirop Vimto",
        price: "2,700F",
    },
    {
        id: 9,
        image: orangina,
        name: "Boisson Orangina",
        price: "500F",
    },
    {
        id: 10,
        image: pressea,
        name: "Pressea",
        price: "500F",
    },
]

export {itemsLait, itemsEpiceSalé, itemsEpiceSucre, itemsboisson};