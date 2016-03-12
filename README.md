#A Real Time Retrospective Board With Video chat


## “retrospectives” — meetings where people write what made them “glad,” “mad” or “sad” onto different-colored notes, post them onto a board, arrange them in groups and — most importantly — talk about them.

Our “virtual retrospective board” needs to allow team members to:

    create, edit and move sticky notes;
    sync the current state of the board in real time between all team members;
    talk about the board via video chat.

It also needs to:

    make sure users log in with the right password.

To achieve this, we’ll be using:

    a bit of jQuery (chances are you’ll pick your M*C framework of choice, but let’s keep things simple);
    deepstream (an open-source Node.js server that comes with all sorts of real-time functionality, like pub-sub, remote procedure calls and, most importantly for our sticky-notes board, data sync and WebRTC for video communication).

## Install and run server

```

 npm install
 bower install 
 node start
```

## Run client


1. Open client/index.html in browser
2. Login with any username and the password 'sesame'




Implementation from [this](https://www.smashingmagazine.com/2016/03/building-a-real-time-retrospective-board-with-video-chat) article 