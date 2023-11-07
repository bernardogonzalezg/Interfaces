class Spot extends Figure {

    constructor(x, y, context, width, height) {
        super(x, y, context);
        this.width = width;
        this.height = height;
        this.piece = null;
        this.free = true;
    }

    isFree() {return this.free;}

    setIsFree(free) { this.free = free;}

    setPiece(piece) { this.piece = piece;}
    
    getPiece() { return this.piece;}

    setWidth(width) {this.width = width;}

    getWidth() {return this.width;}

    setHeight(height) {this.height = height;}

    getHeight() {return this.height;}

    draw() {
        if(this.highlight === true) {
            this.cxt.strokeStyle = this.highlightStyle;
            this.cxt.lineWidth = 5;
        }
        this.cxt.fillStyle = "rgba(80, 76, 76, 0.8)";
        this.cxt.fillRect(this.x, this.y, this.width, this.height);
    }

    //verifica si ficha cae dentro de uan columna del tablero 
    isPointInside(x, y) {
        return (x > this.x && x < this.x + this.width && y > this.y && y < this.y + this.height);
    }


}