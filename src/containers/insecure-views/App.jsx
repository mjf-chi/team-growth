const React = require('react');
const Radium = require('radium');
const Container = require('../components/Container');

const { StyleRoot, Style } = Radium;


class App extends React.Component {
  render() {
    return (
      <StyleRoot radiumConfig={{ userAgent:'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/55.0.2883.95 Safari/537.36' }}>
        <Style rules={{
          body: {
            margin: '0',
          },
          html: {
            backgroundColor: '#fafafa',
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
