import React from "react";
import Produto from "./Produto";

const App = () => {
  // React Hooks
  const [preferencia, setPreferencia] = React.useState(null);

  React.useEffect(() => {
    // Verificando no localStorage se existe alguma preferência de caso ter clicado em algum produto
    // Caso tenha clicado irá ser realizado um fetch já mostrando na tela o seu produto favorito
    if(localStorage.getItem('produto') !== null) {
      setPreferencia(localStorage.getItem('produto'));
    }
  }, []);

  // função que após clicar no botão irá adicionar um novo estado(valor) para preferência
  // E irá armazenar no localStorage o produto se sua preferência
  function handlePreferencia(event) {
    setPreferencia(event.target.innerText);
    localStorage.setItem('produto', event.target.innerText);
  }

  return (
    <div id="main">
      <h1>Preferência: {preferencia}</h1>
      <button onClick={handlePreferencia}>notebook</button>
      <button onClick={handlePreferencia}>smartphone</button>
      {preferencia !== null ? <Produto produto={preferencia}/> : null}
    </div>
  );
}

export default App;