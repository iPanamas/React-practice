import Painting from "./Painting/Painting";
import PropTypes from "prop-types";

function PaintingList({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          <Painting
            imageUrl={item.url}
            title={item.title}
            price={item.price}
            authorUrl={item.author.url}
            authorName={item.author.tag}
            quantity={item.quantity}
            defaultImage={item.defaultImage} />
        </li>
      ))}
    </ul>
  );
}
PaintingList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default PaintingList;

