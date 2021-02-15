const { constants } = require("../../configs");
const request = require("../request");

const getCommentById = async (id) => {
  const comment = await request(
    `${constants.COMMENT_MS_BASE_URL}/?comment_id=${id}`,
    "get"
  );

  if (!comment || !comment.status) {
    if (comment) {
      return {
        status: false,
        message: comment.message,
      };
    }

    return {
      status: false,
      message: "Error calling WAYAGram comment micro-service",
    };
  }
  return comment;
};

module.exports = { getCommentById };
