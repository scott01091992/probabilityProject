import React from 'react'

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  render(){
    return (
      <div id="footer">
        <h1 id='footer-title'>The Math: Explained  </h1>
        <div class='row math1-container'>
          <div class='math-paragraph'>
            Lets start off simple. Calculate the odds of rolling a one on a six sided die. To do this we take our desired outcome. Rolling a one. And put it over the possible outcomes. In this case rolling a one, two, three, four, five, or six. We will pretend the dice cannot land on its side for this calculation.
          </div>
          <div id='math1-svg'></div>
        </div>
        <div class='row math2-container'>
          <div class='math-paragraph'>
            Great! We have a 16.67% chance of rolling a one!

            Using that same logic, lets see the odds of rolling an even number.
          </div>
          <div id='math2-svg'></div>
        </div>
        <div class='math-paragraph-wide'>
          50% chance of rolling an even number. We now have the tools to solve for the odds of guessing the first ball of the lottery!
        </div>
        <div id='math3-svg'></div>
        <div class='math-paragraph-wide'>
          Ok so we now know you have about a 1.5% chance of guessing the first ball. But how do you calculate for guessing the first 5 ball, in order? Well... Lets go back to dice for a second. Lets find out the probability we roll a one and rolling a two. (Again, on a 6 sided die.) To do this we just take the product of the probabilities of each independent event.
        </div>
        <div id='math4-svg'></div>
        <div class='math-paragraph-wide'>
          Ok so we can solve for the odds of two independent things happening. BUT we also need to account for the fact that when a ball is draw, it is removed from the possible numbers that can be drawn next. So here is how we deal with that. A formula to find combinations accounting for no repetition!
        </div>
        <div id='math5-svg'></div>
        <div class='math-paragraph-wide'>
          So for this example, we are taking 2 pieces of pie. But after we take the first piece there is only 7 slices left.
        </div>
        <div id='math6-svg'></div>
        <div class='math-paragraph-wide'>
          And thats all the math you need. So here how we figure out the odds of winning the lottery. We use the odds of getting 5 numbers in a row with 69 possible outcomes for them. Then combine the odds of that with the independent 6th ball, which is the powerball, and can only be between 1 and 26. So heres the math. And Also, the code. :)
        </div>
        <div id='math7-svg'></div>
        <div class='math-paragraph-wide'>
          Reducing this further gives you .000000008897974313861629. Those are your odds of winning the jackpot! Hopefully that make sense and you have a better understanding of the Lottery. If you see something I got wrong, or if you think something should be added. Please scroll down and leave me a bit of feedback. Or just say hi :)
        </div>
      </div>
    )
  }
}
export default Footer;
