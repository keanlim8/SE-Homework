console.log($);
class Team {
  constructor(name, $el) {
    this.name = name;
    this.score = 0;
    //lets assign the element to each Team instance
    this.$el = $el;
  }
  //what does the score board do?
  //it increases the score based on pointvalue
  increaseScore(pointValue) {
    // this.score = this.score + pointValue;
    this.score += pointValue;
    //this will now allow us to grab the 1st element and input the score as the text
    //what is eq? it stands for equals and selects children in arry
    // the first child is the h1
    this.$el.children().eq(0).text(this.score);
  }

  decreaseScore(pointValue) {
    this.score -= pointValue;
    this.$el.children().eq(0).text(this.score);
  }
  setup() {
    //select your 2nd child because thats your btn
    this.$el.children().eq(1).on('click', () => {
      //the pt value should be imported from another class
      this.increaseScore(100)

    })
    this.$el.children().eq(2).on('click', () => {
      this.decreaseScore(100)

    })
    //remember to call these methods when you instantiate the class
    return this;
  }

}
$(() => {
  const $tiles = $('.tile').on('click', (event) => {
    $(event.currentTarget).toggleClass('active')
  })
  // const pointValue = 100;
  const team1 = new Team('team1', $('#team1')).setup();
  const team2 = new Team('team2', $('#team2')).setup();
  const team3 = new Team('team3', $('#team3')).setup();
  const team4 = new Team('team4', $('#team4')).setup();
  const team5 = new Team('team5', $('#team5')).setup();
  console.log(team1.$el); //confirm the element is working



  //Make the DIV element draggagle:
  dragElement(document.getElementById("gridscore"));

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementById(elmnt.id)) {
      /* if present, the header is where you move the DIV from:*/
      document.getElementById(elmnt.id).onmousedown = dragMouseDown;
    } else {
      /* otherwise, move the DIV from anywhere inside the DIV:*/
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }


})
