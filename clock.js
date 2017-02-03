document.addEventListener('DOMContentLoaded', function() {
  function step(){
    now = new Date();
    var dateSecond = now.getSeconds()/60; //getting the current second and dividing it by 60 so I can get a propers degrees
    // console.log(dateSecond);
    var dateMinute = now.getMinutes()+(dateSecond);//adding seconds divided by 60 gives me constant movement
    var dateHour = now.getHours()+(dateMinute/60+dateSecond/60);
    document.getElementById('second').style.transform = "rotate("+((dateSecond)*360)+"deg)";
    document.getElementById('minute').style.transform = "rotate("+((dateMinute/60)*360)+"deg)";
    document.getElementById('hour').style.transform = "rotate("+((dateHour/12)*360)+"deg)";
  };
  setInterval(step,1000);
});