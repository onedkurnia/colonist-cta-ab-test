document.addEventListener("DOMContentLoaded", function () {
  const joinRoomBtn = document.getElementById("joinRoomBtn");
  const spectateBtn = document.getElementById("spectateBtn");

  // Sends the clicker directly into a game room.
  joinRoomBtn.addEventListener("click", function () {
    window.location.href = "https://colonist.io/#room";
  });

  // Secondary CTA — Play Online (API-driven)
  spectateBtn.addEventListener("click", function () {
    const btn = this;

    // Prevent duplicate clicks while loading
    if (btn.classList.contains("is-loading")) return;

    btn.classList.add("is-loading");

    fetch("https://colonist.io/api/lobby")
      .then(function (response) {
        if (!response.ok) {
          throw new Error("Lobby API responded with " + response.status);
        }
        return response.json();
      })
      .then(function (data) {
        // Navigate to spectate view with lobby context
        const target = (data && data.url) || "https://colonist.io/#spectate";
        window.location.href = target;
      })
      .catch(function () {
        // Graceful fallback — still navigate even if the API fails
        window.location.href = "https://colonist.io/#spectate";
      })
      .finally(function () {
        btn.classList.remove("is-loading");
      });
  });
});
