import {Request, Response} from "express"
import logger from "../utils/logger"


export async function createUserHandler(req: Request, res: Response){
	
	try{
		
		const user = await createUser(req.body)
		
		
		
	}catch(err){
		logger.error(err);
		res.status(409).send(e.message)
	}
	
}