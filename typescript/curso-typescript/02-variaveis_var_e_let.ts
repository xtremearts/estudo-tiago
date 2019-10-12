function showWithVar() {
    var text = 'Luiz Carlos';
    if (true){
        var text = 'texto';
    }
    console.log(text);
}

function showWithLet() {
    let text = 'Luiz Carlos';
    if (true){
        let text = 'texto';
    }
    console.log(text);
}

showWithLet();