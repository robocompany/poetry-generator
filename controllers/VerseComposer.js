function randomWordWithType(words, type){
  let wordsOfType = words.filter((obj)=> obj.type == type);
  let index = Math.floor(Math.random()*wordsOfType.length);
  return wordsOfType[index].content;
}

function pushTimes(array, word, times){
  for(var i = 0; i < times; i++){
    array.push(word);
  }
}

let firstSchema = ['9#_Papi','1@_adj','1@_who','1@_verb','1@_verb','1@_what','1@_how','1@_where','1@_when'];

function verse(words){
  let newVerse = [];

  firstSchema.forEach((elm)=>{
    let times = parseInt(elm[0]);
    let type = elm[1];
    let rime = elm[2];
    let cont = elm.slice(3);

    if(type === '@'){
      let wordToAdd = randomWordWithType(words, cont);
      for(var i = 0; i < times; i++ ){
        newVerse.push(wordToAdd);
      }
    }else{
      for(var i = 0; i < times; i++ ){
        newVerse.push(cont);
      }
    }
  })

  return newVerse.join(' ');
}

module.exports = verse;