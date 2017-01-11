const React = require('react');
const Radium = require('radium');
const { Link } = require('react-router');

const styles = {
  main: {
    display: 'inline-flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex: '1',
    flexDirection: 'column',
    width: '250px',
    maxWidth: '250px',
    height: '230px',
    backgroundColor: '#fff',
    border: 'solid 1px rgba(0, 0, 0, rgba(0, 0, 0, 0.02))',
    borderRadius: '3px',
    boxShadow: '0 2px 9px 0 rgba(0, 0, 0, 0.02)',
    textDecoration: 'none',
    padding: '35px',
  },
  department: {
    fontWeight: '600',
    fontSize: '22px',
    color: '#292a2a',
    marginBottom: '15px',
  },
  topics: {
    fontSize: '18px',
    color: '#f76800',
    textDecoration: 'underline,'
  },
};

const defaultProps = {
  departmentName: 'Business',
  numTopics: 0,
};


class DepartmentCard extends React.Component {
  render() {
    let name = this.props.departmentName || defaultProps.departmentName;
    let topicPath = `/topics/${ name }`;

    return (
      <Link to={ topicPath } style={ styles.main }>
        <div>

        </div>
        <div style={ styles.department }>
          { name }
        </div>
        <div style={ styles.topics }>
          { this.props.numTopics || defaultProps.numTopics } topics
        </div>
      </Link>
    );
  }
};

module.exports = Radium(DepartmentCard);
