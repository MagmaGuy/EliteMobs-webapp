//Utility
function createTreasureChestButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-treasure-chests-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}

function lootChestButton(button) {
    hideField(button, '.chest-enabled');
    hideField(button, '.chest-mimic-chance');
    hideField(button, '.chest-mimic-custom-bosses');
    revealItemFields(button);
    clearOldContent(button);
}

function mimicChestButton(button) {
    hideField(button, '.chest-enabled');
    revealItemFields(button);
    clearOldContent(button);
}