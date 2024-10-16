function juego(){
    tablero = 
    [
        ["#","#","#"],
        ["#","#","#"],
        ["#","#","#"],
    ]


    let juego = true;
    let turno = 1;
    let posicionX = 0, posicionY = 0
    while(juego){
        do{
            [posicionX, posicionY] = preguntaJugador(turno).split(",");
            console.log(posicionX, posicionY)
        } while(!validarPosicion(posicionX, posicionY))
        

        if(turno == 1){
            console.log(posicionX)
            tablero[posicionX][posicionY] = "X"
            turno = 2
        } else {
            tablero[posicionX][posicionY] = "O"
            turno = 1
        }
        if(comprobarTablero() == "victoria"){
            juego = false
            alert("Jugador " + turno + " ha ganado\n" + imprimirtablero())
        } else if(comprobarTablero() == "empate"){
            juego = false
            alert("Empate\n" + imprimirtablero())}

        else {
            alert(imprimirtablero())
        }
    }
    function validarPosicion(posicionX, posicionY){
        console.log(tablero[posicionX][posicionY])
        if(posicionX < 0 || posicionX > 2 || posicionY < 0 || posicionY > 2){
            return false
        } else if((tablero[posicionX][posicionY] == "X" || tablero[posicionX][posicionY] == "Y")){
            return false
        } else {
            return true
        }
    }
    function preguntaJugador(turno){
        return prompt(imprimirtablero() + "\nJugador " + turno + ", que casilla quieres marcar? (x,y)");
    }
    
    function comprobarTablero(){
        tablero.forEach((fila) => {
            fila.forEach((casilla) => {
                if(casilla == "O" || casilla == "X"){
                    return "empate"
                }
            })
        })

        for(let i = 0; i < 3; i++){
            if((tablero[i][0] == tablero[i][1] && tablero[i][1] == tablero[i][2])){
                if(tablero[i][0] == "#"){
                    return "sigue"
                }
                return "victoria"
            }
            if(tablero[0][i] == tablero[1][i] && tablero[1][i] == tablero[2][i]){
                if(tablero[0][i] == "#"){
                    return "sigue"
                }
                return "victoria"
            }
            if(tablero[0][0] == tablero[1][1] && tablero[1][1] == tablero[2][2]){
                if(tablero[0][0] == "#"){
                    return "sigue"
                }
                return "victoria"
            }
            if(tablero[0][2] == tablero[1][1] && tablero[1][1] == tablero[2][0]){
                if(tablero[0][2] == "#"){
                    return "sigue"
                }
                return "victoria"
            }
            if(tablero[0][0] == tablero[0][1] && tablero[0][1] == tablero[0][2]){
                if(tablero[0][0] == "#"){
                    return "sigue"
                }
                return "victoria"
            }
            if(tablero[1][0] == tablero[1][1] && tablero[1][1] == tablero[1][2]){
                if(tablero[1][0] == "#"){
                    return "sigue"
                }
                return "victoria"
            }
            if(tablero[2][0] == tablero[2][1] && tablero[2][1] == tablero[2][2]){
                if(tablero[2][0] == "#"){
                    return "sigue"
                }
                return "victoria"
            }
        }
        return "sigue"
    }

    function imprimirtablero(){
        tablero_string = ""
        tablero.forEach(linea => {
            linea.forEach(casilla => {
                tablero_string += casilla + " "
            });
            tablero_string += "\n"
        });
        return tablero_string
    }
    
}