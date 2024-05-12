import PropTypes from "prop-types";

export default function List(props) {

    const {item: fruits = [], category = "Default"} = props;

    // fruits.sort((a, b) => a.name.localeCompare(b.name));
    fruits.sort((a, b) => a.calories - b.calories);

    const lowCaloriesFruits = fruits.filter(fruit => fruit.calories <= 100);

    const listItems = lowCaloriesFruits.map(fruit => <li key={fruit.id}>{fruit.name}: &nbsp;
        <b>{fruit.calories}</b>
    </li>)
    listItems.sort();

    return (<>
        <h3>{category}</h3>
        <ol>{listItems}</ol>
    </>);
}

List.propTypes = {
    category: PropTypes.string, item: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number
    })),
}