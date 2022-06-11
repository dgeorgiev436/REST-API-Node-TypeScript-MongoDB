import {Request, Response, NextFunction} from "express";
import {AnyZodObject, any} from "zod"


const validate = (schema: AnyZodObject) => async(req: Request, res: Response, next: NextFunction) => {
	
	try{
		
		schema.parse({
			body: req.body,
			query: req.query,
			params: req.params
		});
		
		next();
		
	}catch(err) {
		return res.status(400).send(error.errors)
	}
}


export default validate;