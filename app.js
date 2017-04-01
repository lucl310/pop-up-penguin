function roar(){
     alert("Yaaaarrrr!");
}
// ('https://www.youtube.com/watch?v=I4ZC_Y3Dv1w')
// ('https://www.youtube.com/watch?v=e6vhM7waF3k')
// ('https://www.youtube.com/watch?v=WWWldG1W24g')
// ('https://www.youtube.com/watch?v=eToCsR8u2FA')
// ('https://www.youtube.com/watch?v=4heVhS13bdY')
// ('https://www.youtube.com/watch?v=Q73gUUr8Zlw')
// ('https://www.youtube.com/watch?v=iAPcgY698Jw')
// ('https://www.youtube.com/watch?v=CT1SGp-ZDmw')

// function PlaySound() {
//   var lawn = new audio();
//   lawn.src = "https://www.youtube.com/watch?v=I4ZC_Y3Dv1w";
//   document.getElementById(lawn);
//   lawn.Play();
// }

// function playSound(soundfile) {
  // document.getElementById("lawn").innerHTML= "<embed src=\"https://www.youtube.com/watch?v=I4ZC_Y3Dv1w"
    // + soundfile +"\" hidden=\"true\" autostart=\"true"
    // loop=\"false\" />";
// }
// ../lawn.mp3

function PlaySound(path) {
  var audioElement = document.createElement('audio');
  audioElement.setAttribute('src', path);
  audioElement.play();
}
PlaySound('../lawn.mp3')