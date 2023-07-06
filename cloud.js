// Exemplo de Cloud Script para multiplicar um valor por 2

// Definir a função que será chamada pelo cliente
handlers.helloWorld =  function(args) {
    return {Message:`Hello ${args.playerName}`}
}
