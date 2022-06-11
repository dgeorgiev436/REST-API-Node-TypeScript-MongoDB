import mongoose from "mongoose";
import config from "config";


function connect(){
	
// 	Get db string from config
	const dbUri = config.get<string>("dbUri");
	
	
// 	Connect DB
	return mongoose.connect(dbUri)
	.then(() => {
		console.log("Connected to DB");
	}).catch((err) => {
		console.error("Failed to connect to the DB");
// 		Exit with an error
		process.exit(1);
	})
}


export default connect;