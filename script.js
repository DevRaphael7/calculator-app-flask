class UiInterface{

    showSpinner;
    btnTitle;
     
    constructor(spinnerState) { 
        this.showSpinner = spinnerState;
        this.btnTitle = document.getElementById("btn-title");
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
}

//Classe correspondente a interface do usuário.
const ui = new UiInterface(true);

ui.openSpinner((value) => {
    ui.showTitleBtn(!value);
}) //Vai ocultar o spinner;

ui.setHtmlTitleBtn("Calcular")