import { QueryClient } from '@tanstack/react-query';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 60, // 1 hora
          refetchOnWindowFocus: false,
        },
    },
});

export default queryClient;
