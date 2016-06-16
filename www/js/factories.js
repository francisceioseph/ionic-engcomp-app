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

.factory('TeacherEmails', function(){
  var TeacherEmails = {
    emails: [
      {name:"Aluisio Cabral De Lima",email:"aluisio@ifce.edu.br"},
      {name:"Anaxagoras Maia Girao",email:"anaxa@ifce.edu.br"},
      {name:"Andre Luiz Carneiro De Araujo",email:"andreluiz@ifce.edu.br"},
      {name:"Carlos Hairon Ribeiro Goncalves",email:"hairon@ifce.edu.br"},
      {name:"Cassandra Ribeiro Joye",email:"cassandra@ifce.edu.br"},
      {name:"Cesar Olavo De Moura Filho",email:"cesarolavo@ifce.edu.br"},
      {name:"Cicero Roberto Bitencourt Calou",email:"calou@ifce.edu.br"},
      {name:"Cidcley Teixeira De Souza",email:"cidcley@ifce.edu.br"},
      {name:"Elias Teodoro Da Silva Junior",email:"elias@ifce.edu.br"},
      {name:"Fabiola Fernandes Andrade",email:"fabiola@ifce.edu.br"},
      {name:"Fernando Macedo Carneiro",email:"fmacedo@ifce.edu.br"},
      {name:"Fernando Parente Garcia",email:"fernandoparente@ifce.edu.br"},
      {name:"Francisco Jose Alves De Aquino",email:"fcoalves_aq@ifce.edu.br"},
      {name:"Glauber Ferreira Cintra",email:"glauberc@ifce.edu.br"},
      {name:"Itamar De Souza Lima",email:"itamar@ifce.edu.br"},
      {name:"Joao Batista Bezerra Frota",email:"jb@ifce.edu.br"},
      {name:"Jose Bento De Freitas",email:"jbento@ifce.edu.br"},
      {name:"José De Souza Breves Filho",email:"breves@ifce.edu.br"},
      {name:"Jose Stalio Rodrigues Dos Santos",email:"stalio@ifce.edu.br"},
      {name:"José Wally Mendonça Menezes",email:"wally@ifce.edu.br"},
      {name:"Lucineide Penha Torres De Freitas",email:"lutorres@ifce.edu.br"},
      {name:"Maria Eugenia Canto Cabral",email:"canto@ifce.edu.br"},
      {name:"Nídia Glória Da Silva Campos",email:"nidia@ifce.edu.br"},
      {name:"Nivaldo Teixeira Filho",email:"nivaldo@ifce.edu.br"},
      {name:"Paulo Maia Ferreira",email:"paulomaia@ifce.edu.br"},
      {name:"Paulo Roberto Furtado Serra",email:"paulofurtado@ifce.edu.br"},
      {name:"Ricardo Guedes",email:"ricardo@ifce.edu.br"},
      {name:"Ricardo Duarte Taveira",email:"taveira@ifce.edu.br"},
      {name:"Roberto Carlos Carneiro Feitosa",email:"robertodg68@ifce.edu.br"},
      {name:"Roberto Ferreira Sena Filho",email:"robertovideo@gmail.com"},
      {name:"Ronaldo Fernandes Ramos",email:"ronaldo@ifce.edu.br"}
    ]
  };

  return TeacherEmails;
})

