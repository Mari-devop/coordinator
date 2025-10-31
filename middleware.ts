import { withAuth } from "next-auth/middleware";
import { NextResponse } from "next/server";

export default withAuth(
  function middleware(req) {
    // Additional middleware logic can be added here
  },
  {
    callbacks: {
      authorized: ({ token, req }) => {
        const { pathname } = req.nextUrl;
        
        const publicRoutes = [
          "/login",
          "/register", 
          "/forgot-password",
          "/privacy-policy",
          "/terms-and-condition",
          "/api/auth", 
        ];
        
        const isPublicRoute = publicRoutes.some(route => 
          pathname.startsWith(route)
        );
        
        if (isPublicRoute) {
          return true;
        }
        
        return !!token;
      },
    },
  }
);

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
