import "./home.css";

const Home = () => {
  return (
    <div className="mt-5 text-center">
      <h1>
        <strong>BIENVENIDO MAESTRO POKEMÓN</strong>
      </h1>

      <iframe
        className="youtube-video"
        src="https://www.youtube.com/embed/uDIoEbbFKAY?autoplay=1" // URL del video de YouTube con autoplay
        title="Opening Pokemon" // Título del video (accesibilidad)
        frameBorder="0" // Borde del reproductor de video
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" // Permisos del reproductor de video
        allowFullScreen // Permite el modo de pantalla completa
      ></iframe>
    </div>
  );
};

export default Home;
