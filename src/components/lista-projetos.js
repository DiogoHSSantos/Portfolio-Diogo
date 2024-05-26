

// {
//     id: numeroAleatorio,
//     nome:'',
//     descricao: '',
//     linguagens:[],
//     link:''
// },


const numeroAleatorio = Math.floor(Math.random() * 20000)

const listaDeProjetos = [
    {
        id: numeroAleatorio,
        nome:'Projeto Organo',
        descricao: 'Esse foi um projeto que produzi em curso na Alura, é um projeto onde você pode criar equipes da area de trabalho de programação',
        linguagens:['ReactJs', 'CSS3', 'JavaScript'],
        link:'https://diogohssantos.github.io/Projeto-Organo/   '
    },
    {
        id: numeroAleatorio,
        nome:'Alura - studies',
        descricao: 'Esse projeto é um timer onde você pode contar seu tempo de estudo',
        linguagens:['TypeScript', 'ReactJS', 'SCSS'],
        link:'https://diogohssantos.github.io/Alura-Studies/'
    },
    {
        id: numeroAleatorio,
        nome:'Tela de Login',
        descricao: 'Esse projeto foi criado para por em pratica meus ensinamentos com css em relação a telas espansivas e adaptaveis a qualquer dispositivo',
        linguagens:['HTML5', 'CSS3'],
        link:'https://diogohssantos.github.io/Projeto-login/'
    },
    {
        id: numeroAleatorio,
        nome:'Tabela de Clientes',
        descricao: 'Nesse projeto eu utilizei uma API para a criação de novos pacientes (é um site de lista de pacientes)',
        linguagens:['JavaScript', 'CSS3'],
        link:'https://diogohssantos.github.io/Tabela-de-Clientes/'
    },                                                                      
];

export default listaDeProjetos;