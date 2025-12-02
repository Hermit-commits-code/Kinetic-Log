import * as Keychain from 'react-native-keychain';
import { generateRealmKeyBase64 } from './generateRealmKey';

const SERVICE = 'realm_key';

export async function getOrCreateEncryptionKey() {
  const creds = await Keychain.getGenericPassword({ service: SERVICE });
  if (creds && creds.password) return creds.password;

  const key = generateRealmKeyBase64();
  // store with a fixed username; password is the base64 key
  await Keychain.setGenericPassword('realm', key, { service: SERVICE });
  return key;
}