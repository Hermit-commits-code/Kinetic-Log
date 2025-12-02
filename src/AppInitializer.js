// filepath: /home/joe/Desktop/Kinetic-Log/src/AppInitializer.js
import { useEffect, useState } from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { getOrCreateEncryptionKey } from './security/keychain';
import { openEncryptedRealm } from './storage/realm';

export default function AppInitializer({ children }) {
  const [loading, setLoading] = useState(true);
  const [realmError, setRealmError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    async function init() {
      try {
        const key = await getOrCreateEncryptionKey();
        await openEncryptedRealm(key);
        if (isMounted) setLoading(false);
      } catch (e) {
        if (isMounted) {
          setRealmError(e.message || String(e));
          setLoading(false);
        }
      }
    }
    init();
    return () => { isMounted = false; };
  }, []);

  if (loading) {
    return (
      <SafeAreaProvider>
        <View style={styles.center}>
          <ActivityIndicator size="large" />
          <Text style={styles.text}>Initializing secure storage…</Text>
        </View>
      </SafeAreaProvider>
    );
  }

  if (realmError) {
    return (
      <SafeAreaProvider>
        <View style={styles.center}>
          <Text style={styles.error}>Realm init error: {realmError}</Text>
        </View>
      </SafeAreaProvider>
    );
  }

  return children;
}

const styles = StyleSheet.create({
  center: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  text: { marginTop: 12 },
  error: { color: 'red', padding: 16, textAlign: 'center' },
});