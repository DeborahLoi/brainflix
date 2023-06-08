import './CommentsDisplay.scss';
import CommentInput from '../CommentInput/CommentInput';

//display the existing comments of the hero video
function CommentsDisplay({ comments }) {
  
  if (!comments) {
    return null;
  }
  return (
    <>
    {/* in order to display the exact number of comments in the title */}
    <h4 className="comment__title">{comments.length} Comment{comments.length !== 1 ? 's' : ''}</h4>
    <CommentInput/>
    <section className="panel">
      <div className="panel__container">
        {comments.map((comment) => (
          <div className="panel__infos" key={comment.id}>
            <div className="panel__infos-avatar"></div>
            <div className="panel__infos-details">
              <div className="name-date--display">
                <p className="panel__infos-name">{comment.name}</p>
                <div className="panel__infos-date">
                  {`${new Date(comment.timestamp).getMonth() + 1}/${new Date(
                    comment.timestamp
                  ).getDate()}/${new Date(
                    comment.timestamp
                  ).getFullYear()}`}
                </div>
              </div>
              <p className="panel__comment-text">{comment.comment}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    </>
  );
}

export default CommentsDisplay
