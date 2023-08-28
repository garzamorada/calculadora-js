body = document.querySelector('body');

class calculadora {
    constructor(contenedor) {
        this.contenedor = contenedor
        this.displayContent = ''
        this.display = this.createDisplay()
        this.formula = ''
        for (let i = 0; i < 10; i++) {
            let codigo1 = 'this.boton_' + i + ' = document.createElement("button");';
            eval(codigo1)
            let codigo2 = 'this.boton_' + i + '.setAttribute("class","azul boton_' + i + '");'
            eval(codigo2)
            let codigo3 = 'this.boton_' + i + '.setAttribute("type","button");'
            eval(codigo3)
            let evento = this.escribeNumero(i);
            let codigo4 = 'this.boton_' + i + '.addEventListener("click",evento);';
            eval(codigo4)
            let codigo5 = 'this.boton_' + i + '.innerText = "' + i + '";'
            eval(codigo5)
        }
        let evento = '';
        this.botonSuma = document.createElement('button');
        this.botonSuma.innerText = '+';
        this.botonSuma.setAttribute("class", "verde suma");
        this.botonSuma.setAttribute("type", "button");
        evento = this.insertaSimbol('+');
        this.botonSuma.addEventListener('click', evento);

        this.botonResta = document.createElement('button');
        this.botonResta.innerText = '+';
        this.botonResta.setAttribute("class", "verde resta");
        this.botonResta.setAttribute("type", "button");
        //this.botonResta.setAttribute("onclick", "this.insertaSimbol('-')");

        this.botonMultip = document.createElement('button');
        this.botonMultip.innerText = 'x';
        this.botonMultip.setAttribute("class", "verde multip");
        this.botonMultip.setAttribute("type", "button");
        //this.botonMultip.setAttribute("onclick", "this.insertaSimbol('x')");

        this.botonDivis = document.createElement('button');
        this.botonDivis.innerText = '/';
        this.botonDivis.setAttribute("class", "verde divis");
        this.botonDivis.setAttribute("type", "button");
        //this.botonDivis.setAttribute("onclick", "this.insertaSimbol('/')");

        this.botonAbreParentis = document.createElement('button');
        this.botonAbreParentis.innerText = '(';
        this.botonAbreParentis.setAttribute("class", "violeta abre");
        this.botonAbreParentis.setAttribute("type", "button");
        //this.botonAbreParentis.setAttribute("onclick", "this.insertaParentesis('(')");

        this.botonCierraParantesis = document.createElement('button');
        this.botonCierraParantesis.innerText = ')';
        this.botonCierraParantesis.setAttribute("class", "violeta cierra");
        this.botonCierraParantesis.setAttribute("type", "button");
        //this.botonCierraParantesis.setAttribute("onclick", "this.insertaParentesis(')')");

        this.botonComa = document.createElement('button');
        this.botonComa.innerText = ',';
        this.botonComa.setAttribute("class", "azul coma");
        this.botonComa.setAttribute("type", "button");
        //this.botonComa.setAttribute("onclick", "this.insertaParentesis(',')");

        this.botonResultado = document.createElement('button');
        this.botonResultado.innerText = '=';
        this.botonResultado.setAttribute("class", "azul igual");
        this.botonResultado.setAttribute("type", "button");
        //this.botonResultado.setAttribute("onclick", "this.muestraResultado()");

        this.botonReset = document.createElement('button');
        this.botonReset.innerText = 'c';
        this.botonReset.setAttribute("class", "rojo reset");
        this.botonReset.setAttribute("type", "button");
        //this.botonReset.setAttribute("onclick", "this.reset()");

        this.botonDelete = document.createElement('button');
        this.botonDelete.innerText = '⌫';
        this.botonDelete.setAttribute("class", "rojo delete");
        this.botonDelete.setAttribute("type", "button");
        //this.botonDelete.setAttribute("onclick", "this.delete()");

        this.contenedor.appendChild(this.createCaja());
    }

    escribeNumero(num) {
        this.displayContent += num
        console.log(this.displayContent)
    }

    insertaSimbol(simb) {
        this.displayContent += simb
        console.log(this.displayContent)
    }
    insertaParentesis(simb) {
        this.displayContent += simb
        console.log(this.displayContent)
    }

    resetea() {
        this.displayContent = ''
        console.log(this.displayContent)
    }

    borra() {}

    muestraResultado() {

    }

    createCaja() {
        var principal = document.createElement('div')
        principal.setAttribute('id', 'calculadora');
        principal.appendChild(this.display)
        principal.appendChild(this.botonAbreParentis);
        principal.appendChild(this.botonCierraParantesis);
        principal.appendChild(this.botonReset);
        principal.appendChild(this.botonDelete);
        principal.appendChild(this.botonSuma);
        principal.appendChild(this.botonResta);
        principal.appendChild(this.botonMultip);
        principal.appendChild(this.botonDivis);
        for (let i = 0; i < 10; i++) {
            let codigo = 'principal.appendChild(this.boton_' + i + ');'
            eval(codigo)
        }
        principal.appendChild(this.botonComa);
        principal.appendChild(this.botonResultado);
        return principal;
    }

    createDisplay() {
        var display = document.createElement('div')
        display.setAttribute('id', 'display')
        return display
    }
}
calcul = new calculadora(body);