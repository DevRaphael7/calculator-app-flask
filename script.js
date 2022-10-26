class UiInterface {

    showSpinner;
    btnTitle;
    modal;
     
    constructor(spinnerState) {
        this.showSpinner = spinnerState
        this.btnTitle = document.getElementById("btn-title")
        this.modal = document.querySelector("[modal]")

        //Adicionar evento para overlay
        document.getElementById('overlay').addEventListener('click', (e) => {
            this.showModal()
        })
    }

    openSpinner(callback) {
        this.showSpinner = !this.showSpinner;

        if(this.showSpinner){
            document.getElementById("spinner").style.display = "block";
        } else {
            document.getElementById("spinner").style.display = "none";
        }

        callback(this.showSpinner);
    }

    setHtmlTitleBtn(html){
        this.btnTitle.innerHTML = html
    }

    showTitleBtn(show) {
        if(show) this.btnTitle.style.display = "block";
        else this.btnTitle.style.display = "none";
    }

    showModal(){
        if(this.modal.classList.contains("show")) {
            document.querySelector("[overlay]").classList.remove("show")
            this.modal.classList.remove("show")
        } else {
            this.modal.classList.add("show")
            document.querySelector("[overlay]").classList.add("show")
        }
    }
}

class ApiRest {

    static async post(url, body){
        try {
            const response = await fetch(url, { 
                body: JSON.stringify(body), 
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const dados = await response.json()
            return dados
        } catch(ex){
            console.log(ex)
            return null
        }
    }

}

//Classe correspondente a interface do usuário.
const ui = new UiInterface(true);

ui.openSpinner((value) => {
    ui.showTitleBtn(!value);
}) //Vai ocultar o spinner;

ui.setHtmlTitleBtn("Calcular")

async function calcular() {

    const number1 = parseFloat(document.querySelector('[num1]').value)
    const number2 = parseFloat(document.querySelector("[num2]").value)

    ApiRest.post('http://127.0.0.1:8002/calculator', {
        num1: number1,
        num2: number2,
        operation: "+"
    }).then(response => {
        ui.openSpinner((value) => {
            ui.showTitleBtn(!value);
            document.querySelector("[result]").innerHTML = `<p>${response.result}</p>`
        })
    })
}