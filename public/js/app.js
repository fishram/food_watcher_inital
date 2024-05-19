import InventoryModel from './models/inventoryModel.js';
import InventoryView from './views/inventoryView.js';
import InventoryController from './controllers/inventoryController.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    const model = new InventoryModel();
    const view = new InventoryView();
    const controller = new InventoryController(model, view);
    console.log('MVC components initialized');
});