let notasMusicais = [
  {nota: 'C', semitons: 0, intervalo: 'oitava'},
  {nota: 'C#', semitons: 1, intervalo: 'segunda menor'},
  {nota: 'D', semitons: 2, intervalo: 'segunda maior'},
  {nota: 'D#', semitons: 3, intervalo: 'terça menor'},
  {nota: 'E', semitons: 4, intervalo: 'terça maior'},
  {nota: 'F', semitons: 5, intervalo: 'quarta justa'},
  {nota: 'F#', semitons: 6, intervalo: 'quarta aumentada/quinta diminuta'},
  {nota: 'G', semitons: 7, intervalo: 'quinta justa'},
  {nota: 'G#', semitons: 8, intervalo: 'quinta aumentada/sexta menor'},
  {nota: 'A', semitons: 9, intervalo: 'sexta maior'},
  {nota: 'A#', semitons: 10, intervalo: 'sétima menor'},
  {nota: 'B', semitons: 11, intervalo: 'sétima maior'}
];


let inputSelecTonalidade = document.querySelector('#escolhaTonalidade'),
    inputPrimeiraNota = document.querySelector('#selectSegundaNota'),

    notaTonica = document.querySelector('#tonica'),
    notaEscolhida = document.querySelector('#notaEscolhida'),
    nomencIntervalo = document.querySelector('#classificacaoIntervalo'),
    distanciaNotas = document.querySelector('#distanciaNotas');



inputSelecTonalidade.addEventListener('change', function(e){
  alteraTonica(e.target.value);
  notaTonica.innerHTML = e.target.value;
  identificaIntervalos(notaEscolhida.innerHTML);
})

inputPrimeiraNota.addEventListener('change', function(e){
  notaEscolhida.innerHTML = e.target.value;
  identificaIntervalos(e.target.value);
})

function encontraIndice(nota){
  for(let cont = 0; cont < notasMusicais.length; cont++){
    if(notasMusicais[cont].nota === nota){
      return cont;
    }
  }

  return null;
}

function alteraTonica(novaTonica){
  let novasNotas, i, j, indiceNovaTonica;

  novasNotas = JSON.parse(JSON.stringify(notasMusicais));
  j = 0;

  indiceNovaTonica = encontraIndice(novaTonica);

  for(i = indiceNovaTonica; i < notasMusicais.length; i++){
    novasNotas[j].nota = notasMusicais[i].nota;
    j++;
  }

  for(i = 0; i < indiceNovaTonica; i++){
    novasNotas[j].nota = notasMusicais[i].nota;
    j++;
  }

  notasMusicais = JSON.parse(JSON.stringify(novasNotas));
}


function identificaIntervalos(nota){
  notaTonica.innerHTML = notasMusicais[0].nota;
  notaEscolhida.innerHTML = nota;
  distanciaNotas.innerHTML = (notasMusicais[encontraIndice(nota)].semitons - notasMusicais[0].semitons)/2;
  nomencIntervalo.innerHTML = notasMusicais[encontraIndice(nota)].intervalo;
}
