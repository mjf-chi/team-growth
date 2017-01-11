const React = require('react');
const Radium = require('radium');


const styles = {
  main: {
    position: 'absolute',
    top: '0px',
    left: '0px',
    height: '80px',
    width: '100%',
    backgroundColor: '#fff',
    boxShadaow: '0 2px 9px 0 rgba(0, 0, 0, 0.03)',
    border: 'solid 1px rgba(0, 0, 0, 0.02)',
  },
  container: {
    width: '100%',
    height: '100%',
    maxWidth: '1200px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  logo: {
    height: '33px',
    display: 'inline-block',
  },
  logoAddition: {
    color: '#b0b0b0',
    fontSize: '16px',
    display: 'inline-block',
    marginLeft: '5px',
  },
  logoSection: {
    display: 'inline-flex',
    alignItems: 'center',
    height: '100%',
  },
}

class Header extends React.Component {
  render() {
    return (
      <div style={ styles.main }>
        <div style={ styles.container }>
          <div style={ styles.logoSection }>
            <img src="https://cdn.joinhoney.com/images/honey-logo-black.svg" style={ styles.logo }/>
            <div style={ styles.logoAddition }>
              academy
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = Radium(Header);


