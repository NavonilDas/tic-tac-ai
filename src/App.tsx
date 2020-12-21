import React from 'react';
import CardContainer from './CardContainer';

interface Props {

};

interface State {
};

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <div>

        <div style={{ display: 'flex' }}>
          <CardContainer
            onGameWin={(player) => console.log(player + ' Wins')}
            onGameDraw={() => console.log('Draw')}
            onPlayerChange={(player) => console.log((player) ? 'X Plays' : 'O Plays')}
          />
        </div>

      </div>
    );
  }
}

export default App;
