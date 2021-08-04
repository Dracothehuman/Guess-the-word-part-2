player_uno = localStorage.getItem("Player_1_Name");
console.log(player_uno);
player_doce = localStorage.getItem("Player_2_Name");
console.log(player_doce)

player1_score = 0;
player2_score = 0;

document.getElementById("p1_name").innerHTML = player_uno + " :";
document.getElementById("P2_name").innerHTML = player_doce + " :";

document.getElementById("Span_p1").innerHTML = player1_score;
document.getElementById("Span_p2").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "The Questioner is: " + player_uno;
document.getElementById("player_answer").innerHTML = "The Answerer is: " + player_doce;

function send(){
    word = document.getElementById("word").value;
    lower = word.toLowerCase();
    console.log("The word " + lower + " has been converted to a lowercase word.");

    charAt1=lower.charAt(1);
    console.log(charAt1);

    length = Math.floor(lower.length/2);
    charAt2 = lower.charAt(length);
    console.log(charAt2);

    pog = lower.length - 1;
    charAt3 = lower.charAt(pog);
    console.log(charAt3);

    remove_charAt1 = lower.replace(charAt1 ,"_");
    remove_charAt2 = remove_charAt1.replace(charAt2 ,"_");
    remove_charAt3 = remove_charAt2.replace(charAt3 ,"_");
    console.log(remove_charAt3);

    question = "<br><h4 id='word_display'>Q. "+remove_charAt3+"</h4>";
    answer_tag = "<br> Answer: <input type='text' id='input_check_box'>";
    button = "<br><br> <button class='btn btn-info' onclick='answer()'>Answer When Ready</button>";
    add = question + answer_tag + button;

    document.getElementById("answer_or_question").innerHTML = add;
    document.getElementById("word").value="";
}

question_turn = "player_uno";
answer_turn = "player_doce";

function answer(){
    get_word = document.getElementById("input_check_box").value;
    get_get_word = get_word.toLowerCase();
    console.log("The answer " + get_get_word + " is now in lower case.");

    if (get_get_word==lower)
    {
        if (answer_turn == "player_uno")
        {
            player1_score = player1_score+1;
            document.getElementById("Span_p1").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("Span_p2").innerHTML = player2_score;
        }

    }
    if (question_turn == "player_uno")
    {
        question_turn = "player_doce";
        document.getElementById("player_question").innerHTML = "The questioner is " + player_doce;

    }
    else
    {
        question_turn = "player_uno";
        document.getElementById("player_question").innerHTML = "The questioner is " + player_uno;
    } 
    if (answer_turn == "player_uno")
    {
        answer_turn = "player_doce";
        document.getElementById("player_answer").innerHTML = "The answerer is " + player_doce;
    }
    else 
    {
        answer_turn = "player_uno";
        document.getElementById("player_answer").innerHTML = "The answerer is " + player_uno;
    }
    document.getElementById("answer_or_question").innerHTML = "";
}