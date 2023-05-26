import Nota from "./components/Nota.jsx";
import User from "./components/Usuario.jsx";
import "./App.css";

// function App() {
//   return (
//     <>
//       <Nota />
//     </>
//   );
// }

// USING EVENT LISTENERS
// function App() {
//   const [name, setName] = useState("Roberto");
//   const [likes, setLikes] = useState(0);
//   const [age, setAge] = useState(0);

//   return (
//     <>
//       <h2>Hola {name}</h2>
//       <h2>Tus likes son {likes}</h2>
//       <button onClick={() => setName("Pancracio")}>Cambiar a Pancracio</button>
//       <button onClick={() => setName("Luisito")}>Cambiar a Luisito</button>
//       <button onClick={() => setLikes(likes + 1)}>Like</button>
//     </>
//   );
// }
// function App() {
//   const [name, setName] = useState("");
//   const [nombres, setNombres] = useState([]);
//   return (
//     <>
//       <h1>{name}</h1>
//       <form
//         action=""
//         onSubmit={(event) => {
//           event.preventDefault();
//           setNombres((prevState) => [...prevState, name]);
//         }}
//       >
//         <label htmlFor="Input">Nombre</label>
//         <input
//           type="text"
//           id="Input"
//           name="Input"
//           value={name}
//           onChange={(event) => setName(event.target.value)}
//         />
//         <button type="submit">Enviar</button>
//       </form>
//       <h2>El listado de nombres es:</h2>
//       <ul>
//         {nombres.map((nombre, index) => (
//           <li key={index}>{nombre}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// USING REDUCE
// const cart = [
//   {
//     id: 1,
//     name: "manzana",
//     cantidad: 1,
//   },
//   {
//     id: 2,
//     name: "banana",
//     cantidad: 3,
//   },
//   {
//     id: 3,
//     name: "pera",
//     cantidad: 10,
//   },
// ];
// const cartFiltrado = cart.filter(function (products) {
//   return products.cantidad < 5;
// });

// const numeros = [1, 2, 3, 4, 5, 6, 7, -10];
// const resultadoFunal = numeros.reduce(function (acc, valorActual) {
//   return acc + valorActual;
// }, 0);

// console.log(resultadoFunal);
function App() {
  return (
    <>
      <User />
    </>
  );
}
export default App;
