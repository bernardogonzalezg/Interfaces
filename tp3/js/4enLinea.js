"use strict";


let basico= {
    line: 4,
    columns: 7,
    rows: 6,
    pieces: 21
}
let intermedio = {
    line: 5,
    columns: 8,
    rows: 7,
    pieces: 32
}
let avanzado = {
    line: 6,
    columns: 9,
    rows: 8,
    pieces: 45
}
let mundial = {
    line: 7,
    columns: 10,
    rows: 9,
    pieces: 60
}

const SETTINGS_BOX = document.querySelector("#game-settings");
const GAME_BOX = document.querySelector("#game-box");

//variables globales
let current_mode = basico;  //Por defecto
let player1;
let player2;
let board;
let current_player;
let next_player;
let isDragging = false;
let selectedPiece;
let selectedPiece_initialPosition;
let selectedColumn;

/*
  Crea, muestra y elimina del dom un mensaje recibido por parámetro, 
  después de 2 segundos
 */
function showErrorMsg(msg) {
    let section = document.querySelector(".piece-settings");
    let el = document.createElement("h5");
    el.innerHTML = msg;
    section.appendChild(el);

    setTimeout(() => {
        el.innerText = "";
        section.removeChild(el);
    }, 2000);
}

// Permite seleccionar la ficha con la que jugará cada participante
function selectPiece(selectedBtn, btnsContainer, player) {
    //Por cada botón, remueve la clase que lo destaca
    for (const btn of btnsContainer.children) {
        btn.classList.remove("piece-settings-btn-active");
    }
    //agrega la clase que lo destaca al boton pasado por parametro
    selectedBtn.classList.add("piece-settings-btn-active");
    //Guarda los valores
    if(player == 1) player1 = selectedBtn.value;
    else player2 = selectedBtn.value;
    //Si coinciden, no deja ninguna selecionado y tira mensaje de error
    if(player1 == player2) {
        showErrorMsg("Selecciona un superheroe distinto.");
        for (const btn of btnsContainer.children) {
            btn.classList.remove("piece-settings-btn-active");
        }
        //reinicia los valores
        if(player == 1) player1 = null;
        else player2 = null;
    }
}

/* selecciona las opciones de juego
 */
function setFormBtnsEvents() {
    //clasifica el modo de juego y lo envia para armar el tablero
    let radioInputs = document.querySelectorAll("input");
        radioInputs.forEach((input) => {
        input.addEventListener("click", () => {
            let name_current_mode = input.value;
            input.classList.add("destacado");
            setBoard(name_current_mode);
            selectMode(radioInputs, name_current_mode);
        });
    });
    
    //determina que personaje es elegido por el player 1
    let btnsContainer = document.querySelector("#player-1-piece-btns");
    for (const btn of btnsContainer.children) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            selectPiece(btn, btnsContainer, 1)});
    }
    //determina que personaje es elegido por el player 2
    let ScndBtnsContainer = document.querySelector("#player-2-piece-btns");
    for (const btn of ScndBtnsContainer.children) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            selectPiece(btn, ScndBtnsContainer, 2)});
    }
}

//clasifica el modo elegido
function selectMode(inputs, valor){
    inputs.forEach(i => {
        if(i.value != valor)
            i.classList.remove("destacado");
    });
};

//setea el tablero segun el modo elegido
function setBoard(name_current_mode) {
    if(name_current_mode === "Basico")
        current_mode = basico;
    else if(name_current_mode === "Intermedio")
        current_mode = intermedio;
    else if(name_current_mode === "Avanzado")
        current_mode = avanzado;
    else if(name_current_mode === "Mundial")
        current_mode = mundial;
}


// inicializa el juego
document.querySelector("#play-settings-btn").addEventListener("click", renderizarJuego);

//guarda contenedores del dom, que luego se muestran o oculatan
let conteinerJuego = document.querySelector("#game-box");
let conteinerOpciones = document.querySelector("#game-settings");
let conteinerInicial = document.querySelector("#conteiner-btn-gameExecute");

