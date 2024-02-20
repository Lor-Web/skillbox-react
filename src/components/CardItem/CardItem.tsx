import './CardItem.css';
import {Card} from "../../assets/data/cards.data.ts";

function CardItem(card: Card) {
    return (
        <article className="card">
            <div className="card-image" style={{backgroundColor: card.image}}></div>
            <h2 className="card-title">{card.title}</h2>
            <div>
                <h3 className="card-price">{card.price}</h3>
                {card?.discount && <s className="card-discount">{card.price * card.discount()}</s>}
            </div>
        </article>
    )
}

export default CardItem
