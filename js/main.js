body = document.querySelector('body');

class FuncionesCalculadora {
    constructor() {
        this.displayContent = '';
        this.formula = '';
        this.resultado = 0;
    }

    escribeNumero(num) {
        this.displayContent += num
        botonera.display.innerText = this.displayContent;
    }

    insertaSimbol(simb) {
        this.displayContent += simb
        botonera.display.innerText = this.displayContent;
    }
    insertaParentesis(simb) {
        this.displayContent += simb
        botonera.display.innerText = this.displayContent;
    }

    reset() {
        this.displayContent = ''
        botonera.display.innerText = this.displayContent;
    }

    delete() {}

    muestraResultado() {
        let texto = String(this.displayContent);
        this.formula = texto.replaceAll(',', '.').replaceAll('x', '*');
        try {
            this.resultado = eval(this.formula)
        }
        catch (err) {
            this.resultado = err.message;
        }
        this.displayContent = this.resultado
        botonera.display.innerText = this.displayContent;

    }
}

class BotoneraCalculadora {
    constructor(contenedor) {
        this.contenedor = contenedor
        this.display = this.createDisplay()
        let evento = ''
        for (let i = 0; i < 10; i++) {
            let codigo = 'this.boton_' + i + ' = this.createButton("azul num_' + i + '",' + i + ',"funciones.escribeNumero(' + i + ')");';
            eval(codigo)
        }
        this.botonSuma = this.createButton("verde suma", '+', "funciones.insertaSimbol('+')");
        this.botonResta = this.createButton("verde resta", '-', "funciones.insertaSimbol('-')");
        this.botonMultip = this.createButton("verde multip", 'x', "funciones.insertaSimbol('x')");
        this.botonDivis = this.createButton("verde divis", '/', "funciones.insertaSimbol('/')");
        this.botonAbreParentesis = this.createButton("violeta abre", '(', "funciones.insertaParentesis('(')");
        this.botonCierraParentesis = this.createButton("violeta cierra", ')', "funciones.insertaParentesis(')')");
        this.botonComa = this.createButton("azul coma", ',', "funciones.escribeNumero(',')");
        this.botonResultado = this.createButton("verde igual", '=', "funciones.muestraResultado()");
        this.botonReset = this.createButton("rojo reset", 'c', "funciones.reset()");
        this.botonDelete = this.createButton("rojo delete", '⌫', "funciones.delete()");

        this.contenedor.appendChild(this.createCaja());
    }

    createButton(clase, simbolo, funcion) {
        let boton = document.createElement('button');
        boton.innerText = simbolo;
        boton.setAttribute("class", clase);
        boton.setAttribute("type", "button");
        boton.setAttribute('onclick', funcion);
        return boton
    }

    createCaja() {
        var principal = document.createElement('div')
        principal.setAttribute('id', 'calculadora');
        principal.appendChild(this.display)
        principal.appendChild(this.botonAbreParentesis);
        principal.appendChild(this.botonCierraParentesis);
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

funciones = new FuncionesCalculadora();
botonera = new BotoneraCalculadora(body);
