import express from "express";
import config from "config";
import connect from "./utils/connect"
import logger from "./utils/logger";
import routes from "./routes"



const port = config.get<number>("port")
const app = express();

// Body parser middleware
app.use(express.json())

app.listen(port, async() => {
	logger.info(`Server running at port ${port}`)
// 	Run DB
	await connect();
	
	routes(app);
});