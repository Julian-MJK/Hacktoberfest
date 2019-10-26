/**
 * This code-snippet is a really neat and organized way to gather keypresses from the user, making it easy to do all sorts of things!
 *
 * This code-snippet automatically puts pressed keys into an object, and removes them from
 * the object when the key is no longer press, it also logs previously pressed keys into an array (letting you check the konami code, amongst other, more sensible things) 
 */


echo.keys = false; //if true, console.log's keydown events.

/** 
 * Summary for using this snippet:
 * 'keys' is an object containing the states of all until-now pressed keys.
 * when a key is pressed, it's name is put into the object and given the value "true".
 * when a key is released, it's given the value "false".
 * The keyboard-keys are stored as object-keys, with the name of the keyboard-key as its name.
 * So "keys.<keyName>" will return true or false depending on if it's pressed.
 * E.g.: "if(keys.shift){ <do stuff> }"
 * directional keys = "arrow"+direction
 */

var keys = {}; //all lowercase
var keysCS = {}; //CaSE SeNsItIvE
var keyLog = [];
var keyLog_limit = 100;
var logKeys = false;

/**
 * @function
 * @desc logs the pressed key into keys and keysCS with value true, and runs keys_preventCombinations
 * @param event {event} - the event
 */
window.addEventListener("keydown", function(event) {
    keys[event.key.toLowerCase()] = true;
    keysCS[event.key] = true;
    keys_preventCombinations(event);
    if (echo.keys) console.log("↓ " + event.key);
});

/**
 * @function
 * @desc sets value of unpressed key to false in keys and keysCS, and runs various functions.
 * @param event {event} - the event
 */
window.addEventListener("keyup", function(event) {
    keys[event.key.toLowerCase()] = false;
    keysCS[event.key] = false;
    //Example use with a konamicode-checking function: if(logKeys){ if(keyLog.length>keyLog_limit) keyLog.shift(); keyLog.push(event.key); keyComboCheck(); } //{ keyLog.unshift(event.key); konamiCodeCheck(); 
    if(keyLog.length > keyLog_limit) keyLog.pop();
});
