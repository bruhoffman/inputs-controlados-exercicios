import {
  onChangePagamento,
  onChangeNumeroCartao,
  onChangeNome,
  onChangeCvc,
  onChangeValidade,
} from "../Pagina/PaginaDoCartao";
import { Form, Selection, Botao } from "./estiloDoFormulario";

//declare todo o componente formulário e seus inputs. Exporte o formulário.
function Formulario(props) {
  return (
    <Form>
      <label>
        <Selection required onChangePagamento={onChangePagamento}>
          <option>Crédito</option>
          <option>Débito</option>
        </Selection>
      </label>
      <label>
        Nome:
        <input type="text" required onChangeNome={onChangeNome} />
      </label>
      <label>
        Número do cartão:
        <input
          type="text"
          required
          onChangeNumeroCartao={onChangeNumeroCartao}
        />
      </label>
      <label>
        Validade:
        <input type="text" required onChangeValidade={onChangeValidade} />
      </label>
      <label>
        CVC:
        <input type="text" required onChangeCvc={onChangeCvc} />
      </label>
      <Botao>Cadastrar Cartão</Botao>
    </Form>
  );
}

export default Formulario;
