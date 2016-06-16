angular.module('App')
.factory('News', function(){
  var News = {
    data: [
      {
        title: 'Some News 01',
        brief: 'something has happened this year...',
        date: '01/01/2016 at 23:30',
        thumbUrl: 'http://www.pudim.com.br/pudim.jpg'
      },

      {
        title: 'Some News 02',
        date: '01/01/2016 at 12:30',
        brief: 'something has happened again...',
        thumbUrl: 'http://www.pudim.com.br/pudim.jpg'
      }
    ]
  };

  return News;
})

.factory('BriefEmentas', function() {
  var BriefEmentas = {
    briefs: [
      {
        title: 'Primeiro Semestre',
        text: "No primeiro semestre são ofertadas as disciplinas de Introdução a \
        Engenharia de Computação, como Matemática Discreta, Cálculo I, Lógica de \
        Programação I e Eletrônica Digital.",
        link:'http://goo.gl/8jsvij'
      },
      {
        title: 'Segundo Semestre',
        text: "No segundo semestre são ofertadas as seguintes disciplinas: Química, \
        Física I, Cálculo II, Lógica Matemática, Lógica de Programação II, Eletrônica Analógica.",
        link: 'http://goo.gl/hm3lTz'
      },
      {
        title: 'Terceiro Semestre',
        text: "No terceiro semestre são ofertadas as seguintes disciplinas: Física II, \
        Introdução à Análise de Algoritmos, Estruturas de Dados, Equações Diferenciais, \
        Métodos Numéricos, Arquitetura de Computadores.",
        link: "http://goo.gl/Xalg27"
      },
      {
        title: 'Quarto Semestre',
        text: "No quarto semestre são ofertadas as seguintes disciplinas: Eletrônica Industrial, \
        Laboratório de Eletrônica Industrial, Metrologia Dimensional, Aspectos Teóricos da Computação, \
        Pesquisa e Ordenação, Paradigmas de Programação, Microcontroladores \
        e Microprocessadores e Metodologia Científica e Tecnológica.",
        link: "http://goo.gl/PgBXjP"
      },
      {
        title: 'Quinto Semestre',
        text: "No quinto semestre são ofertadas as seguintes disciplinas: Construção de Compiladores, \
        Probabilidade e Estatística, Geometria Analítica e Álgebra Linear e Produção Textual.",
        link: "http://goo.gl/55uuHb"
      },
      {
        title: 'Sexto Semestre',
        text: "No sexto semestre são ofertadas as seguintes disciplinas: Gestão e \
        Controle da Qualidade, Redes de Computadores e Comunicação de Dados, \
        Sistemas Embarcados I, Empreendedorismo e Gestão, Banco de Dados e Engenharia de Software.",
        link: "http://goo.gl/lYZnj0"
      },
      {
        title: 'Sétimo Semestre',
        text: "No sétimo semestre são ofertadas as seguintes disciplinas: Instrumentação Eletrônica, \
        Ergonomia de Interfaces, Métodos e Ferramentas de Engenharia, Sistemas Distribuídos, Sistemas Embarcados II, \
        Economia para Profissionais de Tecnologia e Redes de Computadores sem Fio.",
        link: "http://goo.gl/12Llqh"
      },
      {
        title: 'Oitavo Semestre',
        text: "No oitavo semestre são ofertadas as seguintes disciplinas: Projetos de Sistema e Informação, Sistemas \
        Lineares, Computação Gráfica, Redes Móveis, Padrões de Projetos, Ética e Filosofia.",
        link: "http://goo.gl/lfz2IH"
      },
      {
        title: 'Nono Semestre',
        text: "No nono semestre são ofertadas as seguintes disciplinas: Laboratório de Automação Industrial, \
        Inteligência Computacional, Programação Paralela e Distribuída, Introdução à Automação Industrial e Controle, \
        Visão Computacional, Filtros Digitais, Arquitetura de Software.",
        link: "http://goo.gl/xzMDCO"
      },
      {
        title: 'Décimo Semestre',
        text: "No décimo semestre são ofertadas as seguintes disciplinas: Sistemas de \
        Tempo Real e Tolerantes à Falha, Introdução à Robótica, Sistemas Multimídia, \
        Projeto de Conclusão de Curso, Projeto Social e Gerenciamento de Projetos.",
        link: 'http://goo.gl/Bi8jSh'
      }
    ]
  };

  return BriefEmentas;
})

