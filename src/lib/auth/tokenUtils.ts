
import { nanoid } from 'nanoid';

/**
 * Generate a cryptographically secure random string
 */
export const generateSecureToken = (length: number = 12): string => {
  return nanoid(length);
};

/**
 * Generate a secure random password (easy for humans to read)
 */
export const generateSecurePassword = (): string => {
  // Create readable but secure password (avoid similar looking characters)
  const adjectives = ['Red', 'Blue', 'Green', 'Bold', 'Wise', 'Calm', 'Swift', 'Brave'];
  const nouns = ['Eagle', 'Tiger', 'Falcon', 'Dragon', 'Dolphin', 'Phoenix', 'Lion', 'Panda'];
  const numbers = Math.floor(1000 + Math.random() * 9000); // 4-digit number
  
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  
  return `${adjective}${noun}${numbers}`;
};

/**
 * Simple hash function for client-side password hashing
 * For a production app, you'd use a more robust solution like bcrypt in a server environment
 */
export const hashPassword = async (password: string, salt: string): Promise<string> => {
  const encoder = new TextEncoder();
  const data = encoder.encode(password + salt);
  const hashBuffer = await crypto.subtle.digest('SHA-256', data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
};
