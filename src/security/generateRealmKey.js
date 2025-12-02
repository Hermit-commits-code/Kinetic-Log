import 'react-native-get-random-values';
import { Buffer } from 'buffer';

export function generateRealmKeyBase64() {
  const arr = new Uint8Array(64);
  // global.crypto provided by react-native-get-random-values
  global.crypto.getRandomValues(arr);
  return Buffer.from(arr).toString('base64');
}