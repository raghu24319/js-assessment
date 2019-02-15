 stringsAnswers = {
  /**
   * Reduces a string by removing letters that repeat more than amount times.
   * 
   * Example: reduceString('aaaabbb', 1) should reduce to 'ab'
   * Example: reduceString('aaaabbb', 2) should reduce to 'aabb'
   * 
   * @param {String} str - String that is to be reduced
   * @param {Number} amount - The maximum number of adjacent repeated letters in the result string.
   * @returns {String} A string with no more than amount number of repeated letters.
   */
  reduceString: function reduceString(str, amount) {
    let temp;
    let result = [];
    let n = 0;
    str.split("").forEach( ( char, i ) => {
      if ( char !== temp ) {
        result.push( char );
        temp = char;
        n = 0;
      }
      else if ( char === temp && n < amount - 1 ) {
        result.push( char );
        n++;
      }
    } );
    return result.join("");
  },

  /**
   * Reverses a string of text
   * 
   * Example: reverseString('abc') should be 'cba'
   * 
   * @param {String} str - a string of text to be reversed
   * @returns {String} The original string of text str reversed.
   */
  reverseString: function reverseString(str) {
    return str.split("").reverse().join("")
  },
};
