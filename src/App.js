import React from "react";
import Painting from "./components/painting";
import paintingsJson from "./paint.json";
import PaintingList from "./components/paintingList"


const App = () => {
    return (
        <div>
            <h1>Main container App</h1>
            <Painting
                width='800'
                alt="New City"
                src="https://cdn.pixabay.com/photo/2021/05/01/09/59/city-6220689_960_720.jpg"
                name="City"
                author="Serj Korytskyy"
                quantity={10}
            />
            <Painting
                width='800'
                alt="New City"
                src="https://cdn.pixabay.com/photo/2015/03/26/09/48/buildings-690364_960_720.jpg"
                name="New City"
                author="Elon Musk"
                quantity="8"
            />
            <Painting
                alt={paintingsJson[3].alt}
                src={paintingsJson[3].src}
                name={paintingsJson[3].name}
                author={paintingsJson[3].author}
                quantity={paintingsJson[3].quantity}
            />
            <Painting
                width={paintingsJson[2].width}
                alt={paintingsJson[2].alt}
                src={paintingsJson[2].src}
                name={paintingsJson[2].name}
                author={paintingsJson[2].author}
                quantity={paintingsJson[2].quantity}
            />
            <h2>Painting map App</h2>

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