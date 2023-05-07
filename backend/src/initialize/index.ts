import app from './init.express';
import env from './init.env';
import dbConnection from './init.database';

const inits = {
    app,
    env,
    dbConnection
}
export default inits