function playnote(x){
    var note = new Audio("Notes/"+ x +".m4a");
    note.play();
}

function playsharpnote(x){
    var note = new Audio("SharpNotes/"+ x +".m4a");
    note.play();
}