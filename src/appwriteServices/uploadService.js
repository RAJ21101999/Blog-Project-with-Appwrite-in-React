import conf from "../conf/conf";
import { Client,ID,Storage} from "appwrite";

export class UploadService{

    client = new Client();
    bucket;
    constructor(){
        this.client.setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectId)
        this.bucket= new Storage(this.client)
    }

    async uploadFile(file){
            try{
return await this.bucket.createFile(conf.appwriteBucketId,ID.unique(),file)
            }
            catch(err){
                console.log(err)
            }
    }
    async deleteFile(fileId){
        try{
         await this.bucket.deleteFile(conf.appwriteBucketId,fileId)
         return true;
        }
        catch(err){
            console.log(err)
            return false
        }
    }
     getPreviewFile(fileId){
return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)   
 }

}
const uploadservices = new UploadService();

export default uploadservices;