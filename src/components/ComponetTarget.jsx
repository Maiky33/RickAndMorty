import '../css/StyleTarget.css'
import '../css/StyleContainerCharacters.css'
import '../css/StyleSeach.css'


import {useEffect,useState} from 'react'
import ComponentCard from './ComponentCard'
import Pasarpag from './NextPrev'
import Swal from 'sweetalert2'




const ContainerTargets = () => {
  const url = "https://rickandmortyapi.com/api/character?";
  const [characters, setcharacters] = useState([]);
  const [links, setlinks] = useState({});
  const [seach, setSeach] = useState("");

  
  const fetchApi = async (url) => {                             
    const res = await fetch(url);
    const resjson = await res.json(); 
    console.log(resjson);
    if (resjson?.results?.length > 0) {
      setcharacters(resjson.results);
      setlinks(resjson.info);
    } else {  
      Swal.fire({
        title: 'Error!',
        text: 'Do you want to continue',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    
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



  const alerta = () => {  
    Swal.fire({
      position: 'top-end',
      icon: 'error',
      title: 'No characters found',
      showConfirmButton: false,
      timer: 1500
    })
  }

  const FilterCharactersName = (characterfilter) => {  //filterChatersName filtra y compara el nombre de cada caracter(personaje) con el state(seach)
    if (
      characterfilter.name
        .toString()
        .toLowerCase()
        .includes(seach.toLowerCase())
    ) {
      return true; //(true);//funciona con el caracter dado (characterfilter) o solo poniendo true si lo   encuentra automaticamente envia el caracter
    } else return false;
  }

  

  return (
    <>
      <div className="ContainerSearch">
        <input
          className="InputClass"
          placeholder="Character"
          onChange={teclear}
        ></input>
        <button className="ButtonClass">Seach</button>
      </div>

      <Pasarpag
        prev={links.prev}
        next={links.next}
        regrezar={regreza}
        avanzar={avanza}
      />

      <div className="ContaineFlexTargets">
        <div className="ContainerGridTragets">
          {characters.filter(FilterCharactersName).length > 0 ? //Preguntamos con el operador ternario si character(personajes).length es mayor a cero, si es asi este filtra nuevamente los characters y mapea, En caso de que el primer filtro sea 0 retorna el div con la funcion alerta
            characters
            .filter(FilterCharactersName)
            .map((item, index) => (
              <ComponentCard key={index} item={item} />
            ))
            : // : es igualo a else 
            <div>{alerta()}</div>
          } 
        </div>
      </div>
    </>
  );

}

export default ContainerTargets





