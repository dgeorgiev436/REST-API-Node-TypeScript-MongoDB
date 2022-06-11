import mongoose from "mongoose";
import config from "config";
import logger from "./logger"


function connect(){
	
// 	Get db string from config
	const dbUri = config.get<string>("dbUri");
	
	
// 	Connect DB
	return mongoose.connect(dbUri)
	.then(() => {
		logger.info("Connected to DB");
	}).catch((err) => {
		logger.error("Failed to connect to the DB");
// 		Exit with an error
		process.exit(1);
	})
}


export default connect;