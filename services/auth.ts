import { createAppwriteAuth } from '@/lib/appwrite';
import { AuthService } from '@/types/auth';

function createAuthService(): AuthService {
  const provider = process.env.EXPO_PUBLIC_AUTH_PROVIDER;

  switch (provider) {
    case 'appwrite':
      return createAppwriteAuth();
    default:
      throw new Error(`Unsupported auth provider: ${provider}`);
  }
}

export const authService = createAuthService();
