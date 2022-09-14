import { BsFillCaretLeftFill,BsFillCaretRightFill } from "react-icons/bs";



/* para poder usar funciones en otra hoja las podemos pasar por hooks*/
const Pasarpag = ({prev, next, regrezar , avanzar}) => {

  const regreza = ()=> {    
    regrezar()
  }

  const avanza = ()=> {
    avanzar()
  }

  return ( 
    <div className="ContainerButtonsSlider">
      {prev ? (
        <button className="buttonslider" onClick={regreza}>
          <BsFillCaretLeftFill />
        </button>
      ) : null}

      {next ? (
        <button className="buttonslider" onClick={avanza}>
          <BsFillCaretRightFill />
        </button>
      ) : null}
    </div>
  );
}

export default Pasarpag