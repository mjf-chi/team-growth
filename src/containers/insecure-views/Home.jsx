const React = require('react');
const DepartmentCard = require('../components/DepartmentCard');


const styles = {
  main: {
    width: '100%',
    maxWidth: '1200px',
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'rows',
    borderBottom: 'solid 1px #e0e0e0',
    paddingBottom: '60px',
    marginBottom: '40px',
  },
  bottomContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  header: {
    marginTop: '50px',
    fontSize: '38px',
    fontWeight: '600',
  },
  leftContain: {
    display: 'inline-flex',
    flex: '1',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  leftHead: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '18px',
  },
  leftText: {
    fontSize: '16px',
  },
  rightContain: {
    display: 'inline-flex',
    justifyContent: 'center',
    flex: '1',
    alignItems: 'center',
  },
  rightImage: {
    width: '80%',
  },
  bottomHeader: {
    fontWeight: '600',
    fontSize: '20px',
    marginBottom: '40px',
  }
};


module.exports = class Home extends React.Component {
  render() {
    return (
      <div style={ styles.main }>
        <div style={ styles.header }>
          Cheeky phrase here
        </div>
        <div style={ styles.topContainer }>
          <div style={ styles.leftContain }>
            <div style={ styles.leftHead }>
              Keep growing so we can make Honey even better
            </div>
            <div style={ styles.leftText }>
              Working with Honey's experience community, Honey Academy is providing everyone at
              Honey the opportunity to learn any aspect of the company they're curiosity leads
              them to.
            </div>
          </div>
          <div style={ styles.rightContain }>
            <img src="https://cdn.joinhoney.com/images/honey-academy.png"
                 style={ styles.rightImage }/>
          </div>
        </div>
        <div>
          <div style={ styles.bottomHeader }>
            Departments:
          </div>
          <div style={ styles.bottomContainer }>
            <DepartmentCard departmentName='Business'
                            numTopics={17}/>
            <DepartmentCard departmentName='Engineering'
                            numTopics={17}/>
            <DepartmentCard departmentName='Design'
                            numTopics={17}/>
          </div>
        </div>
      </div>
    );
  }
}
