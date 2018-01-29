
//starting timer at 45 sed
var number = 45;
var intervalId;;
//starting timer
function run() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the number in the #show-number tag.
      $("#show-number").html("<h2>Time Left " + number + " sec</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
        check();
      }
    }

    //  The stop function
    function stop() {

      //  Clears our intervalId
      //  We just pass the name of the interval
      //  to the clearInterval function.
      clearInterval(intervalId);
    }
     run();




//checking the answers

function check(){
    var q1=document.myform.q1.value;
     q2=document.myform.q2.value;
    q3=document.myform.q3.value;
    q4=document.myform.q4.value;
    q5=document.myform.q5.value;
    var countright=0;
    var countWrong=0;
    //still can't get unanswerd to work.
    var unAnswerd=0;
    /*I think this is the right track but i can't get it to work!!!!
     if((q1="a")&&(answered==true){
        countright++;
        else if((q!="a")&& (answered==true){
    countWrong++
    }else{
    unaswered++
    }
        })
     }*/

    if(q1=="a"){
        countright++;
    } else{
        countWrong++;
    }

        
    if(q2=="b"){
        countright++;
    } else{
        countWrong++;
    }
    if(q3=="a"){
        countright++;
    } else{
        countWrong++;
    }
    if(q4=="a"){
        countright++;
    } else{
        countWrong++;
    }
    if(q5=="c"){
        countright++;
    } else{
        countWrong++;
    
    }
    
    alert("you got "+countright+" correct");
    alert("you got "+countWrong+" wrong");
    alert("you left "+unAnswerd+"  unanswerd");
    stop();
}

