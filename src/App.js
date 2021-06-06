import React from "react";
import Painting from "./components/painting"; // импорт компонента Painting
import paintingsJson from "./paint.json"; // импорт базы данных для рендеринга
import PaintingList from "./components/paintingList"; // импорт компонента PaintingList 
import LogoComponent from "./components/logo"; // импорт компонента LogoComponent

const App = () => {
    return (
        <div>
            <h1>Main container App</h1>
            <LogoComponent
                name="Logo-component"
                src="/static/media/react.543510f5.jpg"
                alt="logo"
                width='150'
                height='150'
            />
            <Painting
                title='First-component'
                width='800'
                alt="New City"
                src="https://cdn.pixabay.com/photo/2021/05/01/09/59/city-6220689_960_720.jpg"
                name="City"
                author="Serj Korytskyy"
                quantity={11}
            />
            <Painting
                title='Second-component'
                width='800'
                alt="New City"
                src="https://cdn.pixabay.com/photo/2015/03/26/09/48/buildings-690364_960_720.jpg"
                name="New City"
                author="Elon Musk"
                quantity={8}
            />
            <Painting
                title='Third-component'
                alt={paintingsJson[3].alt}
                src={paintingsJson[3].src}
                name={paintingsJson[3].name}
                author={paintingsJson[3].author}
                quantity={paintingsJson[3].quantity}
            />
            <Painting
                title='Fourth-component'
                width={paintingsJson[2].width}
                alt={paintingsJson[2].alt}
                src={paintingsJson[2].src}
                name={paintingsJson[2].name}
                author={paintingsJson[2].author}
                quantity={paintingsJson[2].quantity}
            />
            <h2>Painting-component map App</h2>

            <ul>
                {paintingsJson.map((paint) => (
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
            <h2>Painting map App from PaintingList</h2>
            <PaintingList itemsForPaintingList={paintingsJson} />

        </div>
    );
};
export default App;