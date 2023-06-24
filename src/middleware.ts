import { authMiddleware } from "@clerk/nextjs";

// would be nice to have apart of the nextjs guide
export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};