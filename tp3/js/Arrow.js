class Arrow extends Figure {

    constructor (fromx, fromy, cxt, tox, toy, arrowWidth, color) {
        super(fromx, fromy, cxt);
        this.tox = tox;
        this.toy = toy;
        this.color = color;
        this.arrowWidth = arrowWidth;
    }

    //dibuja la flecha
    draw(){
        //Variables que se utilizarán al crear la flecha
        let headlen = 10;
        let angle = Math.atan2(this.toy-this.y,this.tox-this.x);
     
        this.cxt.save();
        if(this.highlight === true) {
            this.cxt.strokeStyle = this.highlightStyle;
        } else {
            this.cxt.strokeStyle = this.color;
        }

        //trazo inicial de la flecha desde el cuadrado inicial hasta el cuadrado final
        //y dibujando el trazo
        this.cxt.beginPath();
        this.cxt.moveTo(this.x, this.y);
        this.cxt.lineTo(this.tox, this.toy);
        this.cxt.lineWidth = this.arrowWidth;
        this.cxt.stroke();
     
        //comenzando un nuevo trazo desde la punta de la flecha hasta uno de los lados del punto
        this.cxt.beginPath();
        this.cxt.moveTo(this.tox, this.toy);
        this.cxt.lineTo(this.tox-headlen*Math.cos(angle-Math.PI/7),
                        this.toy-headlen*Math.sin(angle-Math.PI/7));
     
        //trazo desde el punto lateral de la flecha hasta el otro punto lateral
        this.cxt.lineTo(this.tox-headlen*Math.cos(angle+Math.PI/7),
                        this.toy-headlen*Math.sin(angle+Math.PI/7));
     
        //trazo desde el punto lateral hasta la punta de la flecha, y luego
        //nuevamente al punto del lado opuesto
        this.cxt.lineTo(this.tox, this.toy);
        this.cxt.lineTo(this.tox-headlen*Math.cos(angle-Math.PI/7),
                        this.toy-headlen*Math.sin(angle-Math.PI/7));
     
        //dibuja los trazos creados arriba
        this.cxt.stroke();
        this.cxt.restore();
    }
}