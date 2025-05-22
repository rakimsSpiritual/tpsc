// middleware.ts
import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: ["/", "/upcoming", "/meeting(.*)", "/previous", "/recordings", "/personal-room" ], // These pages won't require sign-in
});

export const config = {
  matcher: ["/((?!_next|.*\\..*).*)"], // Apply middleware to all app routes
};
