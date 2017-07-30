var userQuestion = prompt('ASK ME SOMETHING PLS');
var randomNumber = Math.floor(Math.random()*7);
var eightBall = '';

switch (randomNumber) {
  case 0:
    console.log('DEFF');
    break;
  case 1:
    console.log('YOLO');
    break;
  case 2:
    console.log('IDK');
    break;
  case 3:
    console.log('GTFO');
    break;
  case 4:
    console.log('STFU');
    break;
  case 5:
    console.log('NAH');
    break;
  case 6:
    console.log('Y THO');
    break;
  case 7:
    console.log('YAASS');
    break;
  default:
    console.log('FINNA TRY AGAIN');
    break;
                    }

console.log(eightBall);
console.log(userQuestion);
