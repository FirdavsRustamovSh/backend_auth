// import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';

// @Injectable()
// export class CsrfGuard implements CanActivate {
//   canActivate(context: ExecutionContext): boolean {
//     const request = context.switchToHttp().getRequest();

//     // Retrieve CSRF token from request headers, query parameters, or body
//     const requestCsrfToken =
//       request.headers['x-csrf-token'] ||
//       request.query.csrfToken ||
//       request.body.csrfToken;

//     // Retrieve stored CSRF token (You need to implement this part)
//     const storedCsrfToken = request.session.csrfToken; // Example: Retrieve CSRF token from session

//     // Compare the request CSRF token with the stored CSRF token
//     const isValid = requestCsrfToken === storedCsrfToken;

//     // Return true if the request is valid (CSRF token matches), false otherwise
//     return isValid;
//   }
// }
