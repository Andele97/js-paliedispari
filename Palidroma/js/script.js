const el = document.querySelector.bind(document);

const btn = el('button');
const output = el('.output');

btn.addEventListener('click', function(){
  
  const word = el('[name="word"]').value;

  if (word === ''){
    output.innerText = `Campo vuoto`
  }else{
    const check = checkWord(word)
    if(check){
      output.innerText = `La parola é palindroma`
    }else{
      output.innerText = `La parola non é palindroma`
    }
  }
});

function checkWord(word1){

  let terW = '';

  for (let i = word1.length - 1; i >= 0; i--){
    terW += word1[i]
  }

  if(terW === word1) return true;

  return false;
}