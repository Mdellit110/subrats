import React, { Component } from "react";

class CommentForm extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { clean, busy, onTime, comment, onChange, onSubmit } = this.props;
    return (
      <form>
        <h2>Comment Form</h2>
        <label htmlFor="clean">Scale of 1-5, was the station clean</label>
        <input
          type="text"
          name="clean"
          value={clean}
          id="clean"
          onChange={onChange}
        />
        <label htmlFor="busy">Scale of 1-5, was the station busy</label>
        <input
          type="number"
          name="busy"
          value={busy}
          id="busy"
          onChange={onChange}
        />
        <label htmlFor="onTime">
          How long did it take for your train to arrive?
        </label>
        <input
          type="text"
          name="onTime"
          value={onTime}
          id="onTime"
          onChange={onChange}
        />
        <label htmlFor="comment">Comments for you fellow commuters</label>
        <input
          type="text"
          name="comment"
          value={comment}
          id="comment"
          onChange={onChange}
        />

        <button onClick={onSubmit} type="submit">
          Submit
        </button>
      </form>
    );
  }
}

export default CommentForm;
