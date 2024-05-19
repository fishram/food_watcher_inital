import inventoryModel from "../models/inventoryModel";
import InventoryView from "../views/inventoryView";

class InventoryController {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.view.bindAddItem(this.handleAddItem);
        this.view.displayItems(this.model.getItems());
    }

    handleAddItem = (item) => {
        this.model.addItem(item);
        this.view.displayItems(this.model.getItems());
    }
}

export default InventoryController;