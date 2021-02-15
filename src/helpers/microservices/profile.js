const { constants } = require("../../configs");
const request = require("../request");

const getProfileByUserId = async (user_id) => {
  try {
    const profile = await request(
      `${constants.PROFILE_MS_BASE_URL}/get-by-user-id?user_id=${user_id}`,
      "get"
    );

    if (!profile || !profile.status) {
      if (profile) {
        return {
          status: false,
          message: profile.message,
        };
      }

      return {
        status: false,
        message: "Error calling WAYAGram profile micro-service",
      };
    }

    return profile;
  } catch (e) {
    console.log(e.message);
    return { status: false, message: e.message };
  }
};

const getProfileByUsername = async (username) => {
  const profile = await request(
    `${constants.PROFILE_MS_BASE_URL}/?username=${username}`,
    "get"
  );

  if (!profile || !profile.status) {
    if (profile) {
      return {
        status: false,
        message: profile.message,
      };
    }

    return {
      status: false,
      message: "Error calling WAYAGram profile micro-service",
    };
  }
  return profile;
};

const getProfileById = async (id) => {
  const profile = await request(
    `${constants.PROFILE_MS_BASE_URL}/get-by-id?profile_id=${id}`,
    "get"
  );

  if (!profile || !profile.status) {
    if (profile) {
      return {
        status: false,
        message: profile.message,
      };
    }

    return {
      status: false,
      message: "Error calling WAYAGram profile micro-service",
    };
  }
  return profile;
};

const clearDuplicates = (data, index = "id") => {
  let _data = [];
  let _keys = [];
  for (const d of data) {
    if (_keys.includes(d[index])) {
      _keys.push(d[index]);
      _data.push(d);
    }
  }
  return _data;
};
module.exports = {
  getProfileByUserId,
  getProfileByUsername,
  getProfileById,
  clearDuplicates,
};
