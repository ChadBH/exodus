// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Have, Need, Vault } = initSchema(schema);

export {
  Have,
  Need,
  Vault
};