.factory('Teachers', function(){
  var Teachers = {
    data: [
      {
        name: 'Anaxágoras Maia Girão',
        titulacao: 'Especialização em Engenharia Elétrica',
        photoUrl: 'http://goo.gl/1C5j5G',
        cvUrl: ' http://lattes.cnpq.br/1133345547075628',
      },
      {
        name: 'André Luiz Carneiro de Araújo',
        titulacao: 'Doutorado em Engenharia de Teleinformática',
        photoUrl: 'http://goo.gl/FIMzQh',
        cvUrl: 'http://lattes.cnpq.br/4393261030137127',
      },
      {
        name: 'Antonio Wendell de Oliveira Rodrigues',
        titulacao: "Doutorado em Ecole Doctorale Sciences Pour l'Ingénieur.",
        cvUrl: 'http://lattes.cnpq.br/5147756865751360',
        photoUrl: 'http://goo.gl/orTfI2',
      },
      {
        name: 'Carlos Hairon Ribeiro Gonçalves',
        titulacao: 'Mestrado em Ciências da Computação',
        cvUrl: 'http://lattes.cnpq.br/0949861086857458',
        photoUrl: 'http://goo.gl/H8sZi7'
      },
      {
        name: 'Carlos Maurício Jaborandy de Mattos Dourado Júnior',
        titulacao: 'Doutorado em andamento em Informática Aplicada',
        cvUrl: 'http://lattes.cnpq.br/7559969132845272',
        photoUrl: 'http://goo.gl/PJnwhz'
      },
      {
        name: 'César Olavo de Moura Filho',
        titulacao: 'Doutorado em Informática.',
        cvUrl: 'http://lattes.cnpq.br/6966901006537721',
        photoUrl: 'http://goo.gl/i1lic2'
      },
      {
        name: 'Cicero Roberto Bitencourt Calou',
        titulacao: 'Doutorado em andamento em Educação',
        cvUrl: 'http://lattes.cnpq.br/4405597852122404',
        photoUrl: 'http://goo.gl/7SDBaC'
      },
      {
        name: 'Cidcley Teixeira de Souza',
        titulacao: 'Doutorado em Ciências da Computação',
        cvUrl: 'http://lattes.cnpq.br/8431323844701530',
        photoUrl: ''
      },
      {
        name: 'Elias Teodoro da Silva Júnior',
        titulacao: 'Doutorado em Computação',
        cvUrl: 'http://lattes.cnpq.br/9405844293925084',
        photoUrl: 'http://goo.gl/VhR77Z'
      },
      {
        name: 'Ernani Andrade Leite',
        cvUrl: 'http://lattes.cnpq.br/6944727619038152',
        titulacao: 'Doutorado em andamento em Informática Aplicada',
        photoUrl: 'http://goo.gl/Ms6PZJ'
      },
      {
        name: 'Esdras Ferreira Sales Júnior',
        titulacao: 'Mestrado em Informática',
        cvUrl: 'http://lattes.cnpq.br/8768626374347089',
        photoUrl: 'http://goo.gl/7zuD0I'
      },
      {
        name: 'Fernando Parente Garcia',
        titulacao: 'Doutorado em Ciências da Computação',
        cvUrl: 'http://lattes.cnpq.br/2634131135774711',
        photoUrl: 'http://goo.gl/05QV1Y'
      },
      {
        name: 'Francisco Edmar Vasconcelos Pereira',
        cvUrl: 'http://lattes.cnpq.br/6493538996410599',
        titulacao: 'Mestrado em Educação',
        photoUrl: 'http://goo.gl/dW1GaC'
      },
      {
        name: 'Francisco José Alves de Aquino',
        cvUrl: 'http://lattes.cnpq.br/7753822376652584',
        titulacao: 'Doutorado em Engenharia Elétrica',
        photoUrl: 'http://goo.gl/hXpjP7'
      },
      {
        name: 'Glauber Ferreira Cintra',
        cvUrl: 'http://lattes.cnpq.br/1499896249253454',
        titulacao: 'Doutorado em Ciência da Computação',
        photoUrl: 'http://goo.gl/lqGq9w'
      },
      {
        name: 'Itamar de Souza Lima',
        cvUrl: 'http://lattes.cnpq.br/5379713635869189',
        titulacao: 'Mestrado em Engenharia Elétrica',
        photoUrl: ''
      },
      {
        name: 'Joacillo Luz Dantas',
        cvUrl: 'http://lattes.cnpq.br/8848115960707246',
        titulacao: 'Doutorado em andamento em Engenharia Elétrica',
        photoUrl: 'http://goo.gl/634Ouv'
      },
      {
        name: 'Joao Batista Bezerra Frota',
        cvUrl: 'http://lattes.cnpq.br/5806439919276380',
        titulacao: 'Mestrado profissional em Mestrado Profissional em Computação Aplicada',
        photoUrl: 'http://goo.gl/sC1caJ'
      },
      {
        name: 'José Bento de Freitas',
        cvUrl: 'http://lattes.cnpq.br/2294730519255707',
        titulacao: 'Mestrado profissional em Computação.',
        photoUrl: ''
      },
      {
        name: 'Nídia Glória da Silva Campos',
        cvUrl: 'http://lattes.cnpq.br/7654075576944519',
        titulacao: 'Doutorado em andamento em Engenharia de Teleinformática',
        photoUrl: ''
      },
      {
        name: 'Ricardo Bezerra de Menezes Guedes',
        cvUrl: 'http://lattes.cnpq.br/4186661410301575',
        titulacao: 'Mestrado em Ciências da Computação',
        photoUrl: 'http://goo.gl/5tBhRg'
      },
      {
        name: 'Ricardo Duarte Taveira',
        cvUrl: 'http://lattes.cnpq.br/6322998211288243',
        titulacao: 'Doutorado em andamento em Informática Aplicada',
        photoUrl: 'http://goo.gl/vqzlL8'
      },
      {
        name: 'Ronaldo Fernandes Ramos',
        cvUrl: 'http://lattes.cnpq.br/6350043279210590',
        titulacao: 'Doutorado em Systèmes Informatiques',
        photoUrl: 'http://goo.gl/nTMB7S'
      }
    ]
  };

  return Teachers;
});
