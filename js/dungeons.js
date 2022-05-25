//Utility
function createDungeonsButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-dungeons-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}