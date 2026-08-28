// Import specific logic from your other clean modules
import { GAME_SETTINGS } from './config.js';
import { updateScoreDisplay } from './ui.js';

let score = GAME_SETTINGS.INITIAL_SCORE;

export function playerScored() {
    score += 10;
    // Safely update the screen by triggering our UI module
    updateScoreDisplay(score);
}
