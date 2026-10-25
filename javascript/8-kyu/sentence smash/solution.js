function smash(words) {
    let smashedWord = '';
    // Check if there is a word in words. Return an empty string if there is not.
    if (words.length === 0) {
        return '';
    }
    // If there is only one word then return the word.
    else if (words.length === 1) {
        return words[0];
    }
    // Smash the words together.
    else {
        for (let i = 0; i < words.length; i++) {
            if (i === 0) {
                smashedWord = words[i];
            }
            else {
                smashedWord = smashedWord + ' ' + words[i];
            }
        }
        return smashedWord;
    }
};