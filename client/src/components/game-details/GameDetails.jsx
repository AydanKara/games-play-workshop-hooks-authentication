/* eslint-disable no-debugger */
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import * as gameService from "../../services/gameService";
import * as commentService from "../../services/commentService";
import AuthContext from "../../contexts/authContext";

const GameDetails = () => {
  const { email } = useContext(AuthContext);
  const { gameId } = useParams();
  const [game, setGame] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    gameService.getOne(gameId).then(setGame);

    commentService.getGameComments(gameId).then(setComments);
  }, [gameId]);

  const addCommentHandler = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newComment = await commentService.create(
      gameId,
      formData.get("comment")
    );

    setComments((state) => [...state, { ...newComment, owner: { email } }]);
    console.log(comments)
  };

  return (
    <section id="game-details">
      <h1>Game Details</h1>
      <div className="info-section">
        <div className="game-header">
          <img className="game-img" src={game.imageUrl} />
          <h1>{game.title}</h1>
          <span className="levels">MaxLevel: {game.maxLevel}</span>
          <p className="type">{game.category}</p>
        </div>
        <p className="text">{game.summary}</p>
        {/* Bonus ( for Guests and Users ) */}
        <div className="details-comments">
          <h2>Comments:</h2>
          <ul>
            {/* list all comments for current game (If any) */}
            {comments.map(({ _id, text, owner: { email } }) => (
              <li key={_id} className="comment">
                <p>
                  {email}: {text}
                </p>
              </li>
            ))}
          </ul>
          {/* Display paragraph: If there are no games in the database */}
          {comments.length === 0 && <p className="no-comment">No comments.</p>}
        </div>
        {/* Edit/Delete buttons ( Only for creator of this game )  */}
        <div className="buttons">
          <a href="#" className="button">
            Edit
          </a>
          <a href="#" className="button">
            Delete
          </a>
        </div>
      </div>
      {/* Bonus */}
      {/* Add Comment ( Only for logged-in users, which is not creators of the current game ) */}
      <article className="create-comment">
        <label>Add new comment:</label>
        <form className="form" onSubmit={addCommentHandler}>
          <textarea
            name="comment"
            placeholder="Comment......"
            defaultValue={""}
          />
          <input
            className="btn submit"
            type="submit"
            defaultValue="Add Comment"
          />
        </form>
      </article>
    </section>
  );
};

export default GameDetails;
