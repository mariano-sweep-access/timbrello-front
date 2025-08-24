import { AuthSignInParams, AuthSignUpParams } from '@/types/auth';
import { Account, Avatars, Client, Databases, ID, Query } from 'react-native-appwrite';

const config = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT,
  platform: 'com.mariano.ios',
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID,
  projectName: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_NAME,
  databaseId: '68a793e7001c27e1a267',
  userCollectionId: '68a7941f001b9321a80a',
};

const client = new Client();
client.setEndpoint(config.endpoint!).setProject(config.projectId!).setPlatform(config.platform!);

const account = new Account(client);
const databases = new Databases(client);
const avatars = new Avatars(client);

const signUp = async ({ email, password, firstname, lastname }: AuthSignUpParams) => {
  try {
    const userId = ID.unique();
    if (!userId) throw new Error('Failed to generate user ID');

    const name = `${firstname} ${lastname}`;
    const newAccount = await account.create(userId, email, password, name);
    if (!newAccount) throw new Error('Failed to create user account in database');

    // create user in database
    const avatar = avatars.getInitialsURL(name);
    if (!avatar) throw new Error('Failed to generate avatar URL');

    const newUser = await databases.createDocument(
      config.databaseId,
      config.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        name,
        avatar,
      }
    );
    if (!newUser) throw new Error('Failed to create user in database');

    // log user in
    await signIn({ email, password });

    return newUser;
  } catch (error) {
    console.error('Error creating user:', error as string);
    throw error;
  }
};

const signIn = async ({ email, password }: AuthSignInParams) => {
  try {
    const session = await account.createEmailPasswordSession(email, password);
    console.log('User signed in successfully:', session);
  } catch (error) {
    console.error('Error signing in user:', error as string);
    throw error;
  }
};

const signOut = async () => {
  try {
    await account.deleteSession('current');
  } catch (error) {
    console.error('Error signing out user:', error as string);
    throw error;
  }
};

const getUser = async () => {
  try {
    const currentAccount = await account.get();
    if (!currentAccount) throw new Error('Failed to retrieve user account');

    const currentUser = await databases.listDocuments(config.databaseId, config.userCollectionId, [
      Query.equal('accountId', currentAccount.$id),
    ]);
    if (!currentUser) throw new Error('Failed to retrieve user from database');

    return currentUser.documents[0];
  } catch (error) {
    console.error('Error retrieving user:', error as string);
    throw error;
  }
};

export function createAppwriteAuth() {
  return {
    signUp,
    signIn,
    signOut,
    getUser,
  };
}
