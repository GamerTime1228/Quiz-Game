class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number
   this.input2 = createInput("Enter the Answer....");


    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');



    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   

    //Add hide() for questions, options & input box
    this.question.hide();

    this.option1.hide();
    this.option2.hide();
    this.option3.hide();
    this.option4.hide();

    this.input2.hide();




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Question: What is Jerod's favorite number?");
    this.question.position(275, 75);

    this.option1.html("A: 2");
    this.option1.position(225, 100);

    this.option2.html("B: 12");
    this.option2.position(225, 125);

    this.option3.html("C: 28");
    this.option3.position(225, 150);

    this.option4.html("D: 148");
    this.option4.position(225, 175);



    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.hide();

      this.message.html("Thank You For Guessing! The answer was 28!")
      this.message.position(300, 150);
    })


  }
}
