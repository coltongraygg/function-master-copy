//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION SHOULD TAKE AN OBJECT
 * O: FUNCTION SHOULD RETURN THE OBJECT'S VALUES IN AN ARRAY
 * C: FUNCTION EXPECTS TO RECEIVE AN OBJECT WITH KEY VALUE PAIRS
 * E: N/A
 */

function objectValues(object) {
    // create storage array
    let storageArr = [];
    // loop through the object param
    for (var key in object) { 
        storageArr.push(object[key]); // push the object's values to storageArr
    } return storageArr; // return the storage array
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I; FUNCTION SHOULD TAKE AN OBJECT
 * O: FUNCTION SHOULD RETURN THE OBJECT'S KEYS IN A STRING WITH A SPACE BETWEEN EACH KEY
 * C: FUNCTION EXPECTS TO RECEIVE AN OBJECT WITH KEY VALUE PAIRS
 * E: OUTPUT CAN'T HAVE A SPACE AT END OF STRING
 */

function keysToString(object) {
    // create storage string
    let storageStr = '';
    // loop through the object param
    for (var key in object) {
        // concatenate the value with a ' ' space and add it to storageStr
        storageStr += key + ' ';
    }
    // remove the last space in the string
    storageStr = storageStr.slice(0, -1);
    return storageStr; // return the string
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION SHOULD TAKE AN OBJECT
 * O: FUNCTION SHOULD RETURN THE VALUES IN A STRING WITH EACH VALUE SEPERATED W/ A SPACE
 * C: FUNCTION EXPECTS TO RECEIVE AN OBJECT WITH KEY VALUE PAIRS
 * E: OUTPUT CAN'T HAVE A SPACE AT THE END OF STRING
 */

function valuesToString(object) {
    // create storage string
    let storageStr = '';
    // loop through the object param
    for (var key in object) {
        // if the object's key is a string...
        if (typeof object[key] === 'string') {
            // concatenate the key with a ' ' space and add it to storageStr
            storageStr += object[key] + ' ';
        } 
    }
      // remove the last space in the string
      storageStr = storageStr.slice(0, -1) 
      return storageStr;
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * I: FUNCTION RECEIVES A COLLECTION PARAM
 * O: FUNCTION RETURNS EITHER 'ARRAY' OR 'OBJECT' DEPENDING ON ARGUMENT'S DATA TYPE
 * C: FUNCTION EXPECTS TO RECEIVE AN ARRAY OR AN OBJECT AS ARGUMENT
 * E: N/A
  */

function arrayOrObject(collection) {
    // if collection is an object...
    if (typeof collection === 'object' && !Array.isArray(collection) && collection !== null) {
        // return 'object'
        return 'object';
        // else if the collection is an array...
    } else if (Array.isArray(collection)) {
        // return array
        return 'array';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 *  Should take a string of one word, and return the word with its first letter capitalized
 * 
 * I: FUNCTION RECEIVES A STRING OF ONE WORD
 * O: FUNCTION RETURNS THE STRING WITH ITS FIRST LETTER CAPITALIZED
 * C: FUNCTION EXPECTS TO RECEIVE A STRING 
 * E: N/A
 */

function capitalizeWord(string) {
    // capitalize the first character in string, remove the original first character, return the value
    return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Should take a string of words and return a string with all the words capitalized
 * 
 * I: FUNCTION RECEIVES A STRING OF WORDS
 * O: FUNCTION RETURNS A STRING WITH THE FIRST CHAR OF EACH WORD CAPITALIZED
 * C: FUNCTION EXPECTS TO RECEIVE A STRING
 * E: N/A
 */

function capitalizeAllWords(string) {
    // create an array - each index will be a different word in the string
    let stringArr = string.split(' '); 
    // create a storage array for the final result 
    let resultStr = [];
    // loop through the stringArr array - each index is a different word from string
    for (var i = 0; i < stringArr.length; i++) {
        // remove the first character, capitalize it and add it back, push it into the resultStr array
        resultStr.push(stringArr[i][0].toUpperCase() + stringArr[i].slice(1));
    }
    // join (' ') the words back into a single string with a space between each word
    return resultStr.join(' ');
}


//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Should take an object with a name property and return 'Welcome <Name>!'
 * 
 * I: FUNCTION RECEIVES AN OBJECT
 * O: FUNCTION RETURNS 'WELCOME <NAME>!' 
 * C: FUNCTION EXPECTS TO RECEIVE AN OBJECT WITH A NAME PROPERTY THAT CONTAINS A VALUE
 * E: N/A
 */

function welcomeMessage(object) {
    // convert the first character of the object's name (string) to uppercase and assign it to the variable objName
    objName = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    // concatenate & return
    return 'Welcome ' + objName + '!';
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Should take an object with a name an a species and return '<Name> is a <Species>'
 * 
 * I: FUNCTION RECEIVES AN OBJECT
 * O: FUNCTION RETURNS '<NAME> IS A <SPECIES>'
 * C: FUNCTION EXPECTS TO RECEIVE AN OBJECT WITH A NAME AND SPECIES PROPERTY (BOTH WITH VALUES!)
 * E: N/A
 */

function profileInfo(object) {
    // convert the first character of the object's name (string) to uppercase and assign it to the variable objName
    objName = object['name'].charAt(0).toUpperCase() + object['name'].slice(1);
    // convert the first character of the object's species to uppercase and assign it to the variable objSpecies
    objSpecies = object['species'].charAt(0).toUpperCase() + object['species'].slice(1);
    // concatenate & return
    return objName + ' is a ' + objSpecies;
}


//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 *  Should take an object, if this object has a noises array return them as a string separated by a space, if there are no noises return 'there are no noises'
 * 
 * I: FUNCTION RECEIVES AN OBJECT
 * O: FUNCTION RETURNS THE NOISES ARRAY AS A STRING SEPERATED BY A SPACE OR FUNCTION RETURNS 'THERE ARE NO NOISES'
 * C: FUNCTION RETURNS THE NOISES ARRAY ONLY IF THE OBJECT HAS A NOISES ARRAY, OTHERWISE IT RETURNS 'THERE ARE NO NOISES'
 * E: N/A
 */

function maybeNoises(object) {
    // create storage string for noises
    let storageStr = '';
    // if the object has the noises array && if the noises array is not empty...
    if (object['noises'] && object['noises'].length > 0) {
        // loop through noises array
        for (var i = 0; i < object['noises'].length; i++) {
            // for each index of the noise array, pass it to storageStr concatenated with a space ' '
            storageStr += object['noises'][i] + ' ';     
            // return the storageStr and remove the last space ' '       
        } return storageStr.trim();
    } else {
        // otherwise do this
        return 'there are no noises'; 
    }
}



//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false.
 * 
 * I: FUNCTION RECEIVES A STRING OF WORDS AND A STRING OF A SINGLE WORD
 * O: FUNCTION RETURNS TRUE IF WORD IS IN STRING OF WORDS, OTHERWISE FALSE
 * C: FUNCTION EXPECTS TO RECEIVE TWO STRINGS AS ARGUMENTS IN PARAMS
 * E: N/A
 */

function hasWord(string, word) {
    // convert string to an array - with each ' ', create a new index for the word in the string
    let stringArr  = string.split(' ');
    // create a counter variable starting at 0 
    let counter = 0
    // loop through the stringArr
    for (var i = 0; i < stringArr.length; i++) {
        // if the index of string === word, add 1 to the counter
        if (stringArr[i] === word) {
            // add 1 to the counter if so
            counter++;
        }
    }
    // if the counter is positive, return true
    if (counter > 0) {
        return true;
    // otherwise return fasle
    } else {
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Should take a name and an object and add the name to the object's friends array then return the object
 * 
 * I: FUNCTION RECEIVES NAME (STRING) AND OBJECT (OBJECT) 
 * O: FUNCTION ADDS THE NAME TO THE OBJECT'S FRIENDS ARRAY AND RETURNS THE OBJECT
 * C: FUNCTION EXPECTS NAME TO BE A STRING AND EXPECTS OBJECT TO BE AN OBJECT
 * E: N/A
 */

function addFriend (name, object) {
    // push name to object's friends array
    object['friends'].push(name);
    // return object
    return object;

}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Should take a name and an object and return true if <name> is a friend of <object> and false otherwise
 * 
 * I: FUNCTION RECEIVES TWO PARAMS. NAME (STRING) AND OBJECT (OBJECT).
 * O: FUNCTION RETURNS TRUE IF NAME IS A FRIEND OF OBJECT, FALSE OTHERWISE
 * C: FUNCTION EXPECTS TO RECEIVE AN OBJECT THAT HAS A FRIENDS ARRAY 
 * E: N/A
 */

function isFriend(name, object) {
    // if object['friends'] does not exist...
    if (!object['friends']) {
        // return false
        return false;
    }
    // loop through object's friends array
    for (i = 0; i < object['friends'].length; i++) {
        // if the index in the friends array = name...
        if (object['friends'][i] === name) {
            // return true
            return true;
        }
    }  // otherwise return false
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** 
 * Should take a name and a list of people, and return a list of all the names that <name> is not friends with
 * 
 * I: FUNCTION RECEIVES A NAME (STRING) AND ARRAY (ARRAY) 
 * O: FUNCTION RETURNS A LIST OF ALL THE NAMES THAT NAME (STRING PARAM) IS NOT FRIENDS WITH 
 * C: FUNCTION EXPECTS TO RECEIVE A STRING AS NAME AND ARRAY AS ARRAY
 * E: N/A
 */


function nonFriends(name, array) {
    // create storage array for nonFriends
    let nonFriendsArr = [];
    // loop through the outer array
    for (let i = 0; i < array.length; i++) {
        // create variable w/ boolean value to check if the friend array index [j] === name
        let isFriend = false;


        // loop through the inner array - the friends array of the current person
        for (let j = 0; j < array[i].friends.length; j++) {
            // if the current friend array index === name...
            if (array[i].friends[j] === name) {
                // set isFriend to true
                isFriend = true;
                // break the inner loop
                break;
            }


        }
        //if isFriend is false && current person's name !== name...
        if (!isFriend && array[i].name !== name) {
            // push the current person's name to nonFriendsArr
            nonFriendsArr.push(array[i].name);
        }
    }
    // return nonFriendsArr
    return nonFriendsArr;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.
 * I: FUNCTION RECEIVES AN OBJECT, KEY, AND VALUE .
 * O: FUNCTION UPDATES THE PROPERTY KEY ON OBJECT WITH NEW VALUE. IF KEY DOES NOT EXIST ON OBJECT, FUNCTION CREATES IT. 
 * C: FUNCTION MUST RECEIVE AN OBJECT, KEY, AND VALUE.
 * E: N/A
 */

function updateObject(object, key, value) {
    // if key doesn't exist in object...
    if (!object[key]) {
        // assign value to key in object
        object[key] = value;
        // otherwise...
    } else {  
        // assign value to key in object
        object[key] = value; 
    } 
    // return object
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

/**
 * Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>
 * I: FUNCTION RECEIVES AN OBJECT AND AN ARRAY OF STRINGS
 * O: FUNCTION REMOVES ANY PROPERTIES ON THE OBJECT THAT ARE LISTED IN THE ARRAY
 * C: FUNCTION EXPECTS TO RECEIVE AN ARRAY WITH VALUES
 * E: N/A
 */


function removeProperties(object, array) {
    // loop through the array 
    for (let i = 0; i < array.length; i++) {
        // if object has a property with the name array[i]...
        if (object.hasOwnProperty(array[i])) {
            // delete the property
            delete object[array[i]];
        }
    }
}


//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/** 
 * Should take an array and return an array with all the duplicates removed
 * 
 * I: FUNCTION RECEIVES AN ARRAY
 * O: FUNCTION RETURNS AN ARRAY WITH ALL THE DUPLICATES REMOVED
 * C: FUNCTION EXPECTS TO RECEIVE AN ARRAY
 * E: N/A
 */

// dont think of it taking in array of items and returning that array with the duplicates removed (!.includes)

function dedup(array) {


}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}