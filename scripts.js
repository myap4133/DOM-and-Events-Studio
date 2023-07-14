// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function(){
    console.log("Window has been loaded.");
    const flightStatus = document.getElementById("flightStatus");
    const shuttleBack = document.getElementById("shuttleBackground");
    const height = document.getElementById("spaceShuttleHeight");
    let shuttleHeight = 0;

    const takeOff = document.getElementById("takeoff");
    takeOff.addEventListener("click", function(){
        let ready = window.confirm("Confirm that the shuttle is ready for takeoff.");
        if(ready){
            flightStatus.innerHTML = "Shuttle in flight.";
            shuttleBack.style.backgroundColor = "blue";
            shuttleHeight += 10000;
            height.innerHTML = shuttleHeight.toString();
        }
    });

    const land = document.getElementById("landing");
    land.addEventListener("click", function(){
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBack.style.backgroundColor = "green";
        shuttleHeight = 0;
        height.innerHTML = "0";
    });

    const abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function(){
        let stopMission = window.confirm("Confirm that you want to abort the mission.");
        if(stopMission){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBack.style.backgroundColor = "green";
            shuttleHeight = 0;
            height.innerHTML = "0";
        }
    });

    const up = document.getElementById("up");
    const down = document.getElementById("down");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const rocket = document.getElementById("rocket");
    rocket.style.position = "absolute";

    right.addEventListener("click", function(){
        let x = rocket.offsetLeft;
        x += 10;
        rocket.style.left = x+"px";
    });

    left.addEventListener("click", function(){
        let x = rocket.offsetLeft;
        x -= 10;
        rocket.style.left = x+"px";
    });

    up.addEventListener("click", function(){
        let x = rocket.offsetTop;
        x -= 10;
        shuttleHeight += 10000;
        rocket.style.top = x+"px";
        height.innerHTML = shuttleHeight.toString();
    });

    down.addEventListener("click", function(){
        let x = rocket.offsetLeft;
        x += 10;
        shuttleHeight -= 10000;
        rocket.style.top = x+"px";
        height.innerHTML = shuttleHeight.toString();
    });
})