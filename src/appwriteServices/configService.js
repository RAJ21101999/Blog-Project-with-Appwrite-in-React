import { Client,ID,Databases,Query} from "appwrite";
import conf from "../conf/conf";



export class ConfigService{
 client =new Client();
 databases;

 constructor(){
    this.client.setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.databases =new Databases(this.client)
}

async createPost({title,slug,content,feturedImage,status,userId}){
    debugger
    try{
return await this.databases.createDocument(conf.appwriteDatabaseID,conf.appwriteCollectionId,slug,{title,content,feturedImage,status,userId})
    }
    catch(err){
console.log(err)
    }
}
async updatePost(slug,{title,content,feturedImage,status}){
    try{
        return await this.databases.updateDocument(conf.appwriteDatabaseID,conf.appwriteCollectionId,slug,{title,content,feturedImage,status})
            }
            catch(err){
        console.log(err)
            }
}
async deletePost(slug){
    try{
         await this.databases.deleteDocument(conf.appwriteDatabaseID,conf.appwriteCollectionId,slug)
         return true
            }
            catch(err){
        console.log(err)
        return false;
            }
}
async getPost(slug){
    try{
       return await this.databases.getDocument(conf.appwriteDatabaseID,conf.appwriteCollectionId,slug)
        
           }
           catch(err){
       console.log(err)
         }
}
async getPosts(){
    try{
        return await this.databases.listDocuments(conf.appwriteDatabaseID,conf.appwriteCollectionId)
         
            }
            catch(err){
        console.log(err)
          }
}
 }

const configService =new ConfigService();
export default configService;