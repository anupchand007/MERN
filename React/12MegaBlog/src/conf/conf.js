const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL || 'https://fra.cloud.appwrite.io/v1'),
    appwriteProjectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID || '682d7f1f002e742e3959'),
    appwriteDatabaseId: String(import.meta.env.VITE_APPWRITE_DATABASE_ID || '682d7fc4000c42325d53'),
    appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID || '682d7fe500228cf1dc7b'),
    appwriteBucketId: String(import.meta.env.VITE_APPWRITE_BUCKET_ID || ''),
}

// Validate required configuration
const requiredConfigs = ['appwriteUrl', 'appwriteProjectId'];
requiredConfigs.forEach(key => {
    if (!conf[key] || conf[key] === 'undefined' || conf[key] === '') {
        throw new Error(`Appwrite configuration error: ${key} is required but not provided. Check your .env file.`);
    }
});

// Log configuration status (remove in production)
console.log('Appwrite Configuration:', {
    url: conf.appwriteUrl,
    projectId: conf.appwriteProjectId ? '***' : 'NOT SET',
    databaseId: conf.appwriteDatabaseId ? '***' : 'NOT SET',
    collectionId: conf.appwriteCollectionId ? '***' : 'NOT SET',
    bucketId: conf.appwriteBucketId ? '***' : 'NOT SET',
});

export default conf;