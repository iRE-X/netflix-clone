import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import {
    apiAuthPrefix,
    AUTH_URL,
    authRoutes,
    DEFAULT_LOGIN_REDIRECT,
    publicRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

export default auth(req => {
    const { nextUrl } = req;
    const isLoggedIn = !!req.auth;
    const pathname = nextUrl.pathname;

    // const isPublicRoute = publicRoutes.includes(pathname);
    const isAuthRoute = authRoutes.includes(pathname);
    const isApiAuthRoute = pathname.startsWith(apiAuthPrefix);

    if (isApiAuthRoute) {
        return;
    }

    if (isAuthRoute) {
        if (isLoggedIn)
            return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
        return;
    }

    if (!isLoggedIn) return Response.redirect(new URL(AUTH_URL, nextUrl));

    return;
});

export const config = {
    matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
