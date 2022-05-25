//Utility
function createTreasureChestButton(button) {
    let container = button.parentNode.parentNode.parentNode;
    transitionContent(button, 'template-treasure-chests-global');
    //Add plus buttons to string lists
    for (const child of container.getElementsByClassName('config-list')) {
        child.parentNode.after(document.getElementById('template-plus-button').content.cloneNode(true));
    }
}