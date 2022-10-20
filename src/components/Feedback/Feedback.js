import React from 'react';



class FeedbackStatistics extends React.Component {
state = {
  good: 0,
  neutral: 0,
  bad: 0
}

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          <button type="button" onClick={this.}></button>
          <button type="button" onClick={this.}></button>
          <button type="button" onClick={this.}></button>
        </div>
      </div>
    )


  }
}

export default FeedbackStatistics;
