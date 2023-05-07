import inits from "./initialize";

import mongoose from "mongoose";

const port = 5000;

inits.dbConnection()
.then(() =>{
        inits.app.listen(port, () => console.log(`listening on port ${port}....`));
    })
    .catch(console.error)
    

    



