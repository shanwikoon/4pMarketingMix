
// Array of scenarios
const scenarios = [
    {
        question: "Your customer base has been growing, and you’re considering adding new items to the menu. What do you do?",
        choices: [
            {
                text: "Add a variety of new pizzas, including vegan and gluten-free options",
                customerSatisfactionChange: 10,
                revenueChange: 5,
                brandAwarenessChange: 7,
                marketPenetrationChange: 3,
                scoreChange: 8
            },
            {
                text: "Focus on refining your current menu for better quality and speed",
                customerSatisfactionChange: 7,
                revenueChange: 8,
                brandAwarenessChange: 3,
                marketPenetrationChange: 2,
                scoreChange: 6
            }
        ]
    },
    {
        question: "London’s pizza market is competitive, and you need to choose a pricing strategy. What approach do you take?",
        choices: [
            {
                text: "Offer premium pricing for gourmet pizzas",
                customerSatisfactionChange: 5,
                revenueChange: 10,
                brandAwarenessChange: 5,
                marketPenetrationChange: -3,
                scoreChange: 7
            },
            {
                text: "Introduce budget-friendly pizza options",
                customerSatisfactionChange: 10,
                revenueChange: -5,
                brandAwarenessChange: 5,
                marketPenetrationChange: 10,
                scoreChange: 9
            }
        ]
    },
    {
        question: "Your pizzeria has been doing well, and you’re considering expanding to another part of London. How do you proceed?",
        choices: [
            {
                text: "Open a new location in a high-end, tourist-heavy area",
                customerSatisfactionChange: 5,
                revenueChange: 10,
                brandAwarenessChange: 7,
                marketPenetrationChange: 2,
                scoreChange: 8
            },
            {
                text: "Open a new location near a university with a high student population",
                customerSatisfactionChange: 10,
                revenueChange: 3,
                brandAwarenessChange: 8,
                marketPenetrationChange: 5,
                scoreChange: 9
            }
        ]
    },
    {
        question: "It’s summer, and tourism in London is at its peak. How will you boost sales?",
        choices: [
            {
                text: "Launch a seasonal pizza with locally sourced ingredients",
                customerSatisfactionChange: 8,
                revenueChange: 6,
                brandAwarenessChange: 8,
                marketPenetrationChange: 2,
                scoreChange: 8
            },
            {
                text: "Offer a 'Buy One Get One Free' deal on all pizzas",
                customerSatisfactionChange: 7,
                revenueChange: 2,
                brandAwarenessChange: 10,
                marketPenetrationChange: 7,
                scoreChange: 9
            }
        ]
    },
    {
        question: "You want to increase your restaurant’s online presence. What’s your strategy?",
        choices: [
            {
                text: "Partner with a local food influencer for a series of posts",
                customerSatisfactionChange: 5,
                revenueChange: 7,
                brandAwarenessChange: 10,
                marketPenetrationChange: 5,
                scoreChange: 9
            },
            {
                text: "Invest in paid ads on Instagram and Facebook targeting London foodies",
                customerSatisfactionChange: 2,
                revenueChange: 10,
                brandAwarenessChange: 8,
                marketPenetrationChange: 4,
                scoreChange: 7
            }
        ]
    },
    {
        question: "A customer posts a negative review online about slow service. How do you respond?",
        choices: [
            {
                text: "Apologize publicly and offer a discount for future visits",
                customerSatisfactionChange: 10,
                revenueChange: -3,
                brandAwarenessChange: 5,
                marketPenetrationChange: 2,
                scoreChange: 8
            },
            {
                text: "Privately address the issue and offer a free meal",
                customerSatisfactionChange: 7,
                revenueChange: -5,
                brandAwarenessChange: 3,
                marketPenetrationChange: 1,
                scoreChange: 6
            }
        ]
    },
    {
        question: "You notice a decline in foot traffic. What do you do to improve the dining experience?",
        choices: [
            {
                text: "Invest in renovating the restaurant for a more modern, trendy look",
                customerSatisfactionChange: 8,
                revenueChange: 5,
                brandAwarenessChange: 5,
                marketPenetrationChange: 3,
                scoreChange: 8
            },
            {
                text: "Hire more staff to improve service speed",
                customerSatisfactionChange: 10,
                revenueChange: 3,
                brandAwarenessChange: 4,
                marketPenetrationChange: 2,
                scoreChange: 8
            }
        ]
    },
    {
        question: "You want to retain repeat customers. What loyalty program do you launch?",
        choices: [
            {
                text: "Offer a points-based system where every 10th pizza is free",
                customerSatisfactionChange: 10,
                revenueChange: 3,
                brandAwarenessChange: 4,
                marketPenetrationChange: 6,
                scoreChange: 9
            },
            {
                text: "Provide exclusive discounts to loyalty members during slow hours",
                customerSatisfactionChange: 7,
                revenueChange: 5,
                brandAwarenessChange: 3,
                marketPenetrationChange: 5,
                scoreChange: 8
            }
        ]
    }
];

// Start game
let currentScenario = 0;

function displayScenario(index) {
    let scenario = scenarios[index];
    document.getElementById('question').textContent = scenario.question;
    
    let choicesDiv = document.getElementById('choices');
    choicesDiv.innerHTML = '';
    
    scenario.choices.forEach((choice, i) => {
        let button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = function() { makeChoice(i); };
        choicesDiv.appendChild(button);
    });
}

// Display the first scenario when the page loads
window.onload = function() {
    displayScenario(currentScenario);
};
