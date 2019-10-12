function showWithVar() {
    var text = 'Luiz Carlos';
    if (true) {
        var text = 'texto';
    }
    console.log(text);
}
function showWithLet() {
    var text = 'Luiz Carlos';
    if (true) {
        var text_1 = 'texto';
    }
    console.log(text);
}
showWithLet();
