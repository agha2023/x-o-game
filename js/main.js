let titel = document.querySelector('.titel')
let square = document.querySelectorAll('.square')
let medo = document.getElementById('medo')
let turn = 'x'
let squares = []
function endGame(num1,num2,num3){
  titel.innerHTML = `${squares[num1]} winner`
  document.getElementById('item'+num1).style.background='#82e382'
  document.getElementById('item'+num2).style.background='#82e382'
  document.getElementById('item'+num3).style.background='#82e382'
  setInterval(function () {titel.innerHTML +='.'
medo.style.display='flex'
} , 1000)
  setTimeout(function(){location.reload()},6000)
}
function winner(){
  for (let i =1 ;i<10 ; i++){
    squares[i] =  document.getElementById('item'+ i).innerHTML
  }
  if(squares[1] == squares[2]&& squares[2]==squares[3] && squares[1] != ''){
    endGame(1,2,3)
  }else if(squares[4] == squares[5]&& squares[5]==squares[6] && squares[6] != ''){
    endGame(4,5,6)
  }else if(squares[7] == squares[8]&& squares[8]==squares[9] && squares[7] != ''){
    endGame(7,8,9)

  }else if(squares[1] == squares[4]&& squares[4]==squares[7] && squares[4] != ''){
    endGame(1,4,7)

  }else if(squares[2] == squares[5]&& squares[5]==squares[8] && squares[8] != ''){
    endGame(2,5,8)

  }else if(squares[3] == squares[6]&& squares[6]==squares[9] && squares[9] != ''){
    endGame(3,6,9)

  }else if(squares[1] == squares[5]&& squares[5]==squares[9] && squares[5] != ''){
    endGame(1,5,9)

  }else if(squares[3] == squares[5]&& squares[5]==squares[7] && squares[7] != ''){
    endGame(3,5,7)
  }
}
function game(id){
  let element = document.getElementById(id)
  let square = document.getElementById(id)
  if(turn === 'x'&& element.innerHTML==''){
    element.innerHTML ='<span class="x">x</span>'
    element.classList.add='ee'
    titel.innerHTML='o'
    turn = 'o'
    
  }else if (turn=== 'o' && element.innerHTML==''){
    element.innerHTML = '<span class="o">o</span>'
    titel.innerHTML='x'
    turn = 'x'
  }
  winner()
}
