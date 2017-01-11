const React = require('react');
const Radium = require('radium');


class TopicBox extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <div>
          { this.props.name } ({ this.props.numResources })
        </div>
        <div>
          { this.props.description }
        </div>
      </div>
    );
  }
}

module.exports = Radium(TopicBox);
