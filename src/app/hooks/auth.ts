// 'use client';
import { Amplify } from 'aws-amplify'
import { useAuthenticator} from '@aws-amplify/ui-react';
import { getCurrentUser } from 'aws-amplify/auth';


export const useAuth = () => {

  const { route } = useAuthenticator(context => [context.route]);
  const { authStatus } = useAuthenticator(context => [context.authStatus]);
  const { user, signOut } = useAuthenticator(context => [context.user]);
  return { authStatus: authStatus, route: route, user: user, signOut: signOut }
}
