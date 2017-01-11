const React = require('react');
const Radium = require('radium');
const Header = require('./Header');
const Footer = require('./Footer');


const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    width: '100%',
    marginTop: '80px',
  }
};


class Container extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        <div style={ styles.main }>
          { this.props.children }
        </div>
        <Footer/>
      </div>
    );
  }
}

module.exports = Radium(Container)