.factory('Teachers', function(){
  var Teachers = {
    data: [
      {
        name: 'Anaxágoras Maia Girão',
        brief: 'Possui graduação em Engenharia Elétrica pela Universidade Federal do Ceará (1992) e \
                especialização de Arquitetura de Computadores com ênfase em Sistemas Tolerantes a Falhas (UFC). \
                Atualmente é professor/pesquisador do IFCE, coordenando o Laboratório de Pesquisa Aplicada e \
                Desenvolvimento em Automação (LAPADA). ',
        titulacao: 'Especialização em Engenharia Elétrica',
        photoUrl: 'http://goo.gl/1C5j5G',
        cvUrl: ' http://lattes.cnpq.br/1133345547075628',
      },
      {
        name: 'André Luiz Carneiro de Araújo',
        brief: 'Possui graduação em Engenharia Elétrica pela Universidade Federal do Ceará (1997), \
                mestrado profissionalizante em computação pela Universidade Estadual do Ceará (2003) e doutorado em \
                engenharia de teleinformática pela Universidade Federal do Ceará (2014).',
        titulacao: 'Doutorado em Engenharia de Teleinformática',
        photoUrl: 'http://goo.gl/FIMzQh',
        cvUrl: 'http://lattes.cnpq.br/4393261030137127',
      },
      {
        name: 'Antonio Wendell de Oliveira Rodrigues',
        brief: "Doutor pela Universidade de Lille 1 - França com tema de tese relacionado à Computação de Alto Desempenho \
                usando GPUs com abordagens MDE. Trabalhou como pesquisador em tempo integral no INRIA (Institut National de Recherche \
                en Informatique et Automatique) e parcialmente na Universidade de Hertfordshire, UK. Mestre em Computação com dissertacao \
                na área de ensino de redes de computadores. Possui graduação em Engenharia Elétrica com ênfase em Informática pela \
                Universidade Federal do Ceará (1998).",
        titulacao: "Doutorado em Ecole Doctorale Sciences Pour l'Ingénieur.",
        cvUrl: 'http://lattes.cnpq.br/5147756865751360',
        photoUrl: 'http://goo.gl/orTfI2',
      },
      {
        name: 'Carlos Hairon Ribeiro Gonçalves',
        brief: "Possui graduação em Ciência da Computação pela Universidade Federal da Paraíba (1998) e \
                mestrado em Ciência da Computação pela Universidade Federal do Ceará (2003). É efetivo do Instituto Federal de \
                Educação, Ciência e Tecnologia do Ceará, exercendo a função de professor do curso de Engenharia de Computação. \
                Tem experiência na área de Ciência da Computação, com ênfase em sistemas de computação, atuando principalmente nos \
                seguintes temas: internet, dispositivos móveis, gerenciamento de redes de computadores, sistemas de informação e sistemas \
                inteligentes.",
        titulacao: 'Mestrado em Ciências da Computação',
        cvUrl: 'http://lattes.cnpq.br/0949861086857458',
        photoUrl: 'http://goo.gl/H8sZi7'
      },
      {
        name: 'Carlos Maurício Jaborandy de Mattos Dourado Júnior',
        brief: "Mestre em Engenharia de Teleinformática pela Universidade Federal do Ceará (2009) e \
                graduado em Engenharia Eletrônica pela Universidade de Fortaleza (2004). Atualmente é professor efetivo do Instituto Federal de \
                Educação, Ciência e Tecnologia do Ceará (IFCE). Tem experiência na área de Ciência da Computação com ênfase em Teleinformática, \
                atuando principalmente nos seguintes temas: Desenvolvimento de sistemas, redes de computadores, plataformas de ensino a distância e \
                gestão do conhecimento.",
        titulacao: 'Doutorado em andamento em Informática Aplicada',
        cvUrl: 'http://lattes.cnpq.br/7559969132845272',
        photoUrl: 'http://goo.gl/PJnwhz'
      },
      {
        name: 'César Olavo de Moura Filho',
        brief: "Assistant professor at the IFCE, just returned from a post-doctoral research, at the Institut National de \
                Recherche en Informatique et Automatique (INRIA), in France. My main area of research is Model Driven Engineering, \
                a sub-domain from Software Engineering that implements the well-known principle of separation of \
                concerns by enforcing that business concerns be modeled independently of any platform concerns.",
        titulacao: 'Doutorado em Doutorado em Informática.',
        cvUrl: 'http://lattes.cnpq.br/6966901006537721',
        photoUrl: 'http://goo.gl/i1lic2'
      },
      {
        name: 'Cicero Roberto Bitencourt Calou',
        brief: "Professor do Instituto Federal de Educação Ciência e Tecnologia do Ceará, IFCE, departamento de Telemática. \
                Professor orientador da disciplina de Projetos Sociais e Informática. Supervisor do programa de estágio e emprego dos \
                cursos de Telemática, Telecomunicações e Engenharia da Computação. Pesquisador do grupo de pesquisa do IFCE - LESTE, LABORATÓRIO DE \
                EMPREENDEDORISMO DIGITAL E SERVIÇOS DE TELECOMUNICAÇÕES. Orientador do Projeto e-Jovem Modulo II. Programa de formação em informática desenvolvido \
                para alunos e egressos da escola pública no convênio entre o governo estadual através da SEDUC e o IFCE, desde 2009.",
        titulacao: 'Mestrado em Informática Educativa',
        cvUrl: 'http://lattes.cnpq.br/4405597852122404',
        photoUrl: 'http://goo.gl/7SDBaC'
      }
    ]
  };

  return Teachers;
});
