function playnote(x){
    var note = new Audio("Notes/"+ x +".m4a");
    note.play();
}

function playsharpnote(x){
    var note = new Audio("SharpNotes/"+ x +".m4a");
    note.play();
}

function playtreblenote(x){
    var note = new Audio("TrebleNotes/"+ x +".m4a");
    note.play();
}

function playsharptreblenote(x){
    var note = new Audio("TrebleSharpNotes/"+ x +".m4a");
    note.play();
}