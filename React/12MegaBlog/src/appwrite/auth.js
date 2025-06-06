import conf from "../conf/conf"
import { Client, Account, ID } from "appwrite"

export class AuthService {
    client = new Client;
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        
        this.account = new Account(this.client)
        
        // Validate configuration
        if (!conf.appwriteUrl || !conf.appwriteProjectId) {
            throw new Error('Appwrite configuration is missing');
        }
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount) {
                return this.login({ email, password });
            } else {
                throw new Error('Failed to create account');
            }
        } catch (error) {
            console.error("Appwrite service :: createAccount :: error", error);
            throw error;
        }
    }

    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.error("Appwrite service :: login :: error", error);
            throw error;
        }
    }

    async getCurrentUser() {
        try {
            const user = await this.account.get();
            return user;
        } catch (error) {
            console.error("Appwrite service :: getCurrentUser :: error", error);
            throw error;
        }
    }

    async logout() {
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.error("Appwrite service :: logout :: error", error);
            throw error;
        }
    }
}

const authService = new AuthService();

export default authService;