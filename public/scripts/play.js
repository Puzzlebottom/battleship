const generateBoard = () => {
  const getHeadingsElement = () => {
    const $row = $('<tr></tr>');
    for (let i = 0; i <= 10; i++) {
      const $heading = $('<th></th>');
      if (i > 0) $heading.text(i);
      $row.append($heading);
    }
    return $row;
  };

  const getRowElement = (rowLetter) => {
    const $row = $('<tr></tr>');
    const $heading = $(`<th>${rowLetter}</th>`);
    $row.append($heading);

    for (let i = 0; i < 10; i++) {
      $row.append($('<td></td>'));
    }
    return $row;
  };

  const $table = $('<table></table>');
  const rowLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];

  // for (let i = 0; i <= 10; i++) {
  //   const $row = ('<tr></tr>');
  //   for (let j = 0; j <= 10; j++) {
  //     let $element = $('<td></td>');

  //     if (i === 0 || j === 0) {
  //       $element = $('<th></th>');
  //     }
  //   }
  // }

  $table.append(getHeadingsElement());

  for (const letter of rowLetters) {
    $table.append(getRowElement(letter));
  }

  $('.board').append($table);
};








$().ready(() => {
  generateBoard();
});