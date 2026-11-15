import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      staleTime: 60_000,
    },
  },
});

/**
 * Root layout — Phase 00 foundation.
 * Navigation shell and auth groups are expanded in later phases.
 */
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <StatusBar style="light" />
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor: '#085634' },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: { fontWeight: '600' },
            contentStyle: { backgroundColor: '#F7F8F7' },
          }}
        >
          <Stack.Screen
            name="index"
            options={{ title: 'GlintPM' }}
          />
        </Stack>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
