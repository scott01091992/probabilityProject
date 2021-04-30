import React from 'react';

let createLottoWinnerNoRepeat = () => {
  let tic = [];
  for(let i = 0; i <= 4; i = tic.length){
    let r = Math.floor(Math.random()*69)+1;
    if(tic.filter(num => num == r).length == 0){
      tic.push(r);
    }
  }
  tic.push(Math.floor(Math.random()*26)+1);
  return tic;
}
console.log(createLottoWinnerNoRepeat());

class Game extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      ticketWallet: [],
      lottoWinner: createLottoWinnerNoRepeat(),
      inputnum: [],
      input: [0,0],
      drawWinner: false,
      moneySpent: 0,
      moneyWon: 0,
      jackpot: 20485235,
      error: ""
    }
    this.createLottoWinner = this.createLottoWinner.bind(this);
    this.buyOne = this.buyOne.bind(this);
    this.buyFive = this.buyFive.bind(this);
    this.buyTwenty = this.buyTwenty.bind(this);
    this.inputKey = this.inputKey.bind(this);
    this.drawWinner = this.drawWinner.bind(this);
    this.resetGame = this.resetGame.bind(this);
    this.buyTicket = this.buyTicket.bind(this);
  }
  componentDidMount() {
   this.jpcount = setInterval(()=>this.jackpotCounter(), 1000);
  }

  componentWillUnmount() {
   // use intervalId from the state to clear the interval
   clearInterval(this.jpcount);
  }
  jackpotCounter(){
    let pot = this.state.jackpot;
    pot += Math.floor(Math.random()*150)+20;
    this.setState({
    jackpot: pot
    });
  }
  buyTicket(){
    if(this.state.inputnum.length==6){
      let tempState = this.state.ticketWallet;
      let tempTicket = this.state.inputnum;
      let bought = this.state.moneySpent;
      bought+=1;
      tempState.push(tempTicket);
      this.setState({
        inputnum: [],
        ticketWallet: tempState,
        moneySpent: bought,
        error: ""
      })
    }else{
      this.setState({error: "Not enough numbers"})
    }
  }
  drawWinner(){
    let mytickets = this.state.ticketWallet;
    let winningnum = this.state.lottoWinner;
    let winnings = 0;
    for(let i = 0; i < mytickets.length; i++){
         let powerballMatch = false;
         let matches = 0;
         if(mytickets[i][5] == winningnum[5]){
           powerballMatch = true;
         }
         for(let j = 0; j < 4; j++){
           matches += winningnum.filter(num=>num==mytickets[i][j]).length;
         }
         console.log('entry:'+i+' matches:'+matches+' powerball: '+powerballMatch)
         if(powerballMatch == true){
           switch(matches){
             case 0:
                winnings += 2;
                break;
             case 1:
                winnings += 4;
                break;
             case 2:
                winnings += 10;
                break;
             case 3:
                winnings += 200;
                break;
             case 4:
                winnings += 10000;
                break;
             case 5:
                winnings += this.state.jackpot;
                break;
             default:
                break;
           }
         }else{
           switch(matches){
             case 3:
                winnings += 10;
                break;
             case 4:
                winnings += 500;
                break;
             case 5:
                winnings += 1000000;
                break;
             default:
                break;
           }
        }
    console.log(winnings);
    let money = this.state.moneyWon;
    money += winnings;
    this.setState({
      drawWinner: true,
      moneyWon: money
    })
  }
}
  resetGame(){
    this.setState({
      drawWinner: false,
      lottoWinner: createLottoWinnerNoRepeat(),
      ticketWallet: [],
      inputnum: [],
      input: [0,0]
    });
  }
  createLottoWinner(){
    this.setState({
      lottoWinner: createLottoWinnerNoRepeat()
    })
  }

  buyOne(){
    let temp = this.state.ticketWallet;
    let bought = this.state.moneySpent;
    bought+=1;
    temp.push(createLottoWinnerNoRepeat());
    this.setState({
      ticketWallet: temp,
      moneySpent: bought
    });
  }
  buyFive(){
    let temp = this.state.ticketWallet;
    let bought = this.state.moneySpent;
    bought+=5;
    for(let i = 0; i < 5; i++){
      temp.push(createLottoWinnerNoRepeat());
    }
    this.setState({
      ticketWallet: temp,
      moneySpent: bought
    });
  }
  buyTwenty(){
    let temp = this.state.ticketWallet;
    let bought = this.state.moneySpent;
    bought+=20;
    for(let i = 0; i < 20; i++){
      temp.push(createLottoWinnerNoRepeat());
    }
    this.setState({
      ticketWallet: temp,
      moneySpent: bought
    });
  }
  inputKey(e){
    let key = e.target.innerHTML;
    let inputState = parseInt(this.state.input[0].toString()+this.state.input[1].toString());
    if(key == 'CLR'){
      this.setState({
        input: [0,0],
        inputnum: []
      })
    }else if(key == 'OK'){
      //if inputstate is in input num already -> do not allow
      if(this.state.inputnum.length == 5){
        if(inputState > 0 && inputState < 26){
          let tempState = this.state.inputnum;
          tempState.push(inputState);
          this.setState({
            inputnum: tempState,
            input: [0,0],
            error: ""
          })
        }else{
          this.setState({
            error: "Powerball requirement: a number between 0 and 26"
          })
        }
      }else if(this.state.inputnum.length > 5){
        this.setState({error: "All ticket numbers complete, please buy ticket or clr input"})
      }else if(this.state.inputnum.filter(num => num == inputState).length != 0){
        this.setState({error: "This number has already been selected"})
      }
      else{
          if(inputState > 0 && inputState < 70){
            let tempState = this.state.inputnum
            tempState.push(inputState);
            this.setState({
              inputnum: tempState,
              input: [0,0],
              error: ""
            })
          }else{
            this.setState({
              error: "Lottoball requirement: a number between 0 and 70"
            })
          }
      }
    }else if(key >= 0 && key < 10){
      let tempState = this.state.input;
      tempState.push(key);
      tempState.shift();
      this.setState({
        input: tempState,
        error: ""
      })
    }
    console.log(key);
  }

  render(){
    let hiddenNum;
    let drawResetButtonToggle;
    let buttonDisabler;
    if(this.state.drawWinner){
      hiddenNum = [
        <div className='lotto-ball animate-reveal-lottoball1'>{this.state.lottoWinner[0]}</div>,
        <div className='lotto-ball animate-reveal-lottoball2'>{this.state.lottoWinner[1]}</div>,
        <div className='lotto-ball animate-reveal-lottoball3'>{this.state.lottoWinner[2]}</div>,
        <div className='lotto-ball animate-reveal-lottoball4'>{this.state.lottoWinner[3]}</div>,
        <div className='lotto-ball animate-reveal-lottoball5'>{this.state.lottoWinner[4]}</div>,
        <div className='pwrball animate-reveal-pwrball'>{this.state.lottoWinner[5]}</div>
      ];
      drawResetButtonToggle = <button id='draw-winner-button' onClick={this.resetGame}>Reset Game</button>
    }else{
      hiddenNum = [
        <div className='lotto-ball animate-lottoball'>?</div>,
        <div className='lotto-ball animate-lottoball'>?</div>,
        <div className='lotto-ball animate-lottoball'>?</div>,
        <div className='lotto-ball animate-lottoball'>?</div>,
        <div className='lotto-ball animate-lottoball'>?</div>,
        <div className='pwrball animate-pwrball'>?</div>
      ];
      drawResetButtonToggle = <button id='draw-winner-button' onClick={this.drawWinner}>Draw Winner</button>
    }

    return (
      <div id="game">
        <h2 id='simulation-title'>Lottery Simulation</h2>
        <div className='row'>
          <div id="ticket-machine">
            <h3 className='section-title'>Tickets Purchased: <span className='counter'>{this.state.ticketWallet.length}</span></h3>
            <div id='ticket-wallet'>
              {
                  this.state.ticketWallet.map(ticket => (
                  <div className='ticket'>
                    <div className={this.state.lottoWinner.filter((num, idx) => num == ticket[0] && idx != 5).length>0 && this.state.drawWinner ? 'lotto-ball matched' : 'lotto-ball'}>{ticket[0]}</div>
                    <div className={this.state.lottoWinner.filter((num, idx) => num == ticket[1] && idx != 5).length>0 && this.state.drawWinner ? 'lotto-ball matched' : 'lotto-ball'}>{ticket[1]}</div>
                    <div className={this.state.lottoWinner.filter((num, idx) => num == ticket[2] && idx != 5).length>0 && this.state.drawWinner ? 'lotto-ball matched' : 'lotto-ball'}>{ticket[2]}</div>
                    <div className={this.state.lottoWinner.filter((num, idx) => num == ticket[3] && idx != 5).length>0 && this.state.drawWinner ? 'lotto-ball matched' : 'lotto-ball'}>{ticket[3]}</div>
                    <div className={this.state.lottoWinner.filter((num, idx) => num == ticket[4] && idx != 5).length>0 && this.state.drawWinner ? 'lotto-ball matched' : 'lotto-ball'}>{ticket[4]}</div>
                    <div className={this.state.lottoWinner[5]==ticket[5] && this.state.drawWinner ? 'pwrball pwrmatched' : 'pwrball'}>{ticket[5]}</div>
                  </div>)
              )}
            </div>
            <h3 className='section-title'>Money Spent : <span className='counter'>${this.state.moneySpent}</span></h3>
            <h3 className='section-title title-spacing'>Money Won : <span className='counter'>${this.state.moneyWon}</span></h3>
            <div id='buy-tickets'>
              <button disabled={this.state.drawWinner} className='buy-button' onClick={this.buyTwenty} > Buy 20 Random Tickets <span className='counter'>$20</span></button>
              <button disabled={this.state.drawWinner} className='buy-button' onClick={this.buyFive}> Buy 5 Random Tickets <span className='counter'>$5</span></button>
              <button disabled={this.state.drawWinner} className='buy-button' onClick={this.buyOne}> Buy 1 Random Ticket <span className='counter'>$1</span></button>
            </div>
          </div>
          <div id='lotto-machine'>
            <h1 className='section-title'>Jackpot: <span className='counter'>${this.state.jackpot}</span><span className='counter'></span></h1>
            <div id='super-ball'>
              <div id='winning-numbers'>
                {hiddenNum}
              </div>
            </div>
            <div id='machine-buttons'>
              <button disabled={this.state.drawWinner} id='buy-ticket-button' onClick={this.buyTicket}>Buy Ticket</button>
              {drawResetButtonToggle}
            </div>
            <div id='input-numbers'>
              <div className='input-number'>{this.state.inputnum[0]}</div>
              <div className='input-number'>{this.state.inputnum[1]}</div>
              <div className='input-number'>{this.state.inputnum[2]}</div>
              <div className='input-number'>{this.state.inputnum[3]}</div>
              <div className='input-number'>{this.state.inputnum[4]}</div>
              <div className='pwr-input-number'>{this.state.inputnum[5]}</div>
            </div>
            <div id='input-ball'>{this.state.input[0].toString()+ this.state.input[1].toString()}</div>
            <div id='error-message'>{this.state.error}</div>
            <div id='keypad'>
              <button className='input-key' onClick={this.inputKey}>7</button>
              <button className='input-key' onClick={this.inputKey}>8</button>
              <button className='input-key' onClick={this.inputKey}>9</button>
              <button className='input-key' onClick={this.inputKey}>4</button>
              <button className='input-key' onClick={this.inputKey}>5</button>
              <button className='input-key' onClick={this.inputKey}>6</button>
              <button className='input-key' onClick={this.inputKey}>1</button>
              <button className='input-key' onClick={this.inputKey}>2</button>
              <button className='input-key' onClick={this.inputKey}>3</button>
              <button className='input-key' onClick={this.inputKey}>0</button>
              <button className='input-key' onClick={this.inputKey}>CLR</button>
              <button className='input-key' onClick={this.inputKey}>OK</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Game;
