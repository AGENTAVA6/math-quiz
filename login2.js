function user(){
    player2_name = document.getElementById("player2_name_input").value;
    localStorage.setItem("player2_name",player2_name);
    window.location = "game_page.html";
}