// Smaple inventory data
const inventory = [
    { name: 'Bagles', quantity: 6, expirationDate: '2024-05-30', location: 'Pantry'},
    { name: 'Milk', quantity: 1, expirationDate: '2024-05-24', location: 'Refridgerator'},
];

// Function to display the inventory items
function displayInventory() {
    const inventoryDiv = document.getElementById('inventory');
    inventoryDiv.innerHTML = ''; // Clear previous content

    inventory.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `
            <strong>${item.name}</strong><br>
            Quantity: ${item.quantity}<br>
            Expiration Date: ${item.expirationDate}<br>
            Location: ${item.location}
        `;
        inventoryDiv.appendChild(itemDiv);
    });
}

// Initial display of inventory
displayInventory();