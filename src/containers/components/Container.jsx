const React = require('react');
const Radium = require('radium');

const styles = {
  main: {
    height: '100%',
    width: '100%',
  },
  header: {
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100%',
    padding: '20px',
    minHeight: '70px',
  },
  hOpen: {
    height: '210px',
  },
  closed: {
    marginTop: '70px',
  },
  open: {
    marginTop: '210px',
  },
  logo: {
    display: 'inline-block',
    color: '#FD6260',
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: "'Helvetica', sans-serif",
  }

}

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false,
    };
  }

  render() {
    let containerStyle;
    let headerStyle = styles.header;

    if(this.state.open){
      containerStyle = styles.open;
      headerStyle = Object.assign(styles.header, hOpen);
    }
    else{
      containerStyle = styles.closed;
    }

    return (
      <div>
        <div style={ headerStyle }>
          <div style={ styles.logo }>
            team-growth
          </div>
        </div>
        <div style={ containerStyle }>
          { this.props.children }
        </div>
      </div>
    );
  }
}

module.exports = Radium(Container)
