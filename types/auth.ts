export type AuthService = {
  signUp: ({ email, password, firstname, lastname }: AuthSignUpParams) => Promise<any>;
  signIn: ({ email, password }: AuthSignInParams) => Promise<any>;
  signOut: () => Promise<void>;
  getUser: () => Promise<AuthUser>;
};

export type AuthSignUpParams = {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
};

export type AuthSignInParams = {
  email: string;
  password: string;
};

export type AuthUser = {
  id: string;
  email: string;
  name: string;
  avatar: string;
};
