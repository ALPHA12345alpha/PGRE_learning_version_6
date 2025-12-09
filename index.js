// Initialize all sections on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeSection('cards-container-1', 'show-all-btn-1');
    initializeSection('cards-container-2', 'show-all-btn-2');
    initializeSection('cards-container-3', 'show-all-btn-3');
});

function initializeSection(containerId, btnId) {
    const container = document.getElementById(containerId);
    const btn = document.getElementById(btnId);
    const cards = container.children;
    
    // Hide cards beyond the first 3
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = i < 4 ? "block" : "none";
    }
    
    // Hide Show All button if 3 or fewer cards
    if (cards.length <= 4) {
        btn.classList.add('hidden');
    }
}

function toggleShowAll(containerId, btnId) {
    const container = document.getElementById(containerId);
    const btn = document.getElementById(btnId);
    const cards = container.children;
    
    if (btn.textContent.includes("Show All")) {
        btn.innerHTML = '<i style="margin-right: 2px;" class="fa-solid fa-caret-up"></i> Show Less';
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "block";
        }
    } else {
        btn.innerHTML = '<i style="margin-right: 2px;" class="fa-solid fa-caret-down"></i> Show All';
        for (let i = 4; i < cards.length; i++) {
            cards[i].style.display = "none";
        }
    }
}