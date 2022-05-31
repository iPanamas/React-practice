import PropTypes from "prop-types";
import s from './Painting.module.css'

// import defaultImage from "./default" это импорт картинки по дефолту из корневой папки проэкта

export default function Painting(props) {
  const {
    imageUrl,
    title,
    authorUrl,
    authorName = "Не известно",
    price,
    quantity,
    defaultImage,
  } = props;

  return (
    <div className={s.container}>
      <img src={imageUrl ?? defaultImage} alt={title} width="480" />
      <h2>{title}</h2>
      <p>
        Автор:{" "}
        <a href={authorUrl} target="_blank" rel="noreferrer">
          {authorName}
        </a>
      </p>
      <p>Цена: {price} $</p>
      <p>Доступность: {quantity < 10 ? "заканчивается" : "Есть в налличии"}</p>
      <button type="button">Добавить в корзину</button>
    </div>
  );
}

Painting.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  authorUrl: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
