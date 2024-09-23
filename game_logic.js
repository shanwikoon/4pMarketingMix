
// Game state
let gameState = {
    customerSatisfaction: 50,
    revenue: 50,
    brandAwareness: 50,
    marketPenetration: 50,
    score: 0
};

// Function to update game metrics and display
function makeDecision(customerSatisfactionChange = 0, revenueChange = 0, brandAwarenessChange = 0, marketPenetrationChange = 0, scoreChange = 0) {
    gameState.customerSatisfaction += customerSatisfactionChange;
    gameState.revenue += revenueChange;
    gameState.brandAwareness += brandAwarenessChange;
    gameState.marketPenetration += marketPenetrationChange;
    gameState.score += scoreChange;

    // Ensure the metrics stay within bounds (0 - 100)
    gameState.customerSatisfaction = Math.max(0, Math.min(100, gameState.customerSatisfaction));
    gameState.revenue = Math.max(0, Math.min(100, gameState.revenue));
    gameState.brandAwareness = Math.max(0, Math.min(100, gameState.brandAwareness));
    gameState.marketPenetration = Math.max(0, Math.min(100, gameState.marketPenetration));

    updateDisplay();
}

// Function to display the game metrics on the page
function updateDisplay() {
    document.getElementById('customerSatisfaction').textContent = gameState.customerSatisfaction;
    document.getElementById('revenue').textContent = gameState.revenue;
    document.getElementById('brandAwareness').textContent = gameState.brandAwareness;
    document.getElementById('marketPenetration').textContent = gameState.marketPenetration;
    document.getElementById('score').textContent = gameState.score;
}

// Function to display feedback after each decision
function provideFeedback(customerSatisfactionChange, revenueChange, brandAwarenessChange, marketPenetrationChange) {
    let feedback = 'Previous Decision Outcome: ';
    if (customerSatisfactionChange !== 0) feedback += `Customer Satisfaction changed by ${customerSatisfactionChange}. `;
    if (revenueChange !== 0) feedback += `Revenue changed by ${revenueChange}. `;
    if (brandAwarenessChange !== 0) feedback += `Brand Awareness changed by ${brandAwarenessChange}. `;
    if (marketPenetrationChange !== 0) feedback += `Market Penetration changed by ${marketPenetrationChange}.`;

    document.getElementById('feedback').textContent = feedback;
}

// Function to handle player's decision
function makeChoice(choiceIndex) {
    let choice = scenarios[currentScenario].choices[choiceIndex];
    makeDecision(
        choice.customerSatisfactionChange,
        choice.revenueChange,
        choice.brandAwarenessChange,
        choice.marketPenetrationChange,
        choice.scoreChange
    );
    provideFeedback(
        choice.customerSatisfactionChange,
        choice.revenueChange,
        choice.brandAwarenessChange,
        choice.marketPenetrationChange
    );

    currentScenario++;
    if (currentScenario < scenarios.length) {
        displayScenario(currentScenario);
    } else {
        endGame();
    }
}

// End the game and show final results with detailed feedback and feedforward
function endGame() {
    document.getElementById('question').textContent = "Game Over!";
    document.getElementById('choices').innerHTML = '';

    let finalFeedback = `<strong>Final Score: ${gameState.score}</strong><br><br>`;
    finalFeedback += `<strong>Performance Breakdown:</strong><br>`;
    finalFeedback += `Final Customer Satisfaction: ${gameState.customerSatisfaction}<br>`;
    finalFeedback += `Final Revenue: ${gameState.revenue}<br>`;
    finalFeedback += `Final Brand Awareness: ${gameState.brandAwareness}<br>`;
    finalFeedback += `Final Market Penetration: ${gameState.marketPenetration}<br><br>`;

    // Adjust score thresholds for better feedback control
    if (gameState.score >= 80) {
        finalFeedback += "You've mastered the 4P marketing mix and built a thriving pizza restaurant in London!<br><br>";
    } else if (gameState.score >= 60) {
        finalFeedback += "Your performance was good, but there's room for improvement in balancing the 4P strategies.<br><br>";
    } else {
        finalFeedback += "Your pizzeria struggled due to imbalanced decision-making. Focus on maintaining consistency across the marketing mix.<br><br>";
    }

    document.getElementById('feedback').innerHTML = finalFeedback;
}

// Start the game
window.onload = function() {
    displayScenario(currentScenario);
};
