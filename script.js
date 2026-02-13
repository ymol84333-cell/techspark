// Function for Fabric Page Navigation
function navigateFabric(action) {
    if (action === 'buy') {
        window.location.href = 'shipping.html';
    } else if (action === 'stitch') {
        window.location.href = 'stitchers.html';
    }
}

// Function for Stitcher Page Navigation
function goToStitchOrder(stitcherName) {
    localStorage.setItem('selectedStitcher', stitcherName);
    window.location.href = 'stitch-order.html';
}

// Handle Order Placement
document.addEventListener('DOMContentLoaded', () => {
    // Check if on stitch-order page to autofill
    const stitcherField = document.getElementById('selectedStitcherName');
    if (stitcherField) {
        stitcherField.value = localStorage.getItem('selectedStitcher') || 'General Specialist';
    }

    // Shipping Form
    const shipForm = document.getElementById('shippingForm');
    if (shipForm) {
        shipForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Fabric Order Placed Successfully!");
            window.location.href = 'index.html';
        });
    }

    // Stitching Form
    const stitchForm = document.getElementById('stitchingOrderForm');
    if (stitchForm) {
        stitchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert("Stitching Order Placed Successfully!");
            window.location.href = 'index.html';
        });
    }
});