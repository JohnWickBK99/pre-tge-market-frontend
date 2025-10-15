/**
 * Service Layer - Singleton Pattern
 * All services are exported as frozen singleton instances
 */

import AuthService from './auth.service';
import { ExampleService } from './example-service';
import { SearchService } from './search.service';
import { TokenService } from './token.service';
import { UploadService } from './upload.service';
import { UserService } from './user.service';

/**
 * Frozen singleton service instances
 * Use Object.freeze to prevent modification
 */
export const Service = Object.freeze({
  token: new TokenService(),
  user: new UserService(),
  auth: new AuthService(),
  upload: new UploadService(),
  search: new SearchService(),
  example: new ExampleService(),
  // Add other services here
});

/**
 * Export individual services for testing and type inference
 */
export {
  AuthService,
  ExampleService,
  SearchService,
  TokenService,
  UploadService,
  UserService,
};
