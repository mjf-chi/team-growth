const React = require('react');
const Radium = require('radium');
const TopicBox = require('../components/TopicBox');
const data = require('../../data/stubTopics');


class TopicsView extends React.Component {
  render() {
    let topics = data.map((item, idx) => {
      let topic = <TopicBox key={ `idx-${item.name}` }
                            name={ item.name }
                            description={ item.description }
                            numResources={ item.numResources }/>;
      return topic;
    });

    return (
      <div>
        <div>
          { this.props.params.departmentName }
        </div>
        <div>
          { topics }
        </div>
      </div>
    );
  }
};

module.exports = Radium(TopicsView);
