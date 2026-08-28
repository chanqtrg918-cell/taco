// Export a clean function that modifies the screen HTML
export function updateScoreDisplay(currentScore) {
    const scoreElement = document.getElementById('score-board');
    if (scoreElement) {
        scoreElement.textContent = `Score: ${currentScore}`;
    }
}