//desactiva el juego y las opciones de juego, al cargar el dom muestra la presentación del juego
conteinerJuego.classList.add("container-inactivo");
conteinerOpciones.classList.add("container-inactivo");

//activa las opciones, desactiva la presentación
function irOpciones() {
    conteinerOpciones.classList.add("container-activo");
    conteinerOpciones.classList.remove("container-inactivo");
    conteinerInicial.classList.add("container-inactivo");
}

//controla que las opciones esten seteadas e inicia el juego
//desactiva las opciones y activa el juego
function renderizarJuego(){
    if (checkSettings()){
        play();
        conteinerJuego.classList.add("container-activo");
        conteinerJuego.classList.remove("container-inactivo");
        conteinerOpciones.classList.add("container-inactivo");
        conteinerOpciones.classList.remove("container-activo");
    }
}

//eventos que dan funcionalidad a los botones para acceder a las opociones y al juego.
document.querySelector("#btn-ejecutar").addEventListener("click", irOpciones);
document.querySelector("#play-settings-btn").addEventListener("click", renderizarJuego);
document.querySelector("#restart-btn").addEventListener("click", renderizarJuego);



//Chequea que se hayan elegido las fichas.
function checkSettings() {
    if(player1 == null && player2 == null) {
        showErrorMsg("Selecciona un superheroe");
        return false;
    } 
    if(player1 == null || player2 == null) {
        showErrorMsg("Selecciona un oponente");
        return false;
    } 
    return true;   
}

const CANVAS = document.querySelector("#game-box-canvas");
const MSG_BOX = document.querySelector("#game-msg-div");
const GAME_MODAL = document.querySelector("#game-modal");


//Setea qué jugador tiene el turno y llama a mostrarlo
function setTurn() {
    if(current_player == null) {
        current_player = player1;
        next_player = player2;
    } else {
        let last_player = current_player;
        current_player = next_player;
        next_player = last_player;
    }
    showTurn(); 
}


//Si se está arrastrando una ficha al soltar el mouse, deja de propagarse
//chequea si se detuvo dentro del tablero y si la columna esta llena
//controla si el juegador gano, sino setea el turno.
//vuelve a dibujar el tablero
function onMouseUp(e) {
    if(!isDragging) 
        return;
    e.preventDefault();
    e.stopPropagation();
    isDragging = false;
    if(selectedPiece != null && selectedColumn != null) {
        if(board.isFull(selectedColumn)) {
            selectedPiece.setPosition(selectedPiece_initialPosition.x, selectedPiece_initialPosition.y);
            showMsgInModalBox("No hay más espacio para poner una ficha en la columna", 3000);
        } else {
            board.savePlay(selectedPiece, selectedColumn);
            setTimeout(() => {
                let winner = board.checkWinner(selectedPiece, selectedColumn);
                if(winner == null) {
                    setTurn(); 
                } else {
                    let msg = `<p>Felicitaciones <span class="game-box">` + winner + `</span>, ganaste!</p>`; 
                    showMsgInModalBox(msg, 5000);
                }}, 1000);        
        }
        board.draw();
    }
}

//Cuando la ficha seleccionada es arrastrada fuera del canvas, vuelve a mostrarla en la pila
function onMouseOut(e) {
    if(!isDragging)
        return;
    e.preventDefault();
    e.stopPropagation();
    isDragging = false;
    if(selectedPiece != null) {
        selectedPiece.setPosition(selectedPiece_initialPosition.x, selectedPiece_initialPosition.y);
        board.draw();
        setTimeout(() => {
            selectedPiece.setHighlight(false); 
            board.draw();
        }, 500);
    }
}

