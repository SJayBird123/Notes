function playnote(x){
    var note = new Audio("NoteMachine/Notes/"+ x +".m4a");
    note.play();
}

function playsharpnote(x){
    var note = new Audio("NoteMachine/SharpNotes/"+ x +".m4a");
    note.play();
}

function playtreblenote(x){
    var note = new Audio("NoteMachine/TrebleNotes/"+ x +".m4a");
    note.play();
}

function playsharptreblenote(x){
    var note = new Audio("NoteMachine/TrebleSharpNotes/"+ x +".m4a");
    note.play();
}