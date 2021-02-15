const Joi = require("joi");

require("dotenv").config();

const schema = Joi.object({
  NODE_ENV: Joi.string()
    .valid("development", "production", "test", "provision")
    .default("development"),
  PORT: Joi.number().required(),
  WAYAGRAM_POST_MS_BASE_URL: Joi.string().uri().required(),
  WAYAGRAM_PROFILE_MS_BASE_URL: Joi.string().uri().required(),
  WAYAGRAM_COMMENT_MS_BASE_URL: Joi.string().uri().required(),
  DB_URL: Joi.string().required().description("Database connection URL"),
})
  .unknown()
  .required();

const { error, value: env } = schema.validate(process.env);

if (error) {
  console.error(`Config validation error: ${error.message}`);
  return;
}

const config = {
  env: env.NODE_ENV,
  port: env.PORT,
  dbURL: env.DB_URL,
};

module.exports = config;
