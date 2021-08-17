const menuRequested = () => {
    return {
        type: 'MENU_REQUESTED'
    }
}
const menuError = () => {
    return {
        type: 'MENU_ERROR'
    }
}
const menuLoaded = (newMenu) => {
    return {
        type: 'MENU_LOADED',
        payload: newMenu
    }
}
const itemAdded = id => {
    return {
        type: 'ITEM_ADDED',
        payload: id
    }
}
const itemRemoved = id => {
    return {
        type: 'ITEM_REMOVED',
        payload: id
    }
}
export {
    menuRequested,
    menuError,
    menuLoaded,
    itemAdded,
    itemRemoved
}