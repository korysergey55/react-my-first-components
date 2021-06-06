import React from 'react';
import PropTypes from 'prop-types'; // Указание типов props
import defaultImg from './default.jpg'; // картинка по дефолту
console.log(defaultImg); // Путь к картинке по дефолту defaultImg

const Painting = (props) => {
    return (
        <div>
            <h2>{props.title}</h2>
            <img
                src={props.src}
                alt={props.alt}
                width={props.width}
            />
            <h2>{props.name}</h2>
            <button type="button">See pecture</button>
            <p>{props.author}</p>
            <p>status: {props.quantity > 10 ? "VIP" : "Common"}</p>
        </div>
    );
}
// Загрузка по дефолту
Painting.defaultProps = {
    src: defaultImg,
    width: 800,
};
// Указание типов props
Painting.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string.isRequired,
    // quantity: PropTypes.number.isRequired,
};
export default Painting;