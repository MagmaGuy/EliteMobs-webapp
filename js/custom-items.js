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
    let container = button.parentNode.parentNode.parentNode;
    transitionContent(button, 'template-custom-items-global');
    //Add plus buttons to string lists
    for (const child of container.getElementsByClassName('config-list')) {
        child.parentNode.after(document.getElementById('template-plus-button').content.cloneNode(true));
    }
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
    const container = button.parentNode.parentNode.parentNode;
    transitionContent(button, 'template-custom-items-amount');
    hideField(container.getElementsByClassName('item-enabled')[0]);
    hideField(container.getElementsByClassName('item-drop-weight')[0]);
    hideField(container.getElementsByClassName('item-scalability')[0]);
    hideField(container.getElementsByClassName('item-type')[0]);
    hideField(container.getElementsByClassName('item-custom-model-id')[0]);
    hideField(container.getElementsByClassName('item-permission')[0]);
    //todo: modify fields as needed
}

function charmButton(button) {
    const container = button.parentNode.parentNode.parentNode;
    transitionContent(button, 'template-custom-items-amount');
    hideField(container.getElementsByClassName('item-enabled')[0]);
    hideField(container.getElementsByClassName('item-scalability')[0]);
    hideField(container.getElementsByClassName('item-type')[0]);
    hideField(container.getElementsByClassName('item-custom-model-id')[0]);
    hideField(container.getElementsByClassName('item-permission')[0]);
    //todo: modify fields as needed
}

function fetchQuestItem(button) {
    const container = button.parentNode.parentNode.parentNode;
    //transitionContent(button, 'template-custom-items-amount');
    revealItemFields(button);
    clearOldContent(button);
    hideField(container.getElementsByClassName('item-enabled')[0]);
    hideField(container.getElementsByClassName('item-drop-weight')[0]);
    hideField(container.getElementsByClassName('item-scalability')[0]);
    hideField(container.getElementsByClassName('item-type')[0]);
    hideField(container.getElementsByClassName('item-custom-model-id')[0]);
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

