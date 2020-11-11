$(document).ready(function(){
$('#input').keyup(function(e){
 words= wordCounter(e.target.value);
});
function wordCounter(text) {
    var text = input.value;
    var wordCount = 0;
    for (var i = 0; i <= text.length; i++) {
      if (text.charAt(i) == ' ') {
        wordCount++;
      }
    }
    return wordCount;
  }


var counter = 60;
function timer() {
    counter--;
    // Display 'counter' wherever you want to display it.
    if (counter <= 0) {
     		clearInterval(interval);
             swal({
                title: "Congratulations!",
                text: "Your Typing Speed is "+ words + " wpm",
                icon: "success",
                button: "Restart"
              }).then(function(){ 
                location.reload();
                }
             );
        return;
    }else{
    	$('#time').text(counter)
      console.log("Timer --> " + counter);
    }
};
//var intarval=setInterval(timer,1000)
function interval(){
    setInterval(timer,1000)
}
$("#input").click(interval);

});
