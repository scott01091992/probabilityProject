import React from 'react'

class Summary extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  render(){
    return (

      <div id="summary">
        <div id='summary-left'>
            <section id='summary-preface'>
              <h3 class='section-title'>Preface:</h3>
              <p class='section-paragraph'>
                Every once in a while I will end up in a conversation about the Lottery. Unfortunately, I usually try to make the argument that the odds of winning are just too low. Finally, after pursing my career in data science, i can showcase why I dont play. Below you will find a simulation of the lottery. You can buy as many tickets as you want for free, play as many Lotteries as you want, but every ticket you buy will be tracked. See how much you spend and how often you win.
              </p>
            </section>
            <section id='summary-define'>
              <h3 class='section-title'>Ok, but what is a Lottery?</h3>
              <p class='section-paragraph'>
                A Lottery is a form a gambling where the winner is randomly chosen by picking numbers. In the United States there are 2 major lotteries; Power ball and Mega Millions. Lotteries are slowly being frowned upon by some states and might be a thing of the past in the near future.
              </p>
            </section>
            <section id='summary-play'>
              <h3 class='section-title'>How To Play:</h3>
              <p class='section-paragraph'>
                Playing the Lottery is simple. First, Pick 5 numbers between 0 and 71. Then, pick 1 number between 0 and 26. Then, wait for the winning numbers to be drawn. You can play as many tickets as you want. So feel free to try to increase your odds by spending more.
              </p>
            </section>
        </div>
        <div id='summary-right'>
          <div id='howtowin'>
            <h3 class='section-title'>How To Win:</h3>
            <div id='howtowin-background'>
                <div id='howtowin-board'>
                  <div class='jack-pot-row'>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-sign'>+</div>
                    <div class='jackpot-powerball'>P</div>
                    <div class='jackpot-prize'>$$$JACKPOT$$$</div>
                  </div>
                  <div class='jack-pot-row'>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-prize'>$1,000,000</div>
                  </div>
                  <div class='jack-pot-row'>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-sign'>+</div>
                    <div class='jackpot-powerball'>P</div>
                    <div class='jackpot-prize'>$10,000</div>
                  </div>
                  <div class='jack-pot-row'>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-prize'>$500</div>
                  </div>
                  <div class='jack-pot-row'>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-sign'>+</div>
                    <div class='jackpot-powerball'>P</div>
                    <div class='jackpot-prize'>$200</div>
                  </div>
                  <div class='jack-pot-row'>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-prize'>$10</div>
                  </div>
                  <div class='jack-pot-row'>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-sign'>+</div>
                    <div class='jackpot-powerball'>P</div>
                    <div class='jackpot-prize'>$10</div>
                  </div>
                  <div class='jack-pot-row'>
                    <div class='jackpot-lottoball'>00</div>
                    <div class='jackpot-sign'>+</div>
                    <div class='jackpot-powerball'>P</div>
                    <div class='jackpot-prize'>$4</div>
                  </div>
                  <div class='jack-pot-row'>
                    <div class='jackpot-powerball'>P</div>
                    <div class='jackpot-prize'>$2</div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Summary;
