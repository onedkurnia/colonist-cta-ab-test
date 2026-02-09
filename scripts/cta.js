document.addEventListener("DOMContentLoaded", function () {
  var joinRoomBtn = document.getElementById("joinRoomBtn");
  var spectateBtn = document.getElementById("spectateBtn");

  // Primary CTA — sends the player into a random game room
  joinRoomBtn.addEventListener("click", function () {
    window.location.href = "https://colonist.io/#room";
  });

  // Secondary CTA — opens the spectate/leaderboard view
  spectateBtn.addEventListener("click", function () {
    window.location.href = "https://colonist.io/#spectate";
  });
});
