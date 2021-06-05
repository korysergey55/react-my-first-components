import React from 'react';
import PropTypes from 'prop-types'; // Указание типов props импортируем в каждый компонент
import Painting from "./painting";
const PaintingList = ({itemsForPaintingList}) => (
    <ul>
        {itemsForPaintingList.map((paint) => (
            <li key={paint.id}>
                <Painting
                    width={paint.width}
                    alt={paint.alt}
                    src={paint.src}
                    name={paint.name}
                    author={paint.author}
                    quantity={paint.quantity}
                />
            </li>
        ))}
    </ul>
);

// Указание типов props делаем в каждом компоненте
Painting.propTypes = {
    src: PropTypes.string,
    name: PropTypes.string.isRequired,
};

export default PaintingList;
