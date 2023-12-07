import Curriculo from "@/core/Curriculo";

let curriculosList: Curriculo[] = [
  new Curriculo(1, "Guilherme Padilha Becker", "1997-05-18", "Ensino Médio completo", "Masculino" /* outras propriedades */),
  new Curriculo(2, "Cassieli Koehler", "2000-05-01", "Ensino Médio Completo", "Feminino" /* outras propriedades */)
];

let proximoId = curriculosList.length + 1;

export const fetchCurriculos = async (): Promise<Curriculo[]> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    return curriculosList;
  } catch (error) {
    throw new Error('Erro ao buscar currículos');
  }
};

export const cadastrarCurriculo = async (novoCurriculo: Curriculo): Promise<Curriculo> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    novoCurriculo.id = proximoId++;
    curriculosList.push(novoCurriculo);
    return novoCurriculo;
  } catch (error) {
    console.error("Erro ao cadastrar currículo:", error);
    throw error;
  }
};

export const atualizarCurriculo = async (curriculoAtualizado: Curriculo): Promise<Curriculo> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    const index = curriculosList.findIndex((curriculo) => curriculo.id === curriculoAtualizado.id);
    if (index !== -1) {
      curriculosList[index] = curriculoAtualizado;
      return curriculoAtualizado;
    } else {
      throw new Error('Currículo não encontrado');
    }
  } catch (error) {
    console.error("Erro ao atualizar currículo:", error);
    throw error;
  }
};

export const excluirCurriculo = async (id: number): Promise<void> => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500));
    curriculosList = curriculosList.filter((curriculo) => curriculo.id !== id);
  } catch (error) {
    console.error("Erro ao excluir currículo:", error);
    throw error;
  }
};
