'use client';
import Botao from "@/components/curriculos/botao";
import Formulario from "@/components/curriculos/formulario";
import Layout from "@/components/curriculos/layout";
import Tabela from "@/components/curriculos/tabela";
import Curriculo from "@/core/Curriculo"; // Alterar o nome da classe de Evento para Curriculo
import { atualizarCurriculo, cadastrarCurriculo, excluirCurriculo, fetchCurriculos } from "@/service/curriculoService"; // Alterar os nomes das funções de evento para currículo
import { useEffect, useState } from "react";

export default function Curriculos() { // Alterar o nome do componente para Curriculos

  const [curriculo, setCurriculo] = useState<Curriculo>(Curriculo.vazio()); // Alterar o nome da variável e da classe de evento para currículo
  const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

  const [curriculos, setCurriculos] = useState<Curriculo[]>([]); // Alterar o nome da variável e da classe de evento para currículo

  useEffect(() => {
    if (visivel === 'tabela') {
      const loadCurriculos = async () => {
        try {
          const dados = await fetchCurriculos(); // Alterar o nome da função de evento para currículo
          setCurriculos(dados);
        } catch (error) {
          console.error("Erro ao buscar currículos:", error);
        }
      }

      loadCurriculos();
    }
  }, [visivel]);


  function curriculoSelecionado(curriculo: Curriculo) { // Alterar o nome da variável e da classe de evento para currículo
    setCurriculo(curriculo)
    setVisivel('form')
  }

  async function curriculoExcluido(curriculo: Curriculo) { // Alterar o nome da variável e da classe de evento para currículo
    const confirmacao = window.confirm("Tem certeza de que deseja excluir este currículo?");
    if (confirmacao) {
      try {
        if (curriculo.id !== null) {
          await excluirCurriculo(curriculo.id); // Alterar o nome da função de evento para currículo
        } else {
          console.error("curriculoId é null!");
        }
        setCurriculos(prevCurriculos => prevCurriculos.filter(c => c.id !== curriculo.id));
      } catch (error) {
        console.error("Erro ao excluir currículo:", error);
      }
    }
  }

  function salvarOuAlterarCurriculo(curriculo: Curriculo) { // Alterar o nome da variável e da classe de evento para currículo
    if (curriculo.id) {
      alterarCurriculo(curriculo)
    } else {
      salvarCurriculo(curriculo)
    }
  }

  async function alterarCurriculo(curriculo: Curriculo) { // Alterar o nome da variável e da classe de evento para currículo
    try {
      const curriculoAtualizado = await atualizarCurriculo(curriculo); // Alterar o nome da função de evento para currículo
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao atualizar currículo:", error);
    }
  }

  async function salvarCurriculo(curriculo: Curriculo) { // Alterar o nome da variável e da classe de evento para currículo
    try {
      const novoCurriculo = await cadastrarCurriculo(curriculo); // Alterar o nome da função de evento para currículo
      setVisivel("tabela");
    } catch (error) {
      console.error("Erro ao salvar currículo:", error);
    }
  }

  function novoCurriculo() { // Alterar o nome da função de evento para currículo
    setCurriculo(Curriculo.vazio()); // Alterar o nome da classe de evento para currículo
    setVisivel("form");
  }

  return (
<div className={`
  flex justify-center items-center h-screen
  bg-pink-500
  text-white`}
>

      <Layout titulo="Cadastro de Currículo">
        {visivel === 'tabela' ? (
          <>
<div className="flex justify-end">
  <button
    className="mb-4 bg-black text-white hover:bg-gray-800 px-4 py-2 rounded"
    onClick={() => novoCurriculo()}
  >
    Novo Currículo
  </button>
</div>

            <Tabela curriculos={curriculos}
              curriculoSelecionado={curriculoSelecionado}
              curriculoExcluido={curriculoExcluido}></Tabela>
          </>
        ) : (
          <Formulario curriculo={curriculo}
            curriculoMudou={salvarOuAlterarCurriculo}
            cancelado={() => setVisivel('tabela')} />
        )}
      </Layout>
    </div>
  )
}

// Evento

// 'use client';
// import Botao from "@/components/eventos/botao";
// import Formulario from "@/components/eventos/formulario";
// import Layout from "@/components/eventos/layout";
// import Tabela from "@/components/eventos/tabela";
// import Evento from "@/core/Evento";
// import { atualizarEvento, cadastrarEvento, excluirEvento, fetchEventos } from "@/service/eventoService";
// import { useEffect, useState } from "react";

// export default function Eventos() {

//   const [evento, setEvento] = useState<Evento>(Evento.vazio())
//   const [visivel, setVisivel] = useState<'tabela' | 'form'>('tabela')

//   const [eventos, setEventos] = useState<Evento[]>([]);

//   useEffect(() => {
//     if (visivel === 'tabela') {
//       const loadEventos = async () => {
//         try {
//           const dados = await fetchEventos();
//           setEventos(dados);
//         } catch (error) {
//           console.error("Erro ao buscar eventos:", error);
//         }
//       }

//       loadEventos();
//     }
//   }, [visivel]);


//   function eventoSelecionado(evento: Evento) {
//     setEvento(evento)
//     setVisivel('form')
//   }

//   async function eventoExcluido(evento: Evento) {
//     const confirmacao = window.confirm("Tem certeza de que deseja excluir este evento?");
//     if (confirmacao) {
//       try {
//         if (evento.id !== null) {
//           await excluirEvento(evento.id);
//         } else {
//           console.error("eventoId é null!");
//         }
//         setEventos(prevEventos => prevEventos.filter(ev => ev.id !== evento.id));
//       } catch (error) {
//         console.error("Erro ao excluir evento:", error);
//       }
//     }
//   }

//   function salvarOuAlterarEvento(evento: Evento) {
//     if (evento.id) {
//       alterarEvento(evento)
//     } else {
//       salvarEvento(evento)
//     }
//   }


//   async function alterarEvento(evento: Evento) {
//     try {
//       const eventoAtualizado = await atualizarEvento(evento);
//       setVisivel("tabela");
//     } catch (error) {
//       console.error("Erro ao atualizar evento:", error);
//     }
//   }

//   async function salvarEvento(evento: Evento) {
//     try {
//       const novoEvento = await cadastrarEvento(evento);
//       setVisivel("tabela");
//     } catch (error) {
//       console.error("Erro ao salvar evento:", error);
//     }
//   }

//   function novoEvento() {
//     setEvento(Evento.vazio())
//     setVisivel("form")
//   }

  
//   return (
//     <div className={`
//      flex justify-center items-center h-screen
//      bg-gradient-to-bl from-indigo-900 via-indigo-400 to-indigo-900
//      text-white`}>
//       <Layout titulo="Cadastro de Curriculo">
//         {visivel === 'tabela' ? (
//           <>
//             <div className="flex justify-end">
//               <Botao className="mb-4" cor="bg-gradient-to-r from-green-500 to-green-700"
//                 onClick={() => novoEvento()}>
//                 Novo Curriculo
//               </Botao>
//             </div>
//             <Tabela eventos={eventos}
//               eventoSelecionado={eventoSelecionado}
//               eventoExcluido={eventoExcluido}></Tabela>
//           </>
//         ) : (
//           <Formulario evento={evento}
//             eventoMudou={salvarOuAlterarEvento}
//             cancelado={() => setVisivel('tabela')} />
//         )}
//       </Layout>
//     </div>
//   )
// }
