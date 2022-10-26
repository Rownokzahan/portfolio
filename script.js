function changingWords(){
  const text =['Developer.','Fast-learner.','Phpist.'];
  for(let j=0;j<text.length;j++)  {
    const txt = text[j];
    task(j,txt);
  }
   
  function task(i,txt) {
   setTimeout(function() {
    for (let i=0; i<txt.length; i++) {
      document.getElementById('words').innerText='';
      print(i,txt);
    }
   }, 3000 * i);
  }

  function print(i,txt) {
    setTimeout(function() {
    const element = txt.charAt(i);
    document.getElementById('words').innerText+=element;
    }, 200 * i);
  }
}

changingWords(); // change words for the first time
setInterval(() => {
  changingWords();
}, 8000); //change words in every 8 seconds


document.getElementById('tell').addEventListener('click',function(){
  display('tell','tell-detail');
});

document.getElementById('mail').addEventListener('click',function(){
  display('mail','mail-detail');
});
function display(id,idDetail){
  document.getElementById(id).style.display='none';
  document.getElementById(idDetail).style.display='block';
}

