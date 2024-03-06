import { Form, Selection, Botao, Input } from "./estiloDoFormulario";

//declare todo o componente formulário e seus inputs. Exporte o formulário.
function Formulario(props) {
  return (
    <Form onSubmit={props.botaoAlerta}>
      <label>
        <Selection
          required
          value={props.pagamento}
          onChange={props.onChangePagamento}
        >
          <option></option>
          <option>Crédito</option>
          <option>Débito</option>
        </Selection>
      </label>
      <label>
        Nome:
        <Input
          type="text"
          required
          value={props.nome}
          onChange={props.onChangeNome}
        />
      </label>
      <label>
        Número do cartão:
        <Input
          type="text"
          required
          value={props.numeroCartao}
          onChange={props.onChangeNumeroCartao}
        />
      </label>
      <label>
        Validade:
        <Input
          type="text"
          required
          value={props.validade}
          onChange={props.onChangeValidade}
        />
      </label>
      <label>
        CVC:
        <Input
          type="text"
          required
          value={props.cvc}
          onChange={props.onChangeCvc}
        />
      </label>
      <Botao>Cadastrar Cartão</Botao>
    </Form>
  );
}

export default Formulario;
