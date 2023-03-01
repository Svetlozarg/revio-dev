/*
  User Authentication
*/

import CredentialsProvider from 'next-auth/providers/credentials';
import NextAuth from 'next-auth';
import type { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as any;
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        headers.append(
          'Authorization',
          'Bearer ' + 'Bearer ' + process.env.BEARER_TOKEN
        );

        const res = await fetch('http://185.123.188.201/api/login', {
          method: 'POST',
          headers: headers,
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        });

        const user = await res.json();

        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      session.user = token;

      return session;
    },
  },

  pages: {
    signIn: '/login',
    signOut: '/login',
  },

  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
