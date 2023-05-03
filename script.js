let fields = [];
let currentShape = 'Cross';

function fillShape(id) {
    if (!fields[id]) {
        if (currentShape == 'cross') {
            currentShape = 'circle';

            document.getElementById('player-1').classList.remove('player-inactive');
            document.getElementById('player-2').classList.add('player-inactive');
        } else {
            currentShape = 'cross';
            document.getElementById('player-1').classList.add('player-inactive');
            document.getElementById('player-2').classList.remove('player-inactive');
        }


        fields[id] = currentShape;
        console.log(fields);
        draw();
        checkForWin();
    }
}

function draw() {
    for (let i = 0; i < fields.length; i++) {
        if (fields[i] == 'circle') {
            document.getElementById('circle-' + i).classList.remove('d-none');


        }
        if (fields[i] == 'cross') {
            document.getElementById('cross-' + i).classList.remove('d-none');



        }
    }
}

function checkForWin() {
    let winner;

    //horizontal aligment ////////////////////////////////////////////////////////////////////////////////

    //first row
    if (fields[0] == fields[1] && fields[1] == fields[2] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-1').style.transform = 'scalex(1)';
    }

    //second row
    if (fields[3] == fields[4] && fields[4] == fields[5] && fields[3]) {
        winner = fields[3];
        document.getElementById('line-2').style.transform = 'scalex(1)';
    }

    //thirth row
    if (fields[6] == fields[7] && fields[7] == fields[8] && fields[6]) {
        winner = fields[6];
        document.getElementById('line-3').style.transform = 'scalex(1)';
    }

    //vertical aligment  /////////////////////////////////////////////////////////////////////////////////////

    //first collumn
    if (fields[0] == fields[3] && fields[3] == fields[6] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-4').style.transform = 'rotate(90deg) scalex(1)';

    }

    //second column
    if (fields[1] == fields[4] && fields[4] == fields[7] && fields[1]) {
        winner = fields[1];
        document.getElementById('line-5').style.transform = 'rotate(90deg) scalex(1)';

    }

    //thirth collumn
    if (fields[2] == fields[5] && fields[5] == fields[8] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-6').style.transform = 'rotate(90deg) scalex(1)';
    }

    //Leaning combinations  /////////////////////////////////////////////////////////////////////////////////

    //lean right
    if (fields[0] == fields[4] && fields[4] == fields[8] && fields[0]) {
        winner = fields[0];
        document.getElementById('line-7').style.transform = 'rotate(45deg) scalex(1)';
    }

    //lean left
    if (fields[2] == fields[4] && fields[4] == fields[6] && fields[2]) {
        winner = fields[2];
        document.getElementById('line-8').style.transform = 'rotate(-45deg) scalex(1)';
    }
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////// 


    if (winner) {
        console.log('Gewonnen:', winner);
    }
}