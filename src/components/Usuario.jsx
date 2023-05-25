import { useState, useEffect } from "react";
import axios from "axios";
// function Usuario({ nombre, apellido }) {
//   return (
//     <>
//       <h2>
//         {nombre} {apellido}
//       </h2>
//       <p>
//         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit atque,
//         dicta voluptatum illo corrupti similique optio rerum iusto, labore
//         repellendus id esse quidem sunt, alias est architecto doloremque magnam
//         ipsa!
//       </p>
//     </>
//   );
// }
// export default Usuario;
function User() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    async function getUserData() {
      const response = await axios.get(
        "https://swapi.dev/api/people/5?format=json"
      );
      setUserData(response.data);
    }
    getUserData();
  }, []);
  return (
    <>
      <h2>{userData === null ? "cargando" : userData.name}</h2>
      {/* <h2>{userData && userData.name}</h2> */}
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus,
        exercitationem.
      </p>
    </>
  );
}
export default User;
