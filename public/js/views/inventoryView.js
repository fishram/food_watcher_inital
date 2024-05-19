class InventoryView {
    contructor() {
        this.app = document.getElementById('app');
        this.title = this.createElement('h1', 'title');
        this.title.textContent = 'Kitchen Inventory';

        this.inventoryList = this.createElement('div', 'inventory');
        this.app.append(this.title, this.inventoryList);

        this.addButton = this.createElement('button', 'add-button');
        this.addButton.textContent = 'Add Food';
        this.app.append(this.addButton);
    }

    createElement(tag, className) {
        const element = document.createElement(tag);
        if (className) element.classList.add(className);
        return element;
    }

    displayItems(items) {
        // Remove all previous items
        while (this.inventoryList.firstChild) {
            this.inventoryList.removeChild(this.inventoryList.firstChild);
        }

        // Default message if no items
        if (items.length === 0) {
            const p = this.createElement('p');
            p.textContent = 'No items in inventory. Add some!';
            this.inventoryList.append(p);
        }
        else {
            // Create item elements for each item
            items.forEach(item => {
                const itemDiv = this.createElement('div');
                itemDiv.innerHTML = `
                    <strong>${item.name}</strong><br>
                    Quantity: ${item.quantity}<br>
                    Expiration Date: ${item.experationDate}<br>
                    Location: ${item.location}
                    `
            });
            this.inventoryList.append(itemDiv);
        }
    }

    bindAddItem(handler) {
        this.addButton.addEventListener('click', event => {
            event.preventDefault();
            const name = prompt('Enter item name:');
            const quantity = prompt('Enter quantity:');
            const expirationDate = prompt('Enter expiration date (YYYY-MM-DD):');
            const location = prompt('Enter location:');
            if (name && quantity && expirationDate && location) {
                handler({ name, quantity, expirationDate, location });
            }
        });
    }
}

export default InventoryView;