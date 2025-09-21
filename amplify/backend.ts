import { defineBackend } from '@aws-amplify/backend';\nimport { auth } from './auth/resource';
import { data } from './data/resource';

export const backend = defineBackend({
  auth,
  data,
});\n
