//Utility
function createCustomBossButton(button) {
    let container = button.parentNode.parentNode.parentNode;
    transitionContent(button, 'template-custom-bosses-global');
    //Add plus buttons to string lists
    for (const child of container.getElementsByClassName('config-list')) {
        child.parentNode.after(document.getElementById('template-plus-button').content.cloneNode(true));
    }
}

//Templates
function bossBlankSlateButton(button) {
    revealItemFields(button);
    clearOldContent(button);
    //todo: modify fields as needed
}

//Complex option fields
function simpleLootButton(button) {
    switchTemplates(button, 'template-custom-bosses-simple-loot', '.row');
}

function advancedLootButton(button) {
    switchTemplates(button, 'template-custom-bosses-advanced-loot', '.row');
}

function switchTemplates(button, newTemplate, parentClass) {
    const newContent = document.getElementById(newTemplate).content.cloneNode(true);
    let parent = button.closest(parentClass);
    parent.innerHTML = "";
    parent.appendChild(newContent);
}