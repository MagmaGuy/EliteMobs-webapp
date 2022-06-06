//Utility
function createNpcsButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-npcs-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}

function questNPCButton(button){
    hideField(button, '.npc-enabled');
    presetAndHideField(button, '.npc-interaction-type', 'QUEST_GIVER');
    hideField(button, '.npc-custom-model');
    hideField(button, '.npc-arena-filename');
    revealItemFields(button);
    clearOldContent(button);
}