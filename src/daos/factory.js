import { prodDaoFS } from "./fileSystem/product.dao.js";
import { prodDaoMongo } from "./mongo/product.dao.js";
import { userDaoMongo } from "./mongo/user.dao.js";
import { initMongoDB } from "./mongo/db/connection.js";
import { userDaoFS } from "./fileSystem/user.dao.js";


let userDao = null;
let prodDao = null;
let persistence = process.argv[2];

switch (persistence) {
  case "fs":
    userDao = userDaoFS;
    prodDao = prodDaoFS;
    console.log(persistence);
    break;
  
  case "mongo":
    initMongoDB()
      .then(() => console.log("base de datos MONGO coenctada"))
      .catch((error) => console.log(error));
    userDao = userDaoMongo;
    prodDao = prodDaoMongo;
    console.log(persistence);
    break;
  default:
    userDao = userDaoFS;
    prodDao = prodDaoFS;
    break;
}

export default { userDao, prodDao };