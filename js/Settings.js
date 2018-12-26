// @ts-check
/* global Noty */

let settings = {};

function setAllSettings (newSettings) {
    settings = newSettings;
}

function setSetting (settingName, value) {
    settings[settingName] = value;
}

// Saving and loading
function loadSettings (saveString) {
    // Load the settings dictionary using a save string generated by saveSettings().
    // For example, loadSettings(saveSettings()) should do exactly nothing.

    // split on "$", and then for each split on "#".
    // A little bit worried about the values having to be strings to store them
    // correctly -- we can parse them back into ints here
    let saveComponents = saveString.split("$");

    for (const component of saveComponents) {
        const kv = component.split("#");
        if (!isNaN(kv[1])) {
            kv[1] = +kv[1];
        }
        settings[kv[0]] = kv[1];
    }
}

function saveSettings () {
    // Save the current settings dictionary into a string of key-value pairs,
    // to be loaded by loadSettings at a later time.  Return this save string.

    let saveString = Object.keys(settings).map(key => key + "#" + settings[key].toString()).join("$");
    return saveString;
}

export { loadSettings, saveSettings, settings, setSetting, setAllSettings };
