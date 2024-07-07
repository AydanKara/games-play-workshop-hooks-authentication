import * as request from "../lib/request";

const baseUrl = "http://localhost:3030/data/comments";

export const getGameComments = async (gameId) => {
  const query = new URLSearchParams({
    where: `gameId="${gameId}"`,
  });
  // server filtering
  const result = await request.get(`${baseUrl}?${query}`);

  // TODO: temp solution until migration to collections service
  // return result.filter((comment) => comment.gameId === gameId);

  return result;
};

export const create = async (gameId, username, text) => {
  const newComment = request.post(baseUrl, {
    gameId,
    username,
    text,
  });

  return newComment;
};
