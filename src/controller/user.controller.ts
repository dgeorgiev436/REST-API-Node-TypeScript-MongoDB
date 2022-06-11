import {Request, Response} from "express"
import logger from "../utils/logger"
import { createUser } from "../service/user.service";


export async function createUserHandler(
	req: Request<{}, {}, CreateUserInput["body"]>,
	res: Response
	 
)	{
	
	try{
		
		const user = await createUser(req.body)
		
		return user;	
		
	}catch(err: any){
		logger.error(err);
		res.status(409).send(err.message)
	}
	
}