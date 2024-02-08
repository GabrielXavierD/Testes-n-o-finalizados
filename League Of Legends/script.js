document.addEventListener("DOMContentLoaded", function() {
    const showStatsButton = document.getElementById("show-stats");
    const championStats = document.getElementById("champion-stats");

    showStatsButton.addEventListener("click", function() {
        championStats.classList.toggle("hidden");
        if (championStats.classList.contains("hidden")) {
            showStatsButton.textContent = "Mostrar Estatísticas";
        } else {
            showStatsButton.textContent = "Ocultar Estatísticas";
        }
    });
});
