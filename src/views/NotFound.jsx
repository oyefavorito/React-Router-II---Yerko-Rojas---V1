import notFoundGif from "../assets/img/notFoundGif.gif";
import "./notFound.css";

const NotFound = () => {
  return (
    <>
      <section>
        <h1>
          <strong>NO SE HA ENCONTRADO LA PÁGINA</strong>
        </h1>
        <img id="gif" src={notFoundGif} alt="equipo rocket vencido otra vez" />
      </section>
    </>
  );
};

export default NotFound;
