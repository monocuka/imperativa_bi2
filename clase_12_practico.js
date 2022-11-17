const alicia = [10, 80, 75];
const bob = [90, 20, 25];

let concurso = {
    etapas :"",
    ganador :"",
    encontrarGanador : function(a, b){
        let puntosPrimerParticipante = 0
        let puntosSegundoParticipante = 0

        for(let i = 0; i < a.length; i++ ){
            if(a[i]>b[i]){
                puntosPrimerParticipante += 1
                this.etapas = "Punto para el primer participante"
                console.log(this.etapas);
            }
            else if(a[i]<b[i]){
                puntosSegundoParticipante += 1
                this.etapas = "Punto para el Segundo Participante"
                console.log(this.etapas);
            }
            else{
                this.etapas = "Etapa sin Puntos"
                console.log(this.etapas);
            }
    }
    }
}
concurso.encontrarGanador(alicia, bob)