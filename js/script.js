const textCells = document.querySelectorAll('input');

textCells.forEach((cell) => {
    cell.addEventListener('keyup',(e) => {
        console.log(cell.className);
    });
});