import CredentialsProvider from "next-auth/providers/credentials";
import { SignInApi } from "@/api/auth";

// Define authentication options for NextAuth
const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          console.log("Credentials: ", credentials);
          const response = await SignInApi({
            email: credentials.email,
            password: credentials.password,
          });

          if (response && response.success && response.user && response.token) {
            const { success, user, token } = response;
            if (user && success) {
              return {
                id: user.id,
                email: user.email,
                name: user.name,
                token: token,
              };
            } else {
              throw new Error("Invalid credentials");
            }
          } else {
            console.error("Invalid response format: ", response);
            throw new Error("Authorization error");
          }
        } catch (error) {
          console.error("Authorization error: ", error);
          throw new Error("Authorization error");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.accessToken = user.token;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.user = {
        ...session.user,
        id: token.id,
        name: token.name,
        email: token.email,
      };
      return session;
    },
    async redirect({ url, baseUrl }) {
      if (url.startsWith(baseUrl)) return url;
      else if (url.startsWith("/")) return new URL(url, baseUrl).toString();
      return baseUrl;
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default authOptions;
