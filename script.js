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

//Classe correspondente a interface do usuário.
const ui = new UiInterface(true);

ui.openSpinner((value) => {
    ui.showTitleBtn(!value);
}) //Vai ocultar o spinner;

ui.setHtmlTitleBtn("Calcular")