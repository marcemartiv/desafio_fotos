import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componentes/Header";
import Cards from "./componentes/Card";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div className="fondo">
    <Header />
    <Cards
      img="https://images.pexels.com/photos/459449/pexels-photo-459449.jpeg?auto=compress&cs=tinysrgb&w=400"
      name="Martín Pescador"
      tipo="Pajaro"
    />
    <Cards
    img="https://images.pexels.com/photos/133408/pexels-photo-133408.jpeg?auto=compress&cs=tinysrgb&w=400"
    name="Tigre"
    tipo="Carnivoro"
  />
  <Cards
  img="https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=400"
  name="Elefante"
  tipo="Mamifero"
   />
    <Footer/>
   </div>
  );
}

export default App;
