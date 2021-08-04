function addUser(){
    var p1=document.getElementById("Player1").value;  
    var p2=document.getElementById("Player2").value;
    
    localStorage.setItem("Player_1_Name", p1);
    localStorage.setItem("Player_2_Name", p2);

    window.location="game_page.html"
}