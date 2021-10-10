import simpleBurger from './../assets/images/hamburguesa-simple.png'
import doubleBurger from './../assets/images/hamburguesa-doble.png'
import frenchFries from './../assets/images/papas-fritas.png'
import onionRings from './../assets/images/aros-de-cebolla.png'
import water from './../assets/images/agua-500.png'
import soda from './../assets/images/bebida.png'
const menuLunch = [
    {
        id: 1,
        name: 'Hamburguesa simple',
        price: 1000,
        image: simpleBurger,
    },
    {
        id: 2,
        name: 'Hamburguesa doble',
        price: 1500,
        image: doubleBurger,
    },
    {
        id: 3,
        name: 'Papas fritas',
        price: 500,
        image: frenchFries,
    },
    {
        id: 4,
        name: 'Aros de cebolla',
        price: 500,
        image: onionRings,
    },
    {
        id: 5,
        name: 'Agua',
        price: 500,
        image: water,
    },
    {
        id: 6,
        name: 'Bebida/Gaseosa',
        price: 700,
        image: soda,
    },
];

export default menuLunch;