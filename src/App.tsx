import React from 'react';
import CardContainer from './CardContainer';

interface Props {

};

interface State {
};

class App extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
  }


  render() {
    return (
      <div>

        <div className="">
          <CardContainer />
        </div>
        
      </div>
    );
  }
}

export default App;
