import { BsFillHexagonFill } from 'react-icons/bs'



const ComponentCard = ({item}) => {
  
  return (
    <div className="ContainerTarget" key={item.id}>
      <img className="imgprueba" alt="img" src={item.image} />
      <div className="ContainerInfo">
        <h2>{item.name}</h2>
        <p>
          <BsFillHexagonFill
            className={
              item.status === "Alive"
                ? "bsgreen"
                : item.status === "Dead"
                ? "bsred"
                : "bsdesconocido"
            }
          />
          {item.status} - {item.species}
        </p>
        <h4 className="colorText2">Last Known location:</h4>
        <p>{item.origin.name}</p>
        <h4 className="colorText2">Frist seen in:</h4>
        <p>{item.location.name}</p>
      </div>
    </div>
  );
}

export default ComponentCard