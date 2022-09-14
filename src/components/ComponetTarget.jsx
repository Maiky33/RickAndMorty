import '../css/StyleTarget.css'
import '../css/StyleContainerCharacters.css'
import '../css/StyleSeach.css'

import {useEffect,useState} from 'react'
import ComponentCard from './ComponentCard'
import Pasarpag from './NextPrev'





const ContainerTargets = () => {
  const url = "https://rickandmortyapi.com/api/character";
  const [characters, setcharacters] = useState([]);
  const [links, setlinks] = useState({});
  const [seach, setSeach] = useState("");

  console.log(characters);
  const fetchApi = async (url) => {                             
    const res = await fetch(url);
    const resjson = await res.json();
    setcharacters(resjson.results);
    setlinks(resjson.info);
  };
  //sirve gracias a que la funcion fetchApi la cual solicita la url,luego llmamos la const url la primera vez con el use effect sin dependecias para que asi se renderice la primera vez, ya luego con las funciones regreza y avanza podemos cambiar la url obteniendo los datos nuevos.
  useEffect(() => {
    fetchApi(url);
  }, []);


  /*NextPrev*/
  const regreza = () => {  
    fetchApi(links.prev)
  }
  const avanza = ()=> { 
    fetchApi(links.next)
  } 


  /*Busqueda*/
  const teclear =(e)=> { 
    setSeach(e.target.value);
  }
  
  

  
  return (
    <>
      <div className="ContainerSearch">
        <input
          className="InputClass"
          placeholder="Character"
          onChange={teclear}
        ></input>
        <button className="ButtonClass"  value={seach}>
          Seach
        </button>
      </div>

      <Pasarpag
        prev={links.prev}
        next={links.next}
        regrezar={regreza}
        avanzar={avanza}
      />

      <div className="ContaineFlexTargets">
        <div className="ContainerGridTragets">
          {characters
            .filter((characterfilter) => {
              if (
                characterfilter.name
                  .toString()
                  .toLowerCase()
                  .includes(seach.toLowerCase())
              ) {
                return true;
              }else return false
            })
            .map((item,index) => (
              <ComponentCard key={index} item={item}/>
            ))}
        </div>
      </div>
    </>
  );

}

export default ContainerTargets
