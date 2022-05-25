//Utility
function createNpcsButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-npcs-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}