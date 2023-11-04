class Token{
    //constructor de la ficha.
    constructor(x, y, param, player){
        this.x = x;
        this.y = y;
        this.radio = 25;
        this.player = player;
        this.status = '';
        this.highlighted = false;
        this.image = new Image(50, 50);
        this.getTokekImage(param);
    }

    //genera la respectiva ficha segun el jugador que corresponda.
    getTokekImage(param) {
        //console.log(this.context);
        console.log(param);
        if(param === 'p1')
            this.image.src = 'images/4enLinea/logoBatman.png'; //ficha jugador 1. 
        else if (param === 'p2')
            this.image.src = 'tp3/images/4enLinea/logoSuperman.png' //ficha jugador 2.
        else if (param === 'empty')
            this.image.src = 'tp3/images/4enLinea/img3.jpg' //espacio donde va la ficha a insertar en el tablero.
        }
    //retorna el jugador actual.
    getPlayer(){
        if (this.player === 0)
            return this.player;
        else 
            return this.player.getPlayerNumber();
    }
    
    //retorna el nombre del jugador actual.
    getName() {
        return this.player.getName();
    }
    //retorna el estado del jugador actual.
    getStatus() {
        return this.status;
    }

    setContext(context){
        this.context = context;
    }
    setHighlighted(value) {
        this.highlighted = value;
    }
    //setea la posicion en x.
    setX(x) {
        this.x = x;
    }
    //setea la posicion en y.
    setY(y) {
        this.y = y;
    }

    //setea el status
    setStatus(status) {
        this.status = status;
    }
    //Devuelve si se hizo click dentro de la ficha
    isClicked(x, y) {
        let xLayer = x - this.x;
        let yLayer = y - this.y;
        return Math.sqrt(xLayer*xLayer + yLayer*yLayer) < this.radio;
    }

    draw(){
        //Dibuja la ficha
        this.context.beginPath();
        this.context.arc(this.x, this.y, this.radio, 0, Math.PI*2);
        this.context.fillStyle = '#ff9a00';
        this.context.fill();
        if (this.highlighted === true) {
            this.context.strokeStyle = this.highlightedStyle;
            this.context.lineWidth = 5;
            this.context.stroke();
        }
        //Dibuja la ficha en la posicion indicada
        this.image.onload = () => {
            const img = document.getElementById("scream");
            this.context.drawImage(img, this.x - this.radio, this.y - this.radio);
            this.context.closePath();
        };
    }
}

	