class inventoryModel {
    constructor() {
        this.items = [
            { name: 'Bagles', quantity: 6, expirationDate: '2024-05-30', location: 'Pantry'},
            { name: 'Milk', quantity: 1, expirationDate: '2024-05-24', location: 'Refridgerator'},
        ];
    }

    getItems() {
        return this.items;
    }

    addItem() {
        this.items.push(item);
    }
}

export default inventoryModel;