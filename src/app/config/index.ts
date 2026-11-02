import dotenv from 'dotenv';

dotenv.config();

export default {
  node_env: process.env.NODE_ENV,
  port: process.env.PORT,
};
