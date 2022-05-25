//Utility

//Converts into a valid format for input suggestions
function convertToDatalist(arrayList) {
    let convertedString = '';
    arrayList.forEach(element => {
        convertedString += '<option value="' + element + '" />';
    })
    return convertedString;
}

function createCustomItemButton(button) {
    const card = getCard(button);
    transitionContent(button, 'template-custom-items-global');
    //Add plus buttons to string lists
    initializeConfigLists(card);
}

function revealItemFields(button) {
    let customItemContainer = button.parentNode.parentNode.parentNode;
    customItemContainer.getElementsByClassName('field-container')[0].style.display = 'block';
}

//Templates

function blankSlateButton(button) {
    transitionContent(button, 'template-custom-items-amount');
    //todo: modify fields as needed
}

function uniqueDropButton(button) {
    transitionContent(button, 'template-custom-items-amount');
    hideField(button, '.item-enabled');
    hideField(button, '.item-drop-weight');
    hideField(button, '.item-scalability');
    hideField(button, '.item-type');
    hideField(button, '.item-custom-model-id');
    hideField(button, '.item-permission');
    //todo: modify fields as needed
}

function charmButton(button) {
    transitionContent(button, 'template-custom-items-amount');
    hideField(button, '.item-enabled');
    hideField(button, '.item-scalability');
    hideField(button, '.item-type');
    hideField(button, '.item-custom-model-id');
    hideField(button, '.item-permission');
    //todo: modify fields as needed
}

function fetchQuestItem(button) {
    //transitionContent(button, 'template-custom-items-amount');
    revealItemFields(button);
    clearOldContent(button);
    hideField(button, '.item-enabled');
    hideField(button, '.item-drop-weight');
    hideField(button, '.item-scalability');
    hideField(button, '.item-type');
    hideField(button, '.item-custom-model-id');
    //todo: modify fields as needed
}

//Amount

function simpleItemButton(button) {
    revealItemFields(button);
    clearOldContent(button);
}

function fullSetButton(button) {
    revealItemFields(button);
    let boxContents = button.parentNode.parentNode.parentNode.parentNode;
    clearOldContent(button);
    for (let i = 0; i < 4; i++) {
        let divClone = boxContents.cloneNode(true);
        boxContents.after(divClone);
    }
}

