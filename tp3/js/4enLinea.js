"use strict";


let friendly= {
    line: 4,
    columns: 7,
    rows: 6,
    pieces: 21
}
let brave = {
    line: 5,
    columns: 8,
    rows: 7,
    pieces: 32
}
let clever = {
    line: 6,
    columns: 9,
    rows: 8,
    pieces: 45
}
let ambicious = {
    line: 7,
    columns: 10,
    rows: 9,
    pieces: 60
}


const SETTINGS_BOX = document.querySelector("#game-settings");
const GAME_BOX = document.querySelector("#game-box");



/*------------------------- GAME SETTINGS ----------------------------*/
let current_mode = friendly;  //Por defecto
let player1;
let player2;


/**
 * Crea, muestra y elimina del dom un mensaje de recibido por parámetro, 
 * después de 2 segundos
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

/**
 * Permite seleccionar la ficha con la que jugará cada participante
 */
function selectPiece(selectedBtn, btnsContainer, player) {
    //Por cada botón, quita la selección...
    for (const btn of btnsContainer.children) {
        btn.classList.remove("piece-settings-btn-active");
    }
    //Selecciona el correcto...
    selectedBtn.classList.add("piece-settings-btn-active");
    //Guarda los valores...
    if(player == 1) player1 = selectedBtn.value;
    else player2 = selectedBtn.value;
    //Si coinciden, muestra el error...
    if(player1 == player2) {
        showErrorMsg("Selecciona una casa distinta a la de tu oponente!");
        //Des-selecciona los botones...
        for (const btn of btnsContainer.children) {
            btn.classList.remove("piece-settings-btn-active");
        }
        //Des-guarda los valores...
        if(player == 1) player1 = null;
        else player2 = null;
    }
}

/**
 * Setea los eventos que permiten seleccionar el modo, 
 * las fichas -chequeando que sean diferentes entre sí- 
 * y el botón "jugar"
 */
function setFormBtnsEvents() {
    let radioInputs = document.querySelectorAll("input");
        radioInputs.forEach((input) => {
        input.addEventListener("click", () => {
           let name_current_mode = input.value;
           setBoard(name_current_mode);
        });
    });

    let btnsContainer = document.querySelector("#player-1-piece-btns");
    for (const btn of btnsContainer.children) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            selectPiece(btn, btnsContainer, 1)});
    }

    let ScndBtnsContainer = document.querySelector("#player-2-piece-btns");
    for (const btn of ScndBtnsContainer.children) {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            selectPiece(btn, ScndBtnsContainer, 2)});
    }
}

function setBoard(name_current_mode) {
    if(name_current_mode === "friendly")
        current_mode = friendly;
    else if(name_current_mode === "brave")
        current_mode = brave;
    else if(name_current_mode === "clever")
        current_mode = clever;
    else if(name_current_mode === "ambicious")
        current_mode = ambicious;
}


// inicializa el juego
document.querySelector("#play-settings-btn").addEventListener("click", renderizarJuego);

/**
 * Controla que ambos jugadores hayan seleccionado ficha 
 * Cambia la vista de settings por la vista del juego
 * Inicializa el timer y el tablero
 * Setea los eventos necesarios
 * Da comienzo al juego
 */
let conteinerJuego = document.querySelector("#game-box");
let conteinerOpciones = document.querySelector("#game-settings");
let conteinerInicial = document.querySelector("#conteiner-btn-gameExecute");

//desactiva al cargar el juego y las opciones de juego
conteinerJuego.classList.add("container-inactivo");
conteinerOpciones.classList.add("container-inactivo");

//activa las opciones, desactiva la presentacion
function irOpciones() {
    conteinerOpciones.classList.add("container-activo");
    conteinerOpciones.classList.remove("container-inactivo");
    conteinerInicial.classList.add("container-inactivo");
}
 //desactiva las opciones y activa el juego
function renderizarJuego(){
    conteinerJuego.classList.add("container-activo");
    conteinerJuego.classList.remove("container-inactivo");
    conteinerOpciones.classList.add("container-inactivo");
    conteinerOpciones.classList.remove("container-activo");
    let board = new Board(current_mode, 1, 2);
    return board;
}

//desactiva el juego y activa la presentacion
function salirJuego(){
    conteinerJuego.classList.add("container-inactivo");
    conteinerJuego.classList.remove("container-activo");
    conteinerInicial.classList.add("container-activo");
    conteinerInicial.classList.remove("container-inactivo");
}

document.querySelector("#btn-ejecutar").addEventListener("click", irOpciones);
document.querySelector("#play-settings-btn").addEventListener("click", renderizarJuego);
document.querySelector("#close-btn").addEventListener("click", salirJuego);


/**
 * Chequea que se hayan elegido las fichas...
 */
function checkSettings() {
    if(player1 == null && player2 == null) {
        showErrorMsg("Selecciona una casa");
        return false;
    } 
    if(player1 == null || player2 == null) {
        showErrorMsg("Selecciona un oponente");
        return false;
    } 
    return true;   
}





