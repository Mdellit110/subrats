import React from "react";
import { withRouter } from "react-router-dom";

const CommentList = props => {
  const { commentList } = props;
  console.log("stationList: renderstock", stationList);
  return (
    <div className="stock-list">
      {commentList &&
        commentList.map((comment, index) => (
          <div className="comment-container">
            <div className="comment-information">{comment}</div>
          </div>
        ))}
    </div>
  );
};
export default withRouter(CommentList);
