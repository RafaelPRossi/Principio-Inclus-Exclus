//programa para calcular a cardinalidade de 2 ou 3 conjuntos

//variavel para a linha de resultados da tabela
var linha = document.getElementById("resultado");

//função para calcular a cardinalidade de 2 conjuntos
function calcular2(){
    //variáveis
    var A = parseInt(document.getElementById("A2").value);
    var B =  parseInt(document.getElementById("B2").value);
    var AeB =  parseInt(document.getElementById("AeB2").value);

    //inclusão-exclusão
    var AouB = A + B - AeB;
    //cria uma coluna para mostrar o resultado
    //substituir os resultados
    if(document.getElementById("cardinalidade")==null){
      var resultado = linha.insertCell(0);
    }else{
      var resultado= linha.deleteCell(0);
      var resultado = linha.insertCell(0);
    }

    //define atributos para a coluna de resultados
    resultado.colSpan = "2";
    resultado.id="cardinalidade";

    //condições para aparecer o resultado
    if(isNaN(AouB)==true){
      resultado.innerHTML = '<div id="sel">Resultado: Complete todos os campos corretamente.</div>';
    }else if(AouB<0){
      resultado.innerHTML = '<div id="sel">Resultado: Complete todos os campos corretamente.</div>';
    }else{
      resultado.innerHTML = '<div id="sel">Resultado: '+AouB+'</div>';
    }
} 

//função para calcular a cardinalidade de 3 conjuntos
function calcular3(){
    var A = parseInt(document.getElementById("A3").value);
    var B =  parseInt(document.getElementById("B3").value);
    var C =  parseInt(document.getElementById("C3").value);
    var AeB =  parseInt(document.getElementById("AeB3").value);
    var AeC =  parseInt(document.getElementById("AeC3").value);
    var BeC =  parseInt(document.getElementById("BeC3").value);
    var AeBeC =  parseInt(document.getElementById("AeBeC3").value);
    var AouBouC = A + B + C - AeB - AeC - BeC + AeBeC;

    var linha = document.getElementById("resultado")

    if(document.getElementById("cardinalidade")==null){
      var resultado = linha.insertCell(0);
    }else{
      var resultado= linha.deleteCell(0);
      var resultado = linha.insertCell(0);
    }

    resultado.colSpan = "2";
    resultado.id="cardinalidade";
    if(isNaN(AouBouC)==true){
      resultado.innerHTML = '<div id="sel">Resultado: Complete todos os campos corretamente.</div>';
    }else if(AouBouC<0){
      resultado.innerHTML = '<div id="sel">Resultado: Complete todos os campos corretamente.</div>';
    }else{
      resultado.innerHTML = '<div id="sel">Resultado: '+AouBouC+'</div>';
    }
}

//função para selecionar 2 ou 3 conjuntos
function selecionar(){
  //variáveis que englobam todos os elementos por meio da classe
  var elementosDois = document.getElementsByClassName("dois");
  var elementosTres = document.getElementsByClassName("tres");
  
  //se selecionou a opção 2 a opção 3 sera desabilitada
  if (document.getElementById('opcao2').checked == true) {
    //habilita a opção 2
    for(var i = 0; i < elementosDois.length; i++) {
      elementosDois[i].disabled = false;
    }
  
    //desabilita a opção 3
    for(var i = 0; i < elementosTres.length; i++) {
      elementosTres[i].disabled = true;
    }
  }

  //se selecionou a opção 3 a opção 2 sera desabilitada 
  if (document.getElementById('opcao3').checked == true) {
    //habilita a opção 3
    for(var i = 0; i < elementosTres.length; i++) {
      elementosTres[i].disabled = false;
    }
    
    //desabilita a opção 2
    for(var i = 0; i < elementosDois.length; i++) {
      elementosDois[i].disabled = true;
    }
  }
}