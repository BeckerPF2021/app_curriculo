import Curriculo from "@/core/Curriculo";
import { IconeEdicao, IconeLixo } from "../icones/tabela";

interface TabelaProps {
  curriculos: Curriculo[];
  curriculoSelecionado?: (curriculo: Curriculo) => void;
  curriculoExcluido?: (curriculo: Curriculo) => void;
}

export default function Tabela(props: TabelaProps) {
  const exibirAcoes = props.curriculoSelecionado || props.curriculoExcluido;

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-3">Id</th>
        <th className="text-left p-3">Nome Completo</th>
        <th className="text-left p-3">Data de Nascimento</th>
        <th className="text-left p-3">Formação</th> {/* Novo atributo */}
        <th className="text-left p-3">Sexo</th> {/* Novo atributo */}
        {/* Adicionar outras colunas conforme necessário */}
        {exibirAcoes ? <th className="p-3">Ações</th> : false}
      </tr>
    );
  }

  function renderDados() {
    return props.curriculos?.map((curriculo, i) => {
      return (
        <tr key={curriculo.id} className={`${i % 2 === 0 ? 'bg-gray-200' : 'bg-gray-100'} `}>
          <td className="text-left p-3">{curriculo.id}</td>
          <td className="text-left p-3">{curriculo.nomeCompleto}</td>
          <td className="text-left p-3">{curriculo.dataNascimento}</td>
          <td className="text-left p-3">{curriculo.formacao}</td> {/* Novo atributo */}
          <td className="text-left p-3">{curriculo.sexo}</td> {/* Novo atributo */}
          {/* Adicionar outras colunas conforme necessário */}
          {exibirAcoes ? renderizarAcoes(curriculo) : false}
        </tr>
      );
    });
  }

  function renderizarAcoes(curriculo: Curriculo) {
    return (
      <td className="flex justify-center">
        {props.curriculoSelecionado ? (
          <button onClick={() => props.curriculoSelecionado?.(curriculo)} className={`flex justify-center items
          text-green-600 rounded-full p-2 m-1
          hover:bg-gray-100`}>
            {IconeEdicao}
          </button>
        ) : false}
        {props.curriculoExcluido ? (
          <button onClick={() => props.curriculoExcluido?.(curriculo)} className={`flex justify-center items
          text-red-600 rounded-full p-2 m-1
          hover:bg-gray-100`}>
            {IconeLixo}
          </button>
        ) : false}
      </td>
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`text-gray-100 bg-gradient-to-r from-black to-black`}>
        {renderHeader()}
      </thead>
      <tbody>{renderDados()}</tbody>
    </table>
  );
}
