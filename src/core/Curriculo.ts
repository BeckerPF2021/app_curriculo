import { stringParaEntradaDeData } from "@/utils/converter";

export default class Curriculo {
  id: number | null;
  nomeCompleto: string;
  dataNascimento: string;
  formacao: string; // Novo atributo: Formação
  sexo: string; // Novo atributo: Sexo

  constructor(
    id: number | null,
    nomeCompleto: string,
    dataNascimento: string,
    formacao: string,
    sexo: string
  ) {
    this.id = id;
    this.nomeCompleto = nomeCompleto;
    this.dataNascimento = dataNascimento;
    this.formacao = formacao;
    this.sexo = sexo;
  }

  static geraCurriculosMock() {
    return [
      new Curriculo(1, "Guilherme Padilha Becker", "1997-05-18", "Ensino Médio completo", "Masculino" /* outras propriedades */),
      new Curriculo(2, "Cassieli Koehler", "2000-05-01", "Ensino Médio Completo", "Feminino" /* outras propriedades */)
      // Adicione outros currículos com os novos atributos
    ];
  }

  static vazio(): Curriculo {
    return new Curriculo(null, "", "", "", ""); // Inicialize os novos atributos com valores padrão ou vazios
  }
}
