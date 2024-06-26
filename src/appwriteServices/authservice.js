import { Client,Account,ID } from "appwrite";
import conf from "../conf/conf";

export class AuthService{
    client= new Client();
    account;

    constructor(){
  this.client
  .setEndpoint(conf.appwriteUrl)
  .setProject(conf.appwriteProjectId);
  this.account= new Account(this.client);
    }

    async createAccount({email,password,name}){
                try{
                    const userAccount= await this.account.create(ID.unique(),email,password,name);
                    if(userAccount){
                       return this.login({email,password});
                    }
                    else{
                        return userAccount
                    }
            }
            catch(err){
                    throw error;
            }
    }
    async login({email,password}){
        try{
                return await this.account.createEmailPasswordSession(email,password)
        }
        catch(error){
            console.log("Appwrite serive :: getCurrentUser :: error", error);
        }
        return null;
    }
    async logout(){
        try{
              await this.account.deleteSessions("current");
        }
        catch(err){
            console.log("Appwrite serive :: logout :: error", err);
        }

    }
    async getCurrentUser(){
        try{
            return await this.account.get()
        }
        catch(err){
            console.log(err);
        }
        return null;
    }
   
}
const authService= new AuthService();
export default authService;