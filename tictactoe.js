let turn = 1, boxes = document.querySelectorAll(".insideBox"), counter = 0;
document.querySelector(".overAllBox").addEventListener("click",item =>{
  let x = event.target;
  if (x.innerHTML!="X"&&x.innerHTML!="O"){
    x.innerHTML = (turn==1)? "X" : "O";
    x.style.color = (turn==1)? "red" : "blue";
    turn = (turn==1)? 2 : 1;
    checkIfWinner(x.innerHTML);
    counter++;
    if (counter==9){
      alert("Both of you are losers");
      location.reload();
    }
    document.querySelector(".who").textContent = (turn==2)? "2" : "1";
  }
})
function checkIfWinner(selections){
  if (boxes[0].innerHTML==selections&&boxes[1].innerHTML==selections&&boxes[2].innerHTML==selections){
    alert(selections+" is the winner");
    location.reload();
  }else if (boxes[3].innerHTML==selections&&boxes[4].innerHTML==selections&&boxes[5].innerHTML==selections) {
    alert(selections+" is the winner");
    location.reload();
  }else if (boxes[6].innerHTML==selections&&boxes[7].innerHTML==selections&&boxes[8].innerHTML==selections) {
    alert(selections+" is the winner");
    location.reload();
  }else if (boxes[0].innerHTML==selections&&boxes[3].innerHTML==selections&&boxes[6].innerHTML==selections) {
    alert(selections+" is the winner");
    location.reload();
  }else if (boxes[1].innerHTML==selections&&boxes[4].innerHTML==selections&&boxes[7].innerHTML==selections) {
    alert(selections+" is the winner");
    location.reload();
  }else if (boxes[2].innerHTML==selections&&boxes[5].innerHTML==selections&&boxes[8].innerHTML==selections) {
    alert(selections+" is the winner");
    location.reload();
  }else if (boxes[0].innerHTML==selections&&boxes[4].innerHTML==selections&&boxes[8].innerHTML==selections) {
    alert(selections+" is the winner");
    location.reload();
  }else if (boxes[2].innerHTML==selections&&boxes[4].innerHTML==selections&&boxes[6].innerHTML==selections) {
    alert(selections+" is the winner");
    location.reload();
  }
}
