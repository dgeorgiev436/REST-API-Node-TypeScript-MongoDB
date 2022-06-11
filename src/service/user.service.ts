import {DocumentDefinition} from "mongoose"


export async function createUser(input: DocumentDefinition<UserDocument>){
	
	try{
		
		return await UserModel.create(input);
		
	}catch(err: any){
		
		throw new Error(err)
		
	}
}