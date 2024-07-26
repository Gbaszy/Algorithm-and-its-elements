/*  Algorithm:
Algorithm
Initialize Counters:

sentenceLength to count the number of characters (including spaces and punctuation).
wordCount to count the number of words.
vowelCount to count the number of vowels.
Process Each Character:

Read characters one by one.
For each character:
Increment sentenceLength.
Check if the character is a vowel (a, e, i, o, u in both uppercase and lowercase) and increment vowelCount if it is.
If the character is a space and the previous character was not a space, increment wordCount.
Ensure to account for the last word if the sentence ends with a non-space character.
End of Sentence:

Verify the sentence ends with a period ('.').  */


let sentence = "Hello, how are you doing today?";
analyzeSentence(sentence);
function analyzeSentence(sentence) {
    // Initialize counters
    let sentenceLength = 0;
    let wordCount = 0;
    let vowelCount = 0;
    
    // Iterate through each character in the sentence
    for (let i = 0; i < sentence.length; i++) {
        let char = sentence[i];
        sentenceLength++;  // Count each character
        
        // Check if the character is a vowel (case insensitive)
        if (char.match(/[iamgodwinbassey]/i)) {
            vowelCount++;
        }
        
        // Check if the character is a space to count words
        if (char === ' ') {
            wordCount++;
        }
    }
    
    // Last character is the point '.', so adjust the word count
    if (sentence[sentence.length - 1] === '.') {
        wordCount++;
    }
    
    // Print results
    console.log("Length of the sentence:", sentenceLength);
    console.log("Number of words in the sentence:", wordCount);
    console.log("Number of vowels in the sentence:", vowelCount);
}


