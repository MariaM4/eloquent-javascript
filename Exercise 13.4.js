SokobanGame.keyDown = function(event) {
  if (arrowKeyCodes.contains(event.keyCode)) {
    event.stop();
    this.field.move(arrowKeyCodes.lookup(event.keyCode));
    if (this.field.won()) {
      if (this.level < sokobanLevels.length - 1) {
        alert("Excellent! Going to the next level.");
        this.level++;
        this.reset();
      }
      else {
        alert("You win! Game over.");
        this.newGame();
      }
    }
  }
};