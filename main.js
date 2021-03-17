$(document).ready(function(){
  // stampo le proprieta dello studente
  for (var key in studente_1) {
    console.log(key, studente_1[key]);
  }
  for (var i = 0; i < classe.length; i++) {
      console.log(classe[i].nome +' '+ classe[i].cognome);
  }
    click_adj()
});
// studente con proprieta nome, cognome e età.
var studente_1 = {
  'nome': 'Alessandro',
  'cognome': 'Benigni',
  'età': '20',
}

var classe =[
  {
    'nome': 'Weston',
    'cognome': 'McKennie',
    'età': '20',
  },
  {
    'nome': 'Paulo',
    'cognome': 'Dybala',
    'età': '27',
  },
  {
    'nome': 'Cristiano',
    'cognome': 'Ronaldo',
    'età': '36',
  }
];
// aggiungo uno studente
function click_adj() {
  $('#adjuntar').click(function () {
    var nome = $('#nome').val()
    var cognome = $('#cognome').val()
    var età = $('#eta').val()
    var studente ={
      'nome': nome,
      'cognome': cognome,
      'età': età,
    }
    console.log(studente);
    classe.push(studente);
    console.log(classe);
  })
}
