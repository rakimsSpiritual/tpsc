import { authMiddleware } from "@clerk/nextjs/server";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/upcoming",
    "/previous",
    "/recordings",
    "/personal-room",
    /^\/meeting(\/.*)?$/ // Regex for any /meeting or /meeting/*
  ],
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Apply to all routes except static files
};
