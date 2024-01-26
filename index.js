function superbowlWin(array){
const winningObject = array.find (object => object.result === "W")
  if (winningObject) {
    return winningObject.year;
  } else {
    return undefined;
  }
}
