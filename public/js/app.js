import InventoryModel from '../../src/models/inventoryModel.js';
import InventoryView from '../../src/views/inventoryView.js';
import InventoryController from '../../src/controllers/inventoryController.js';

document.addEventListener('DOMContentLoaded', () => {
    const model = new InventoryModel();
    const view = new InventoryView();
    const controller = new InventoryController(model, view);
});
