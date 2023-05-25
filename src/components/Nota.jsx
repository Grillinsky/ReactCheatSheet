import { useState, useEffect } from "react";
function Nota() {
  const [clicks, setClicks] = useState(0);

  //componentDidMount
  useEffect(() => {
    console.log("El componente es renderizado por Primera Vez");
  }, []);

  //componentDidUpdate
  useEffect(() => {
    console.log("Componente actualizado");
  }, [clicks]);

  //componentWillUnmount
  useEffect(() => {
    return () => {
      console.log("Componente esta por ser desmontado");
    };
  });

  return (
    <>
      <h2 onClick={() => setClicks(clicks + 1)}>Titulo</h2>
      <p>Texto</p>
    </>
  );
}
export default Nota;
