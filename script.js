let board = 8;
let gap = ' ';
let string = '';

for (let n = 1; n <= (board*board); n++){
    string += gap;
    if(n % board == 0){
        board += '\n';
        if(n % board == 1){
            gap = (gap == ' ')? '#': ' ';
        }
    }
    else{
        gap = (gap == ' ')? '#': ' ';
    }
}

console.log(string);