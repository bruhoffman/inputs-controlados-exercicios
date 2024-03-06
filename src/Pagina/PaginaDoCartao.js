import { useState } from "react";
import Cartao from "../Componentes/Cartao";
import { LayoutDaPagina } from "./estiloDaPaginaDoCartao";
import Formulario from "../Componentes/Formulario";

function PaginaDoCartao() {
  //declare os estados aqui
  const [pagamento, setPagamento] = useState("");
  const [numeroCartao, setNumeroCartao] = useState("");
  const [nome, setNome] = useState("");
  const [cvc, setCvc] = useState("");
  const [validade, setValidade] = useState("");

  //declare as funções de controle de inputs aqui
  const onChangePagamento = (event) => {
    setPagamento(event.target.value);
  };

  const onChangeNumeroCartao = (event) => {
    setNumeroCartao(event.target.value);
  };

  const onChangeNome = (event) => {
    setNome(event.target.value);
  };

  const onChangeCvc = (event) => {
    setCvc(event.target.value);
  };

  const onChangeValidade = (event) => {
    setValidade(event.target.value);
  };

  const botaoAlerta = (event) => {
    event.preventDefault();
    alert("Seu cartão foi cadastrado com sucesso!");
    setPagamento("");
    setNome("");
    setNumeroCartao("");
    setValidade("");
    setCvc("");
  };

  return (
    <LayoutDaPagina>
      {/* Passe as variáveis de estado para o Cartão. Use Props. */}
      <Cartao
        pagamento={pagamento}
        numero={numeroCartao}
        nome={nome}
        cvc={cvc}
        validade={validade}
      />

      {/* Chame o Componente Formulário Aqui */}
      {/* Passe a função de controle de input e variável de estado para o formulário. Para isso use Props */}
      <Formulario
        pagamento={pagamento}
        onChangePagamento={onChangePagamento}
        numeroCartao={numeroCartao}
        onChangeNumeroCartao={onChangeNumeroCartao}
        nome={nome}
        onChangeNome={onChangeNome}
        cvc={cvc}
        onChangeCvc={onChangeCvc}
        validade={validade}
        onChangeValidade={onChangeValidade}
        botaoAlerta={botaoAlerta}
      />
    </LayoutDaPagina>
  );
}

export default PaginaDoCartao;
