
import Config from "../config/config";
import { Client, ID, Databases, Query } from "appwrite";


export class Service{
    client=new Client();
    database;
    bucket;

    constructor(){
        this.client
        .setEndpoint(Config.appwriteUrl)
        .setProject(Config.appwriteProjectId)
        this.database=new Databases(this.client)
        this.bucket=new Storage(this.client)
    }

    async createPost({title,slug,content,featureImage,status,userId}){
        try {
           return await this.database.createDocument(
                Config.appwriteDatbaseId,
                Config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status,
                    userId
                }
            )
        } catch (error) {
            throw error
        }
    }

    async updatePost(slug,{title,content,featureImage,status}){
        try {
           return await this.database.updateDocument(
                Config.appwriteDatbaseId,
                Config.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featureImage,
                    status
                }
            )
        } catch (error) {
            throw error
        }
    }

    async deletePost(slug){
       try {
         await this.database.deleteDocument(
            Config.appwriteDatbaseId,
            Config.appwriteCollectionId,
            slug
        )
        return true
       } catch (error) {
            throw error;
            return false;
       }
    }

   async getPost(slug){
        try {
            await this.database.getDocument(
                Config.appwriteDatbaseId,
                Config.appwriteCollectionId,
                slug   
            )
            return true
        } catch (error) {
           throw error 
           return false;
        }
    }

    async getPosts(queries=[Query.equal('title', 'active')]){

    try {
        return await this.database.listDocuments(
            Config.appwriteDatbaseId,
             Config.appwriteCollectionId, 
             queries
            
        )
    } catch (error) {
        throw error;
    }
    }

    async uploadFile(file){
        try {
            await this.storage.createFile(
                Config.appwriteBucketId,
               ID.unique(),
               file

            )
            return true
        } catch (error) {
            throw error;
            return false
        }
    }
    
    async deleteFile(fileId){
        try {
            await this.storage.deleteFile(
                Config.appwriteBucketId,
               fileId

            )
            return true;
        } catch (error) {
            throw error;
            return false
        }
    }
     getFilePreview(fileId){
        try {
            this.storage.getFilePreview(
                Config.appwriteBucketId,
               fileId

            )
            return true;
        } catch (error) {
            throw error;
            return false
        }
    }
}

const service=new Service();
export default service