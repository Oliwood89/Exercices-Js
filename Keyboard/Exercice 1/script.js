let handleKey = function (event) {
    console.log(event.code);
    expr.style["background-color"]="red";

    switch (event.code) {
        case 'Numpad0':
                expr.style["background-color"]="black";
            break;
        case 'Numpad1':
                expr.style["background-color"]="blue";
            break;
        case 'Numpad2':
            expr.style["background-color"]="red";
        break;
        case 'Numpad3':
            expr.style["background-color"]="yellow";
        break;
        case 'Numpad4':
            expr.style["background-color"]="grey";
        break;
        case 'Numpad5':
            expr.style["background-color"]="green";
        break;
        case 'Numpad6':
            expr.style["background-color"]="white";
        break;
        case 'Numpad7':
            expr.style["background-color"]="lightblue";
        break;
        case 'Numpad8':
            expr.style["background-color"]="darkred";
        break;
        case 'Numpad9':
            expr.style["background-color"]="lightgreen";
        break;
    }
    /*switch (key) {
        case value:
            
            break;
    
        default:
            break;
    }*/
};

let expr = document.getElementById("character");

switch (expr) {
    case '0' :
        expr.style["background-color"]="black";
}

window.addEventListener('keypress', handleKey);

//KeyboardEvent {isTrusted: true, key: "0", code: "Numpad0", location: 3, ctrlKey: false, …}