/*------------------- GAME FUNCTIONALITY --------------------*/
const CANVAS = document.querySelector("#game-box-canvas");
const MSG_BOX = document.querySelector("#game-msg-div");

/*-----------------*/ 
let current_player;
let next_player;
let isDragging = false;
let selectedPiece;
let selectedPiece_initialPosition;
let selectedColumn;

const GAME_MODAL = document.querySelector("#game-modal");

/**
 * Setea qué jugador tiene el turno
 */
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

/**
 * Si se está arrastrando una ficha al soltar el mouse,
 * 
 */
function onMouseUp(e) {
    if(!isDragging) return;

    e.preventDefault();
    e.stopPropagation();
    isDragging = false;
    if(selectedPiece != null && selectedColumn != null) {
        if(board.isFull(selectedColumn)) {
            // showMsgInGameBox(, 3000);
            selectedPiece.setPosition(selectedPiece_initialPosition.x, selectedPiece_initialPosition.y);
            showMsgInModalBox("Ni un mago como tú hará entrar otra ficha!", 3000);
        } else {
            board.savePlay(selectedPiece, selectedColumn);
            setTimeout(() => {
                let winner = board.checkWinner(selectedPiece, selectedColumn);
                if(winner == null) {
                    setTurn(); 
                } else {
                    let msg = `<p>Tu magia ha triunfado, <span class="game-box">` + winner + `</span>!</p>`; 
                    showMsgInModalBox(msg, 5000);
                    setTimeout(() => {play(true)}, 5000);
                }}, 1000);        
        }
        board.draw();
    }
    //si la pieza está sobre una columna del tablero, ubicarla en el primer lugar libre...
    //si no, dejarla donde está y permitir que vuelva a seleccionarse

    
    // if(board.saveCurrentPlay(selectedPiece)) {
    //     let winner = board.checkPlay();
    //     if(winner != null) MSG_BOX.innerHTML = "Ganó la casa " + winner + "!";
    // } else {
    //     MSG_BOX.innerHTML = "Error!";
    // }
    
}

/**
 * Cuando la ficha seleccionada es draggueada fuera del canvas, vuelve a mostrarla en la pila
 */
function onMouseOut(e) {
    if(!isDragging) return;
    e.preventDefault();
    e.stopPropagation();
    isDragging = false;
    if(selectedPiece != null) {
        selectedPiece.setPosition(selectedPiece_initialPosition.x, selectedPiece_initialPosition.y);
        board.draw();
        setTimeout(() => {selectedPiece.setHighlight(false); board.draw();}, 500);
    }
}


/**
 * Si al mover el mouse se está draggueando una ficha al mover el mouse, 
 * va renovando su posición
 * Si se está draggueando la ficha sobre una columna del tablero, 
 * se resalta la flecha que está sobre ella
 */
function onMouseMove(e) {
    if(!isDragging) return;

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



/**
 * Si el jugador que tiene el turno selecciona una ficha, la guarda y muestra resaltada
 */
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
                console.log(selectedPiece);
                selectedPiece.setHighlight(false);
                board.draw();
            }
        } else {
            let msg = `<p>Mil hechizos no moverían esa ficha, <span class="game-box">` + current_player + `</span>!</p>`;
            showMsgInModalBox(msg, 2000);
        }
    }

    //Muestra error si el jugador que no tiene el turno intenta mover una ficha...
    if(clickedPiece != null && clickedPiece.getPlayer() != current_player) {
        let span = document.querySelector(".game-box");
        span.classList.add("danger");
        setTimeout( () => {span.classList.remove("danger");}, 1000);
    }
    
}


/*------------------------- Ongoing game settings ----------------------------*/


//Setea los eventos del juego...
function setGameEvents() {
    CANVAS.addEventListener("mousedown",  (e) => {onMouseDown(e);});
    CANVAS.addEventListener("mouseup",  (e) => {onMouseUp(e);});
    CANVAS.addEventListener("mousemove",  (e) => {onMouseMove(e);});
    CANVAS.addEventListener("mouseout",  (e) => {onMouseOut(e);});
    
}

function showTurn() {
    if(MSG_BOX.classList.contains("danger")) MSG_BOX.classList.remove("danger");
    MSG_BOX.innerHTML = `<p>Juega <span class="game-box">` + current_player + `</span> House</p>`;
}

function showMsgInGameBox(msg, time) {
    MSG_BOX.classList.add("danger");
    MSG_BOX.innerHTML = msg;
    setTimeout(() => {showTurn();}, time);
}

function showMsgInModalBox(msg, time) {
    GAME_MODAL.classList.add("active");
    GAME_MODAL.innerHTML = msg;
    setTimeout(() => {
        GAME_MODAL.classList.remove("active");
    }, time);
}





/*------------------------  Onload: Change view -------------------------------*/
function load() {
    setFormBtnsEvents(); 
}

window.onload = load();