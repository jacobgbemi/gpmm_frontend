/**
 * Thin wrapper around Expo SecureStore.
 * Auth token persistence will use this in later phases.
 * Never store passwords or payment card data.
 */

import * as SecureStore from 'expo-secure-store';
import { Platform } from 'react-native';

const isWeb = Platform.OS === 'web';

export async function setSecureItem(key: string, value: string): Promise<void> {
  if (isWeb) {
    // SecureStore is limited on web; fall back carefully for development only.
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(`secure:${key}`, value);
    }
    return;
  }
  await SecureStore.setItemAsync(key, value);
}

export async function getSecureItem(key: string): Promise<string | null> {
  if (isWeb) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(`secure:${key}`);
    }
    return null;
  }
  return SecureStore.getItemAsync(key);
}

export async function deleteSecureItem(key: string): Promise<void> {
  if (isWeb) {
    if (typeof localStorage !== 'undefined') {
      localStorage.removeItem(`secure:${key}`);
    }
    return;
  }
  await SecureStore.deleteItemAsync(key);
}
