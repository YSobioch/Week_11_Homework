let tableData = document.querySelectorAll("td");
let rowOne = document.querySelectorAll(".row1 td");
let rowTwo = document.querySelectorAll(".row2 td");
let rowThree = document.querySelectorAll(".row3 td");
let columnOne = document.querySelectorAll(".column1");
let columnTwo = document.querySelectorAll(".column2");
let columnThree = document.querySelectorAll(".column3");
let diagonalOne = document.querySelectorAll(".diagonal1");
let diagonalTwo = document.querySelectorAll(".diagonal2");
let reset = document.getElementById("clearBoard");
let paragraph = document.getElementById("paragraph");

reset.addEventListener("click", () => {
    for(i = 0; i < tableData.length; i++){
        tableData[i].innerText = '';
        paragraph.innerHTML = "<b>X</b> Goes first!"
        document.getElementById('win').style.visibility = "hidden" 
        turn = 1;
    }
});

function getBoardState(arr){
    let contentArray = [];
    for(i = 0; i < arr.length; i++){

        contentArray.push(arr[i].innerText);
    }

    return contentArray;
}

function allSame(arr, x){
    if(arr[0] !== x) {
        return false;
    } else {first = arr[0]}
    let same = true;
    for(i = 1; i < arr.length; i++){
        if(arr[i] !== first){
            return false;
        }
    }
    return same;
}

function isWinner(element){
    if(allSame(getBoardState(rowOne), element)){
        return rowOne;
    } else if(allSame(getBoardState(rowTwo), element)){
        return rowTwo;
    } else if(allSame(getBoardState(rowThree), element)){
        return rowThree;
    } else if(allSame(getBoardState(columnOne), element)){
        return columnOne
    } else if(allSame(getBoardState(columnTwo), element)){
        return columnTwo
    } else if(allSame(getBoardState(columnThree), element)){
        return columnThree
    } else if(allSame(getBoardState(diagonalOne), element)){
        return diagonalOne
    } else if(allSame(getBoardState(diagonalTwo), element)){
        return diagonalTwo
    } else {
        return false;
    }
}

let turn = 1;
for(let i = 0; i < tableData.length; i++){
    tableData[i].addEventListener('click', () => {
        if(turn === 1){
            if(!tableData[i].innerText){
                tableData[i].innerText = 'X';

                paragraph.innerHTML = "It's O's Turn"
                turn = 2;
            }
            winArray = isWinner('X');
            if(winArray){
                document.getElementById('win').style.visibility = "visible";         
            }
        }
        
        if(turn === 2){
            if(!tableData[i].innerText){
                tableData[i].innerText = 'O';
                    
                paragraph.innerHTML = "It's X's Turn"
                turn = 1;
            }
            winArray = isWinner('O');
            if(winArray){
                document.getElementById('win').innerHTML = "O Wins!"
                document.getElementById('win').style.visibility = "visible"            
            }
        }
    })
}