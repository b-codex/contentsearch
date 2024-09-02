// app/middleware.ts
import { NextRequest, NextResponse } from 'next/server';
import Cors from 'cors';
import cookie from 'cookie';

// Initialize the cors middleware
const cors = Cors({
    methods: ['GET', 'HEAD', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    origin: ['http://localhost:3001', 'http://localhost:3000', 'http://vercel.app'], // Replace with your allowed origins
});

// Helper function to run middleware
async function runMiddleware(req: NextRequest, fn: Function) {
    return new Promise((resolve, reject) => {
        fn(req, resolve, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            return resolve(result);
        });
    });
}

export async function middleware(req: NextRequest) {
    const res = NextResponse.next();

    // Set security headers
    res.headers.set('X-Content-Type-Options', 'nosniff');
    res.headers.set('X-Frame-Options', 'DENY');
    res.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
    res.headers.set('X-XSS-Protection', '1; mode=block');
    res.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate, private, s-maxage=0');
    res.headers.set('Pragma', 'no-cache');
    res.headers.set('Expires', '0');
    res.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');

    // Apply CORS
    await runMiddleware(req, cors);

    // Parse cookies from the request
    const cookies = cookie.parse(req.headers.get('cookie') || '');

    // Set cookies with HttpOnly and Secure flags
    const setCookie = (name: string, value: string, options: cookie.CookieSerializeOptions = {}) => {
        const stringValue = typeof value === 'object' ? 'j:' + JSON.stringify(value) : String(value);

        // Add HttpOnly and Secure flags to the options
        const cookieOptions: cookie.CookieSerializeOptions = {
            httpOnly: true,        // Set HttpOnly attribute
            // secure: process.env.NODE_ENV === 'production', // Set Secure attribute (only in production)
            secure: true,
            sameSite: 'strict',    // Set SameSite attribute to 'Strict'
            path: '/',             // Make the cookie available to the entire domain
            ...options,
        };

        // Serialize the cookie
        const serializedCookie = cookie.serialize(name, stringValue, cookieOptions);

        // Add the cookie to the response headers
        res.headers.append('Set-Cookie', serializedCookie);
    };

    // Set your project-wide cookie
    setCookie('sessionToken', 'user-session', {
        path: '/', // Make the cookie available to the entire domain
        maxAge: 60 * 60 * 24 * 7,  // Optional: Set cookie to expire in 7 days
    });

    return res;
}

export const config = {
    matcher: '/:path*', // Apply this middleware to all paths
};
