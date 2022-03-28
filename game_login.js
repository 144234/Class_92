function AddUser(){
    player1_name = document.getElementById("Player_1_name_input").value;
    player2_name = document.getElementById("Player_2_name_input").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("player2_name", player2_name);
    window.location="Game_page.html";
}