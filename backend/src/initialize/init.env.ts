import { cleanEnv } from "envalid";
import { str } from "envalid/dist/validators";

export default cleanEnv(process.env, {
    MONGO_CONNECTION_STRING: str(),
    JWT_SECRET: str(),
    MONGO_LOCAL_URI: str(),
});