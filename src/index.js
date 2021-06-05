import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDom.render(<App/>, document.getElementById('root'));

const link = React.createElement('a', { href: 'reactjs.org', target: '_blank' }, 'link');
const jsxLink = <a href ="reactjs-2">link</a>
// ReactDom.render(link, document.getElementById('root'));
// ReactDom.render(jsxLink, document.getElementById('root'));


// const painting = {
//     id: "id-1",
//     width: 800,
//     alt: "New City",
//     city: "https://cdn.pixabay.com/photo/2021/05/01/09/59/city-6220689_960_720.jpg",
//     forest: "https://cdn.pixabay.com/photo/2012/08/06/00/53/bridge-53769_960_720.jpg",
//     name: "New City",
// }
// const template = (
//     <div>
//         <img
//         src = {painting.city} 
//         alt = {painting.alt} 
//         width = {painting.width}
//         />
//         <h2>{painting.name}</h2>
//         <button type ="button">See pecture</button>
//     </div>
// );
// ReactDom.render(template, document.getElementById('root'));

