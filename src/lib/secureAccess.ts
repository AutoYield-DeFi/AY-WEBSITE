
// This file is now a re-export file to maintain backward compatibility
// All functionality has been moved to the auth directory

import {
  generateSecureAccess,
  validateSecureAccess,
  isValidSecureUrlPath,
  clearSecureAccess,
  formatExpiryDate
} from './auth';

export {
  generateSecureAccess,
  validateSecureAccess,
  isValidSecureUrlPath,
  clearSecureAccess,
  formatExpiryDate
};
