class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("COVID-19 SURVEY");
    title.position(110, 0);

    var button = createButton('Done');
    var next1 = createButton('Next');

    var input = createInput("Answer");
    var input2 = createInput("Email");
    var input3 = createInput("Name");
    var input4 = createInput("Answer");
    var input5 = createInput("Email");
    var input6 = createInput("Name");
    input4.position(10000000000000, 500);
    input5.position(10000000000000, 500);
    input6.position(10000000000000, 500);
    button.position(10000000000000, 500);
    
    var question1 = createElement('h4');
    question1.html(" Q1-Do you think COVID-19 can transmit through<br> newspapers? Answer in yes or no. ");
    question1.position(20,70);
    
    input.position(130, 160);
    input2.position(130,200);
    input3.position(130,240);
    next1.position(250, 300);

    next1.mousePressed(function(){
      input.hide();
      input2.hide();
      input3.hide();
      next1.hide();
      question1.hide();
      var question2 = createElement('h4');
    question2.html(" Q2-What are your opinions about the LockDown<br> and Corona Virus? ");
    question2.position(20,70);
    input4.position(130, 160);
    input5.position(130,200);
    input6.position(130,240);
    button.position(250, 300);
    })

    button.mousePressed(function(){
     
      //question2.hide();
      input4.hide();
      input5.hide();
      input6.hide();
      button.hide();

      var voterName = input.value();
      var voterEmail = input.value();
      var voterAnswer = input.value();

      
      voterCount+=1;
      voter.update(voterName);
      voter.update(voterEmail);
      voter.update(voterAnswer);
      voter.updateCount(voterCount);
      var greeting = createElement('h3');
      greeting.html("Thanks a lot ");
      greeting.position(160, 160)

      var greeting = createElement('h3');
      greeting.html("~By Hardhik ");
      greeting.position(160, 200);
    });

  }
}
