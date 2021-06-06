import React from 'react';
import react from '../img/react.jpg' // картинка по дефолту
console.log(react); // Путь к картинке по дефолту defaultImg

const LogoComponent = ({name, src, alt, width, height}) => {
    return (
        <div>
            <h2>{name}</h2>
            <img
            src = {src}
            alt ={alt}
            width ={width}
            height ={height}
            />
        </div>
    )
};
// Загрузка по дефолту
LogoComponent.defaultProps = {
    src: react,
    width: 200,
    height: 200,
};
export default LogoComponent;