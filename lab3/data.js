let data = [];

export function get_items() {
    return data;
}
export function add_item(new_item) {
    // add item (if id does not exist)
    let existItem = data.find((item) => item.ID == new_item.ID)
    if (!existItem) {
        data.push(new_item);
        return true;
    }
    return false;
    // return true if item is added successfully, false otherwise
}

export function update_item_title_by_id(id, new_title) {
    // update the title (if id exist)
    let existItemIndex = data.findIndex((item) => item.ID == id);
    if (existItemIndex != -1) {
        data.at(existItemIndex).title = new_title;
        return true;
    }
    return false;
    // return true if item is update successfully, false otherwise
}

export function delete_item_by_id(id) {
    // delete the item (if id exist)
    let existItemIndex = data.findIndex((item) => item.ID == id);
    if (existItemIndex != -1) {
        data.splice(existItemIndex, 1);
        return true;
    }
    return false;
    // return true if item is deleted successfully, false otherwise
}
export function get_item_title_by_id(id) {
    // return the item title by id (if id exist)
    let existItem = data.find((item) => item.ID == id);
    if (existItem) {
        return existItem.title;
    }
}
