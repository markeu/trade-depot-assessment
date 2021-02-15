const { constants } = require("../../configs");
const request = require("../request");

const getPostById = async (id) => {
  const post = await request(
    `${constants.POST_MS_BASE_URL}/?post_id=${id}`,
    "get"
  );

  if (!post || !post.status) {
    if (post) {
      return {
        status: false,
        message: post.message,
      };
    }

    return {
      status: false,
      message: "Error calling WAYAGram post micro-service",
    };
  }
  return post;
};

module.exports = { getPostById };
