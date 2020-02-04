/**
 * Function to print high scores
 * 
 * @description
 * This function will:
 *  - [ ] Retrieve the high scores
 *  - [ ] Display high scores in descending order
 * 
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 * @see https://www.w3schools.com/jsref/jsref_sort.asp
 * @see https://www.w3schools.com/jsref/met_node_appendchild.asp
 * @see https://www.w3schools.com/jsref/met_document_createelement.asp
 */
function printHighscores() {

  // var para = document.createElement("P");
  // para.innerHTML = "This is a paragraph.";
  // document.getElementById("highscores").appendChild();


  // document.getElementById("initialP").innerHTML = localStorage.getItem("initial");
  
  // document.getElementById("scoreP").innerHTML = localStorage.getItem("userscore");

  
  /*
    @TODO: write your function code here
  */
  
}


/**
 * Function to clear high scores
 * 
 * @description
 * This function will:
 *  - [ ] Clear all the high scores
 *  - [x] Reload the window
 * 
 * @see https://www.w3schools.com/jsref/prop_win_localstorage.asp
 */
function clearHighscores() {

  localStorage.clear();


  /*
    @TODO: write the rest of your function code here
  */

  // reload window
  window.location.reload();

}


// user clicks button to clear high scores
document.getElementById("clear").onclick = clearHighscores;

// run function when page loads
printHighscores();
