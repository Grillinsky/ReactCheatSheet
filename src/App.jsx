import Nota from "./components/Nota.jsx";
// import User from "./components/Usuario.jsx";
import Home from "./components/Home.jsx";
import Nav from "./components/Nav.jsx";
import Error404 from "./components/Error404.jsx";
import Product from "./components/Product.jsx";
import "./App.css";
import { Routes, Route, Link, Navigate, redirect } from "react-router-dom";
import Contact from "./components/Contact.jsx";
import User from "./components/User";
import { useSelector, useDispatch } from "react-redux";
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

// USING FILTER &  REDUCE
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

// ROUTES IN REACT
// function App() {
//   return (
//     <>
//       <Nav />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/contacto" element={<Navigate replace to="/contact/" />} />
//         <Route path="/products/:id" element={<Product />} />
//         <Route path="*" element={<Error404 />} />
//       </Routes>
//     </>
//   );
// }
// export default App;

function App() {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state);
  return (
    <>
      <h1>Probando redux </h1>
      <ul>
        {users.map((user, index) => {
          <User name={user} key={index} />;
        })}
      </ul>
      <div>
        <button onClick={() => dispatch({ type: "SET_USER", payload: "Leia" })}>
          Agregar Leia
        </button>
        <button
          onClick={() => dispatch({ type: "SET_USER", payload: "Eloisa" })}
        >
          Agregar Eloisa
        </button>
        <button
          onClick={() => dispatch({ type: "SET_USER", payload: "Bruh Moment" })}
        >
          Agregar Memes
        </button>
      </div>
    </>
  );
}
export default App;
