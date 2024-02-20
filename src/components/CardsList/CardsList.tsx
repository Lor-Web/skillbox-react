import CardItem from "../CardItem/CardItem.tsx";
import {Card, CARDS_DATA} from "../../assets/data/cards.data.ts";
import './CardList.css';


function CardsList() {
    return (

        <ul className="cards-list">
            {
                CARDS_DATA.map((itemCard: Card) =>
                    <li key={itemCard.id}>
                        <CardItem {...itemCard} />
                    </li>
                )}
        </ul>
    )
}

export default CardsList
