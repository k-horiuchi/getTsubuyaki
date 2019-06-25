const test = document.createElement('a');
test.href = 'data:text/plain,' + encodeURIComponent(
    document.querySelector("#permalink-overlay-dialog").innerHTML.toString());
test.download = 'test.txt';
test.style.display = 'none';
document.body.appendChild(test);
test.click();