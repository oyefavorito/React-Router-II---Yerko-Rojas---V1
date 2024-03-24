import { Route, Routes } from "react-router-dom";
import BarraNavegacion from "./components/BarraNavegacion";
import Home from "./views/Home";
import Pokemones from "./views/Pokemones";
import Detalles from "./views/Detalles";
import NotFound from "./views/NotFound";


const App = () => {
  return (
    <div className="App">
      <BarraNavegacion />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pokemones" element={<Pokemones />} />
        <Route path="/pokemones/:name" element={<Detalles />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
