//Utility
function createTreasureChestButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-treasure-chests-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}