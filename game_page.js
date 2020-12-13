player1_score = 0;
player2_score = 0;
player_1 = localStorage.getItem("player1_name");
player_2 = localStorage.getItem("player2_name");
document.getElementById("player1_name").innerHTML = player_1;
document.getElementById("player2_name").innerHTML = player_2;
document.getElementById("player1_score").innerHTML = ":" + player1_score;
document.getElementById("player2_score").innerHTML = ":" + player2_score;
function send(){
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='umm'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'> Check </button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}
question_turn = "player1";
answer_turn = "player2";
function check(){
   get_answer = document.getElementById("umm").value;
   if(get_answer == actual_answer){
       if(answer_turn == "player1"){
           player1_score = player1_score + 1;
           document.getElementById("player1_score").innerHTML = player1_score;
       }
      if(answer_turn == "player2"){
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
       }
   } 
   if(question_turn == "player1"){
       question_turn = "player2";
       document.getElementById("player_question").innerHTML = "Question turn - " + player_2;
   }
   else{
    question_turn = "player1";
    document.getElementById("player_question").innerHTML = "Question turn - " + player_1;
    }
    if(answer_turn == "player1"){
    answer_turn  = "player2";
    document.getElementById("player_answer").innerHTML = "answer_turn - " + player_2;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer_turn  - " + player_1;
    }

    document.getElementById("output").innerHTML = "";
}

