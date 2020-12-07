function chessBoard() {
  var tableBoard = document.createElement('table'),
    row09 = ['', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', ''],
    row8 = ['8', '&#9820;', '&#9822;', '&#9821;', '&#9819;', '&#9818;', '&#9821;', '&#9822;', '&#9820;', '8'],
    row7 = ['7', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '&#9823;', '7'],
    row6 = ['6', '', '', '', '', '', '', '', '', '6'],
    row5 = ['5', '', '', '', '', '', '', '', '', '5'],
    row4 = ['4', '', '', '', '', '', '', '', '', '4'],
    row3 = ['3', '', '', '', '', '', '', '', '', '3'],
    row2 = ['2', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '&#9817;', '2'],
    row1 = ['1', '&#9814;', '&#9816;', '&#9815;', '&#9813;', '&#9812;', '&#9815;', '&#9816;', '&#9814;', '1'];

  for (var i = 0; i < 10; i++) {
    var newTr = document.createElement('tr');
    tableBoard.append(newTr);

    for (var j = 0; j < 10; j++) {
      var newTd = document.createElement('td');
      newTr.append(newTd);

      switch (i) {
        case 0:
          newTd.innerText = row09[j];
          break;
        case 1:
          newTd.innerHTML = row8[j];
          break;
        case 2:
          newTd.innerHTML = row7[j];
          break;
        case 3:
          newTd.innerHTML = row6[j];
          break;
        case 4:
          newTd.innerHTML = row5[j];
          break;
        case 5:
          newTd.innerHTML = row4[j];
          break;
        case 6:
          newTd.innerHTML = row3[j];
          break;
        case 7:
          newTd.innerHTML = row2[j];
          break;
        case 8:
          newTd.innerHTML = row1[j];
          break;
        case 9:
          newTd.innerText = row09[j];
          break;
      }
    }
  }
  document.body.append(tableBoard);
}
chessBoard();