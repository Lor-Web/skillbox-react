
const initRandomDiscount = () => Math.round((Math.random() * (1 - 0) + 0) * 100) / 100

export type Card = {
    id: number,
    title: string,
    price: number,
    discount?: () => number,
    image: string
}
export const CARDS_DATA: Card[] = [
    {
        id: 1,
        title: 'Test item card',
        price: 50000,
        discount: initRandomDiscount,
        image: 'red'
    },
    {
        id: 2,
        title: 'Test item card',
        price: 60000,
        image: 'grey'
    },
    {
        id: 3,
        title: 'Test item card',
        price: 30000,
        discount: initRandomDiscount,
        image: 'yellow'
    },
    {
        id: 4,
        title: 'Test item card',
        price: 70000,
        discount: initRandomDiscount,
        image: 'orange'
    },
    {
        id: 5,
        title: 'Test item card',
        price: 10000,
        image: 'blue'
    },
]
