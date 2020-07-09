// Write your JavaScript code here.
// Remember to pay attention to page loading!

//Part 1
window.addEventListener("load", function(){
    let takeoffCheck = false
    let shuttleHeight = document.getElementById("spaceShuttleHeight");
    let shuttleBackground = document.getElementById("shuttleBackground");
    //Part 2 of Code
    //assigns Element ID takeoff as variable takeoff.
    let takeoff = document.getElementById("takeoff");
    //listens for response to be confirmed or denied by user and actively changes parts of the HTML to match with its response.
    takeoff.addEventListener("click", function(event){
        response = confirm("Confirm that the shuttle is ready for takeoff");
        if(response && !takeoffCheck){
          let height = Number(shuttleHeight.innerHTML);
          flightStatus.innerHTML = "Shuttle in flight.";
          shuttleBackground.style.backgroundColor = "blue";
          shuttleHeight.innerHTML = height + 10000;
          takeoffCheck = true;
          shuttleImg.style.bottom = "10px";
          shuttleImg.style.left = "0px";
        }
    });

    //Part 3 of Code
    //assigns Element ID landing as variable land
    let land = document.getElementById("landing");
    //listens for alert response and adjusts HTML after "OK" is clicked.
    land.addEventListener("click", function(){
        if(takeoffCheck) {
            window.alert("The shuttle is landing. Landing gear engaged.");
            flightStatus.innerHTML = "The shuttle has landed.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0
            rocket.style.bottom = 0;
            rocket.style.left = 0;
            takeoffCheck = false;
        }
        else{
            window.alert("The shuttle hasn't launched!")
        }
    })

    //Part 4 of Code
    //assigns Element ID missionAbort as variable abort
    let abort = document.getElementById("missionAbort");
    //listens for response to be confirmed or denied by user and actively changes parts of the HTML to match with its response.
    abort.addEventListener("click", function(event){
        response = confirm("Confirm that you want to abort the mission.");
        if(response) {
            flightStatus.innerHTML = "Mission Aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = 0;
            shuttleImg.style.bottom = 0;
            shuttleImg.style.left = 0;
            takeoffCheck = false;
        }
    })

    //part 5 of Code
    let shuttleImg = document.getElementById("rocket");
    let up = document.getElementById("up");
    let down = document.getElementById("down");
    let left = document.getElementById("left");
    let right = document.getElementById("right");

    up.addEventListener("click", function(){
        if (takeoffCheck && parseInt(shuttleImg.style.bottom) < 250) {
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
            shuttleImg.style.bottom = (parseInt(shuttleImg.style.bottom) + 10) + "px";
        }
    });
    
    down.addEventListener("click", function(){
        if (takeoffCheck && parseInt(shuttleImg.style.bottom) > 0) {
            shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
            shuttleImg.style.bottom = (parseInt(shuttleImg.style.bottom) - 10) + "px";
        }
    });

    left.addEventListener("click", function(){
        if (takeoffCheck && (parseInt(shuttleImg.style.left) + shuttleBackground.clientWidth) > 30) {
        shuttleImg.style.left = (parseInt(shuttleImg.style.left) - 10) + "px";
        }
    });

    right.addEventListener("click", function(){
        if (takeoffCheck && (shuttleBackground.clientWidth - parseInt(shuttleImg.style.left)) > 58) {
        shuttleImg.style.left = (parseInt(shuttleImg.style.left) + 10) + "px";
        }
    });

});