//Utility
function createCustomBossButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-custom-bosses-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}

//Templates
function bossBlankSlateButton(button) {
    revealItemFields(button);
    clearOldContent(button);
    //todo: modify fields as needed
}

function lairBossButton(button){
    commonHiddenFields(button);
    presetField(button, '.boss-health-multiplier', 30.0);
    presetField(button, '.boss-damage-multiplier', 1.5);
    presetAndHideField(button, '.boss-drops-elitemobs-loot', 'true');
    presetAndHideField(button, '.boss-drops-vanilla-loot', false);
    presetField(button, '.boss-drops-random-loot', true);
    presetField(button, '.boss-announcement-priority', 3);
    presetField(button, '.boss-follow-distance', 30);
    presetField(button, '.boss-spawn-cooldown', 240);
    presetField(button, '.boss-leash-radius', 30);
    presetAndHideField(button, '.boss-is-regional-boss', 'true');
    revealItemFields(button);
    clearOldContent(button);
}

function commonHiddenFields(button){
    hideField(button, '.boss-enabled');
    hideField(button, '.boss-persistent');
    hideField(button, '.boss-baby');
    hideField(button, '.boss-frozen');
    hideField(button, '.boss-reinforcement');
    hideField(button, '.boss-on-death-commands');
    hideField(button, '.boss-on-spawn-commands');
    hideField(button, '.boss-on-combat-enter-commands');
    hideField(button, '.boss-on-combat-leave-commands');
    hideField(button, '.boss-trails');
    hideField(button, '.boss-mounted-entity');
    hideField(button, '.boss-escape-message');
    hideField(button, '.boss-disguise');
    hideField(button, '.boss-custom-disguise-data');
    hideField(button, '.boss-custom-model');
    hideField(button, '.boss-timeout');
    hideField(button, '.boss-cull-reinforcements');
    hideField(button, '.boss-normalized-combat');
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