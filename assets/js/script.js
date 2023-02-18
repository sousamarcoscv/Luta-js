let char = new Knight('Miguel Alvares');
let monster = new LittleMonster('Fananact');

const stage = new Stage(
    char,
    monster,
    document.querySelector("#char"),
    document.querySelector("#monster")
);

stage.start();
