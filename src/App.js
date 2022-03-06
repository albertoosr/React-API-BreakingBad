//agregar un state y useEfecct
import React, {useState, useEffect} from 'react';
import styled from '@emotion/styled';
//imprtamos el componente de frases 
import Frases from './components/Frases';


const Contenedor = styled.div`
      display: flex;
      align-items: center;
      padding-top: 5rem;
      flex-direction: column;   

`;

const Boton = styled.button`
      background: -webkit-linear-gradient(top left, #007d35 0%, #007d35 40%, #0f574e 100%);
      background-size: auto;
      font-family: Arial, Helvetica, sans-serif;
      color: #fff;
      margin-top: 3rem;
      padding: 1rem 3rem;
      font-size: 2rem;
      border: 2px solid black;
      cursor: pointer;
      transition: background-size .3s ease;

      :hover {
        background-size: 400px;
      }
`;

function App() {

  //state de frases
  const [frase, guardarFases] = useState({});



 /*
  const consultarAPI = () => {
   
    //ocupamos fetch
    const resultado = fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    //ingresar al promise
    //NOTa: cuando tengas un pending ingresas conun then 
    const frase = resultado.then( respuesta => {
          return respuesta.json();
    });

    frase.then(resultado => {
      console.log(resultado);
    })
  }
*/
  //ocupar fecth + async y await

  const consultarAPI = async () => {
    const api = await fetch('https://breaking-bad-quotes.herokuapp.com/v1/quotes');
    const frase = await api.json();
    console.log(frase[0]);
    guardarFases(frase[0]);
  }

  //Cargar una franse con useEfecc
  useEffect(() => {
    consultarAPI();
  }, []);


  //opción 1 = onClick={consultarAPI}
  //opction 2 = onClick={() => consultarAPI()}
  //opción 3 = onClick(consultarAPI()) <- eso llama a una función
  return (
    <Contenedor>
      <Frases
        frase = {frase}
      >
        
      </Frases>
      <Boton
        onClick={consultarAPI}
      >
        Obtener Frase
      </Boton>
    </Contenedor>
  );
}

export default App;
