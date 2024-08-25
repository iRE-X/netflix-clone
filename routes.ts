/**
 * The default redirect path after logging in
 */
export const DEFAULT_LOGIN_REDIRECT = "/profiles";
export const AUTH_URL = "/auth";

/**
 * An array of routes that are accessible to public.
 * These routes do not require authentication.
 * @type {string[]}
 */
export const publicRoutes = [];

/**
 * An array of routes that are used for authentication.
 * These routes redirect logged in users to /settings.
 * @type {string[]}
 */
export const authRoutes = [AUTH_URL];

/**
 * The prefix for API authentication routes.
 * Routes that start with this prefix are used for API authentication purpose.
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";
