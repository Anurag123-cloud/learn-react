
import Config from "../config/config.js";
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client=new Client();
    account;

    constructor(){
        this.client
        .setEndpoint(Config.appwriteUrl)
        .setProject(Config.appwriteProjectId)
        this.account=new Account(this.client)
        console.log(this.account)
    }

    async createAccount({email,password,name}){
        try {
           const userAccount= await this.account.create(ID.unique(),email,password,name);
           if (userAccount) {
             return this.login({email,password})
           } else {
            return userAccount
           }
        } catch (error) {
            throw error;
        }
    }

    async login({email,password}){
        try {
          return await this.account.createEmailPasswordSession(email,password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            if (error.response && error.response.status === 401) {
                console.error('User not authenticated:', error.message);
                // Handle the unauthenticated state, like redirecting to a login page
                return null;
            }
            throw error; // Re-throw other unexpected errors
        }
    }
    

    async logout(){
        try {
          return await this.account.deleteSessions();
        } catch (error) {
            throw error;
        }
    }
}

const authService=new AuthService();

export default authService