import Curriculo from "@/core/Curriculo";
import Entrada from "./entrada";
import { useState } from "react";
import { stringParaEntradaDeData } from "@/utils/converter";
import Botao from "./botao";

interface FormularioProps {
  curriculo: Curriculo;
  curriculoMudou?: (curriculo: Curriculo) => void;
  cancelado?: () => void;
}

export default function Formulario(props: FormularioProps) {
  const id = props.curriculo?.id;
  const [nomeCompleto, setNomeCompleto] = useState(props.curriculo?.nomeCompleto);
  const [dataNascimento, setDataNascimento] = useState(props.curriculo?.dataNascimento);
  const [formacao, setFormacao] = useState(props.curriculo?.formacao || "");
  const [sexo, setSexo] = useState(props.curriculo?.sexo || "Feminino"); // Defina "Feminino" como valor padrão

  const handleSexoChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSexo(event.target.value);
  };

  return (
    <div>
      {id ? <Entrada texto="Id" valor={id} somenteLeitura /> : false}
      <Entrada texto="Nome Completo" valor={nomeCompleto} onChange={setNomeCompleto} />
      <Entrada
        texto="Data de Nascimento"
        tipo="date"
        valor={stringParaEntradaDeData(dataNascimento)}
        onChange={setDataNascimento}
      />
      <Entrada texto="Formação" valor={formacao} onChange={setFormacao} />
      {/* Substituir Entrada por um seletor de sexo */}
      <div>
        <label htmlFor="sexo">Sexo:</label>
        <select id="sexo" value={sexo} onChange={handleSexoChange}>
          <option value="Feminino">Feminino</option>
          <option value="Masculino">Masculino</option>
        </select>
      </div>
      <div className="flex justify-end mt-5">
        <Botao
          className="mr-3"
          cor="bg-gradient-to-r from-blue-500 to-blue-700"
          onClick={() =>
            props.curriculoMudou?.(
              new Curriculo(id, nomeCompleto, dataNascimento, formacao, sexo)
            )
          }
        >
          {id ? 'Alterar' : 'Salvar'}
        </Botao>
        <Botao cor="bg-gradient-to-r from-gray-500 to-gray-700" onClick={props.cancelado}>
          Cancelar
        </Botao>
      </div>
    </div>
  );
}
