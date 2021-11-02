import './Card.css';

const Card = (props) => {
    const classes = "card" + props.className;
    
    return <div className={classes}>{props.children}</div> /* child is content bewteen opening and closing tag of this component (Card) */
}

export default Card;