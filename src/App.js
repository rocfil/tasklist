import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [lista, setLista] = useState([]);
  let [novoItem, setNovoItem] = useState("");

  useEffect(() => {
    setLista(["(Adicione a tarefa desejada)"]);
  }, []);

  function handleKeyPress(event) {
    if (event.key === "Enter") {
      addNewItem();
    }
  }

  return (
    <div className="container">
      <div className="inputsession">
        <input
          placeholder="tarefa"
          value={novoItem} // tudo que é inserido está sendo passado para novoItem
          onChange={(event) => setNovoItem(event.target.value)}
          type="text"
          onKeyUp={handleKeyPress}
        ></input>
        <button onClick={() => addNewItem()}>Adicionar tarefa</button>
      </div>

      <ul className="lista">
        {lista.map((item, index) => (
          <li key={index} className="item">
            {item}
            <button onClick={() => deleteItem(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
  function addNewItem() {
    if (novoItem <= 0) {
      alert("Por favor adicione uma tarefa");
      return;
    }

    // avoid the user to add the same task
    let itemIndex = lista.indexOf(novoItem);

    if (itemIndex >= 0) {
      alert("A referida tarefa já foi adicionada");
      return;
    }
    setLista([...lista, novoItem]); // ou seja cada novo item será inserido na lista
    setNovoItem(""); // limpa o input após clicar no botão
  }
  function deleteItem(index) {
    let modifiedArray = [...lista];
    modifiedArray.splice(index, 1);
    // invocando setLista para alterar o estado
    setLista(modifiedArray);
  }
}

export default App;
