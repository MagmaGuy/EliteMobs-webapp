//Utility
function createCustomSpawnsButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-custom-spawns-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}