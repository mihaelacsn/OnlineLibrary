document.addEventListener("DOMContentLoaded", function() {
    const gridItems = document.querySelectorAll(".grid-item");

    gridItems.forEach((item, index) => {
        item.addEventListener("animationend", () => {
            item.classList.remove("slide-animation");
        });
    });
});

var clickableElements = document.querySelectorAll('.clickable');
clickableElements.forEach(function(element) {
    element.addEventListener('click', function() {
        element.setAttribute('data-state', 'clicked');
        if (element.classList.contains('clicked')) {
         element.classList.remove('clicked');
         element.classList.add('unclicked'); 
        }else if (element.classList.contains('unclicked')){
            element.classList.remove('unclicked'); 
            element.classList.add('clicked'); 
        }else{
            element.classList.add('clicked');
            }
    });
});

// Get all clickable items
const clickableItems = document.querySelectorAll('.clickable');

// Add event listeners to each clickable item
clickableItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        // Add a class to the hovered item to remove brightness reduction
        item.classList.add('hovered');
        // Add a class to the grid container to apply hover effect
        document.querySelector('.grid-container').classList.add('hover-effect');
    });

    item.addEventListener('mouseout', () => {
        // Remove the class when mouse leaves the hovered item
        item.classList.remove('hovered');
        // Check if any item is still being hovered
        const hoveredItems = document.querySelectorAll('.hovered');
        if (hoveredItems.length === 0) {
            // Remove hover effect if no item is hovered
            document.querySelector('.grid-container').classList.remove('hover-effect');
        }
    });

});
