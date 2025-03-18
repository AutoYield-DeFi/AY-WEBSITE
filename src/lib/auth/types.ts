
/**
 * Interface for secure access data structure
 */
export interface SecureAccess {
  urlPath: string;
  hashedPassword: string;
  salt: string;
  timestamp: number;
  expiresAt: number;
}
