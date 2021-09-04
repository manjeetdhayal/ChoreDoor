
const doorImage1 = document.getElementById('door1');
const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

const startButton = document.getElementById('start');
let currentPlaying = true;


let numClosedDoors = 3;
let openDoor1, openDoor2, openDoor3;

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
}

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
}

const playDoor = (door) => {
    --numClosedDoors;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
}

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);

    switch (choreDoor) {
        case 0: openDoor1 = botDoorPath;
            openDoor2 = beachDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 1: openDoor1 = beachDoorPath;
            openDoor2 = botDoorPath;
            openDoor3 = spaceDoorPath;
            break;
        case 2: openDoor1 = beachDoorPath;
            openDoor2 = spaceDoorPath;
            openDoor3 = botDoorPath;
            break;
        default: console.log('this is not possible');
    }

}


doorImage1.onclick = () => {
    if (!isClicked(doorImage1) && currentPlaying) {
        doorImage1.src = openDoor1;
        playDoor(doorImage1);
    }
}

doorImage2.onclick = () => {
    if (!isClicked(doorImage2) && currentPlaying) {
        doorImage2.src = openDoor2;
        playDoor(doorImage2);
    }
}

doorImage3.onclick = () => {
    if (!isClicked(doorImage3) && currentPlaying) {
        doorImage3.src = openDoor3;
        playDoor(doorImage3);
    }
}

startButton.onclick = () => {
    if(!currentPlaying) {
        startRound();
    }
    
}

const startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;    
    numClosedDoors = 3; 
    startButton.innerHTML = "Good luck!";
    currentPlaying = true;

    randomChoreDoorGenerator();
}

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = "You win! Play again?";
    } else {
        startButton.innerHTML = "Game over! play again?"
    }

    currentPlaying = false;
}

startRound();