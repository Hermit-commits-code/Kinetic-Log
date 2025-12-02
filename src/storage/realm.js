import Realm from 'realm';

export const MoodEntrySchema = {
  name: 'MoodEntry',
  properties: {
    _id: 'string',
    timestamp: 'date',
    energyScale: 'int',
    moodAffect: 'string',
    isMixed: { type: 'bool', default: false },
    customTags: 'string[]',
  },
  primaryKey: '_id',
};

export async function openEncryptedRealm(base64Key) {
  // Realm accepts encryption key as an ArrayBuffer (Uint8Array)
  const keyBuffer = Buffer.from(base64Key, 'base64');
  const keyUint8 = new Uint8Array(keyBuffer);

  return await Realm.open({
    schema: [MoodEntrySchema],
    schemaVersion: 1,
    encryptionKey: keyUint8,
  });
}