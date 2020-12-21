import { relative } from 'path';
import React from 'react';
import CardContainer from './CardContainer';

interface Props {

};

interface State {
  isPlaying: boolean;
  turn: string;
};

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      isPlaying: false,
      turn: '',
    };
  }

  onGameWin(player: 'X' | 'O') {
    this.setState({ turn: player + ' Wins The Game' });
  }

  onGameDraw() {
    this.setState({ turn: 'Game Draw' });
  }

  onPlayerChange(player: boolean) {
    if (player) {
      return this.setState({ turn: 'X Turn' });
    }
    return this.setState({ turn: 'O Turn' });
  }

  renderBoard(): JSX.Element {
    return (
      <div style={{ display: 'flex', height: "100%" }}>
        <CardContainer
          onGameWin={this.onGameWin.bind(this)}
          onGameDraw={this.onGameDraw.bind(this)}
          onPlayerChange={this.onPlayerChange.bind(this)}
        />
      </div>
    );
  }

  render() {
    return (
      <div className="App">

        {(!this.state.isPlaying) ? (<div className="trans-container"></div>) : ''}

        <div
          style={{
            textAlign: 'center',
            fontSize: '4em',
            fontFamily: 'evilempire'
          }}
        >
          Tic Tac Toe
        </div>

        {
          (this.state.turn !== '') ?
            (
              <div className="status">
                {this.state.turn}
              </div>
            ) : ''
        }
        <div style={{ position: 'relative', flexGrow: 1 }}>


          {
            (!this.state.isPlaying) ?
              (
                <div className="play-btn">

                  <button
                    onClick={() => this.setState({ isPlaying: true })}
                  >
                    Play
                  </button>
                </div>
              ) : ''
          }


          {this.state.isPlaying && this.renderBoard.bind(this)()}
        </div>

        <div className="bottomBar">
          <button
            onClick={() => this.setState({ isPlaying: false, turn: '' })}
          >
            New Game
          </button>
        </div>

      </div>
    );
  }
}

export default App;
