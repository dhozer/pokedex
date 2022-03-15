/*
Quando clicar no pokémon da listagem, o cartão do pokémon aberto será oculto e o cartão correspondente ao que foi selecionado na listagem ficará em amostra.

Para isso vamos precisar trabalhar com dois elementos:
- Listagem;
- Cartão do pokémon.

OK - Precisamos criar duas variáveis no JS para trabalhar com os elementos da tela;
ok - Vamos precisar trabalhar com evento de clique feito pelo usuário;
OK - Remover a classe aberto do cartão que está aberto;
- Ao clicar no um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar;
- Remover a classe ativa que marca o pokémon selecionado;
- Adicionar a classe ativo no item da lista selecionado.
*/


//Duas variáveis criadas.
const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

//O código da L22, "forEach" faz com que o evento L24 seja aplicado a todos os itens da lista
listaSelecaoPokemons.forEach(pokemon => {
    // O código da L24, adiciona um evento ao clique em um dos itens da lista.
    pokemon.addEventListener('click', () => {
        //Remover a classe aberto só do cartão que está aberto
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        //Ao clicar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar
        //o código abaixo, faz com que ao clicar em um pokemon da lista, a variável abaixo armazene o valor do id
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        //remover a classe ativo que marca o pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //adicionar a classe ativo no item da lista selecionado
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })

})