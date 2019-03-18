import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      clean,
      busy,
      onTime,
      comment,
      handleChange,
      handleSubmit
    } = this.props;
    return (
      <form>
        <h2>Comment Form</h2>
        <label htmlFor="clean">Scale of 1-5, was the station clean</label>
        <input
          type="text"
          name="clean"
          value={clean}
          id="clean"
          onChange={handleChange}
        />
        <label htmlFor="busy">Scale of 1-5, was the station busy</label>
        <input
          type="number"
          name="busy"
          value={busy}
          id="busy"
          onChange={handleChange}
        />
        <label htmlFor="onTime">
          How long did it take for your train to arrive?
        </label>
        <input
          type="text"
          name="onTime"
          value={onTime}
          id="onTime"
          onChange={handleChange}
        />
        <label htmlFor="onTime">Comments for you fellow commuters</label>
        <input
          type="text"
          name="comment"
          value={comment}
          id="comment"
          onChange={handleChange}
        />

        <button onClick={handleSubmit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default CommentForm;
