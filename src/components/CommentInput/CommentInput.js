
import './CommentInput.scss';
import CommentIcon from '../../assets/Icons/add_comment.svg';


function CommentInput() {
    

    return (
        <section className="comment" >
            <div className="comment__avatar"></div>
            <form className="comment__display">
                <label className="comment__data">
                    JOIN THE CONVERSATION
                    <textarea className="input__comment input__comment--text-color" type="textarea"
                        wrap="hard" name="comment" placeholder="Add a new comment" >
                    </textarea>
                </label>
                <label>
                    <button className="button-container" type="submit">COMMENT
                        <img src={CommentIcon} alt="icon of the comment button" className="button-container__icon" />
                    </button>
                </label>
            </form>
        </section>
    )
}


export default CommentInput