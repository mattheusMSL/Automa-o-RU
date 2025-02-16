import React /*useState*/ from "react";
import "./App.css";
import NavBar from "./components/UI/NavBar";
import Button from "./components/UI/Button";

function App() {
  //  const [count, setCount] = useState(0);

  return (
    <>

      <header className="text-black-400 flex justify-center">
        <NavBar /> 
      </header >

      <main className="flex items-center text-center pl-50 py-20 space-y-10 flex-col m-20 ">
          <h1 className="text-[#3A6D41] text-[4.5em]/20
           font-(--font-roboto)">
            Compre suas <span className="text-[#FFAB00]">fichas</span> de forma <br /> rápida, fácil e segura!
          </h1>

          <p className="leading-relaxed font-(--font-inter)">Bem-vindo ao nosso aplicativo de fichas do Restaurante Universitário! Com <br /> facilidade, você pode comprar e gerenciar suas fichas, garantindo mais <br /> comodidade para suas refeições no dia a dia acadêmico.
          </p>

          <Button title={"Comprar Agora"} />        
      </main>    
    </>
  );
}

export default App;
