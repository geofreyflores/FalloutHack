function Fallout_hack() {
  this.matches_fn = {};
  
  this.valid = [];
  this.invalid = [];
  
  this.isvalid = function(guess) {
    for (var word in this.matches_fn) {
      if (!this.matches_fn[word](guess) ) {
	    return false;
	  }
    }
	return true;
  };
  
  /* add a guess, and filter if it matches existing clues or not */
  this.addguess = function(guesses) {
    guesses = Array.prototype.slice.call(arguments, 0);
    return guesses.filter(this.isvalid);
  };
  
  /* return function that returns true if match 
   * has the same number and position of letter occurrences as source */
  var matches = function(match, occurrences) {
    return function(guess) {
      var matchocc = 0;
      for (var i = 0; i < match.length; i++) {
        if (match[i] === guess[i]) {
          if (matchocc++ > occurrences) return false;
        }
      }
      return matchocc === occurrences;
    };
  };
  
  /** Add word as a clue with the given matching letters;
   * Revalidates existing valid guesses with the new clue.
   * word clue must have at least 1 matching character (ie. matchnum > 0) */
  this.addclue = function(word, matchnum) {
    if (matchnum < 1 || word.length < matchnum) return;
    this.valid.splice(this.valid.indexOf(word), 1); // remove from valid list
    // create dummy obj that can be used to revalidate valid guesses
    var tmpobj = { matches_fn : {} };
    this.matches_fn[word] = (tmpobj.matches_fn[word] = matches(word, matchnum) );
    
    // re-validate valid guesses
    addguess.call(tmpobj, this.valid);
  };
  
  /* in case user screwed up and added an invalid clue; re-validate invalid guesses */
  this.removeclue = function(word) {
    delete this.matches_fn[word];
    this.addguess(this.invalid);  // revalidate invalid ones
  };

}







