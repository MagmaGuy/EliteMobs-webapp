//Utility
function createTreasureChestButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-treasure-chests-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}

//Templates
function blankSlateButton(button) {
    revealItemFields(button);
    clearOldContent(button);
}

function LootChestButton(button) {
    revealItemFields(button);
    clearOldContent(button);
}

function MimicChestButton(button) {
    revealItemFields(button);
    clearOldContent(button);
}