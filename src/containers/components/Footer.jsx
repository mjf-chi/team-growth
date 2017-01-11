const React = require('react');
const Radium = require('radium');

const styles = {
  main: {
    height: '80px',
    width: '100%',
    backgroundColor: '#292a2a',
  }
};


module.exports = class Footer extends React.Component {
  render() {
    return (
      <div style={ styles.main }>
      </div>
    );
  }
};
