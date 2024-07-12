import NextAuth from "next-auth";
import authOptions from "./options";

// Correct export of NextAuth handler
export default (req, res) => NextAuth(req, res, authOptions);
