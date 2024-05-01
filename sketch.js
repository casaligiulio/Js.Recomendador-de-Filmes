// FANTASIA, GUERRA, DRAMA, TERROR, AVENTURA, FICÇÃO, AÇÃO, ROMANCE, SUSPENSE, ANIMAÇÃO

//TOY STORE 4 (2019) LIVRE - ANIMAÇÃO, DRAMA, FICÇÃO, AVENTURA, AÇÃO
//STAR WARS: UMA NOVA ESPERANÇA (1977) LIVRE - FICÇÃO, FANTASIA, GUERRA, AVENTURA, AÇÃO
//JURASSIC PARK: O PARQUE DOS DINOSSAUROS (1933) LIVRE - FANTASIA, AVENTURA, FICÇÃO, AÇÃO, SUSPENSE
//O REI LEÃO (1994) LIVRE - GUERRA, ANIMAÇÃO, AVENTURA, DRAMA

//INTERSTELLAR (2014) 10 ANOS - FANTASIA, FICÇÃO
//THE WIND RISES (2013) 10 ANOS - ANIMAÇÃO, GUERRA, DRAMA
//PIRATAS DO CARIBE: MALDIÇÃO DO PEROLA NEGRA (2003) 10 ANOS - AVENTURA, AÇÃO
//TITANIC (1977) 12 ANOS - ROMANCE, DRAMA, AVENTURA, AÇÃO
//YOUR NAME (2016) 12 ANOS - ANIMAÇÃO, ROMANCE, FICÇÃO, AVENTURA, DRAMA
//GOOSEBUMPS: MONSTROS E ARREPIOS (2015) - SUSPENSE, ANIMAÇÃO, DRAMA
//JOJO RABBIT (2019) - DRAMA, HUMOR, GUERRA, AÇÃO

//AVATAR: O CAMINHO DA ÁGUA (2022) 14 ANOS - FANTASIA, AVENTURA, FICÇÃO, AÇÃO
//BABY DRIVER (2017) 14 ANOS - AÇÃO, AVENTURA, SUSPENSE, DRAMA
//CAMPO DO MEDO (2019) 16 ANOS SUSPENSE, TERROR, FICÇÃO, DRAMA

var campoIdade;
var campoAnimação;

function setup() {
  createCanvas(600, 400);
  createElement("h1", "Recomendador de Filmes")
  createSpan("Sua idade: ")
  campoIdade = createInput();
  campoAnimação = createCheckbox("Gosta de animação?");
  campoGuerra = createCheckbox("Gosta de guerra?");
  campoDrama = createCheckbox("Gosta de drama?")
  campoFicção = createCheckbox("Gosta de ficção científica?")
  campoSuspense = createCheckbox("Gosta de suspense?")
  campoTerror = createCheckbox("Gosta de terror?")
}

function draw() {
  background(0);
  var idade = campoIdade.value();
  var gostadeAnimação = campoAnimação.checked();
  var gostadeGuerra = campoGuerra.checked();
  var gostadeDrama = campoDrama.checked();
  var gostadeFicção = campoFicção.checked();
  var gostadeSuspense = campoSuspense.checked();
  var gostadeTerror = campoTerror.checked();
  var recomendacao = geraRecomendacao(idade, gostadeAnimação, gostadeGuerra, gostadeDrama, gostadeFicção, gostadeSuspense, gostadeTerror);
  textAlign(CENTER, CENTER);
  fill(250)
  textSize(40)
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade, gostadeAnimação, gostadeGuerra, gostadeDrama, gostadeFicção, gostadeSuspense, gostadeTerror){
if ( idade < 10){
  if (gostadeAnimação && gostadeGuerra){
      return "O Rei Leão"
  }else{
    if (gostadeAnimação){
      return "Toy Store 4"
    }else{
      if (gostadeGuerra){
        return "Star Wars"
      }else{
      return "Jurassic Park"
      }
    }
  }
}

if ( idade >= 10 && idade < 14 ){
  if (gostadeDrama && gostadeGuerra && gostadeAnimação){
      return "The Wind Rises"
   }else{
      if (gostadeAnimação){
        return "Your Name"
    }else{
          if( gostadeGuerra && gostadeDrama|| gostadeGuerra){
           return "Jojo Rabbits"
            }else{
    if (gostadeDrama){
     return "Titanic"
    }else{
      if (gostadeFicção){
    return "Interstellar"
      }else{
        if(gostadeTerror || gostadeSuspense || gostadeTerror && gostadeSuspense){
          return "Goosebumps"
        }else{
        return "Olhos"
            }
          }
        }
      }
    }
  }
}
  
if ( idade >= 14 ){  
    if(gostadeTerror){
      return "Campo do medo"
      }else{
        if(gostadeSuspense){
        return "Baby Driver"
        }else{
          if(gostadeFicção){
          return "Avatar: O Caminho da Água" 
           }else{
             return "Mágico"
        }
      }
    }
  }
}