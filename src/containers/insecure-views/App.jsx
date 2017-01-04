const React = require('react');
const Radium = require('radium');
const Container = require('../components/Container');

const { StyleRoot, Style } = Radium;


class App extends React.Component {
  render() {
    return (
      <StyleRoot>
        <Style rules={{
          body: {
            margin: '0',
          },
          html: {
            backgroundColor: '#dad9d7',
            width: '100%',
            height: '100%',
          }
        }}/>
        <Container>
          { this.props.children }
        </Container>
      </StyleRoot>
    );
  }
}

module.exports = Radium(App);