/*
Si al mover el mouse se está arrastrando una ficha al mover el mouse, 
va renovando su posición
Si se está arrastrando la ficha sobre una columna del tablero, 
se resalta la flecha que está sobre ella
*/
function onMouseMove(e) {
    if(!isDragging) 
        return;
    e.preventDefault();
    e.stopPropagation();
    if(isDragging && selectedPiece != null) {
        selectedPiece.setPosition(e.offsetX, e.offsetY);
        selectedColumn = board.findSelectedColumn(e.offsetX, e.offsetY);
        if(selectedColumn != null) {
            if(board.isFull(selectedColumn)) {
                showMsgInGameBox("Columna llena", 500);
            } else {
                board.highlightColumn(selectedColumn, true);
            }
        } 
        board.draw();
    }
}

//Si el jugador que tiene el turno selecciona una ficha, la guarda y muestra resaltada
function onMouseDown(e) {
    e.preventDefault();
    isDragging = true;
    if(selectedPiece != null) {
        selectedPiece.setHighlight(false);
        selectedPiece = null;
    }
    let clickedPiece = board.findSelectedElement(e.offsetX, e.offsetY);
    if(clickedPiece != null && clickedPiece.getPlayer() == current_player) {
        selectedPiece_initialPosition = clickedPiece.getPosition();
        if(!clickedPiece.getIsPlayed()) {
            selectedPiece = clickedPiece;
            if(!selectedPiece.isHighlighted()) {
                selectedPiece.setHighlight(true);
            } else {
                selectedPiece.setPosition(selectedPiece_initialPosition.x, selectedPiece_initialPosition.y);
                selectedPiece.setHighlight(false);
                board.draw();
            }
        } else {
            let msg = `<p>No puedes mover una ficha ya jugada, <span class="game-box">` + current_player + `</span>!</p>`;
            showMsgInModalBox(msg, 2000);
        }
    }

    //Si el jugador que no tiene el turno intenta mover una ficha, resalta el mensaje de quien es el turno
    if(clickedPiece != null && clickedPiece.getPlayer() != current_player) {
        let span = document.querySelector("#game-msg-div");
        span.classList.add("danger");
        setTimeout( () => {
            span.classList.remove("danger");
        }, 1000);
    }
    
}

//Cuando el contador llega a 0, si no hay un ganador, 
//avisa que se ha acabo el tiempo y reinicia el juego
function timeOver() {
    if(board.getWinner() == null) {
        let msg = `<p>Tiempo acabado</p>`;
        showMsgInModalBox(msg, 3000);
        play();
    }
}

//Setea los eventos del juego...
function setGameEvents(){
    CANVAS.addEventListener("mousedown", onMouseDown);
    CANVAS.addEventListener("mouseup", onMouseUp);
    CANVAS.addEventListener("mousemove", onMouseMove);
    CANVAS.addEventListener("mouseout", onMouseOut);
}

//muestra el turno
function showTurn() {
    if(MSG_BOX.classList.contains("danger")) MSG_BOX.classList.remove("danger");
    MSG_BOX.innerHTML = `<p>Juega <span class="game-box">` + current_player +`</span></p>`;
}

//muestra mensajes que recibe por parametro durante un tiempo dado
function showMsgInGameBox(msg, time) {
    MSG_BOX.classList.add("danger");
    MSG_BOX.innerHTML = msg;
    setTimeout(() => {
        showTurn();
    }, time);
}

//muestra el mensaje, y cambia el estilo de su contenedor, por un tiempo dado.
function showMsgInModalBox(msg, time) {
    GAME_MODAL.classList.add("active");
    GAME_MODAL.innerHTML = msg;
    setTimeout(() => {
       GAME_MODAL.classList.add("container-inactivo");
    }, time);
}

//inicializa el juego
function play() {
    if(checkSettings()) {
        //inicia el tiempo y instancia el tablero
        let timer = new Timer(document.querySelector(".timer"));
        timer.start();
        board = new Board(current_mode, player1, player2);

        //Setea los eventos de mouse necesarios para el juego y comienza.
        setGameEvents();   
          
        //Da turno al primer jugador.
        setTurn();
    }
}


/*------------------------  Onload: Change view -------------------------------*/
function load() {
    setFormBtnsEvents(); 
}

window.onload = load();