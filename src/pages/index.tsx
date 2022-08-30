import { Box, Button } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    ['images'],
    async ({ pageParam = 0 }) => {
      const resp = await api.get('/api/images', {
        params: {
          after: pageParam,
        },
      });
      return resp;
    },
    {
      getNextPageParam: resp => resp.data.after,
    }
  );

  const formattedData = useMemo(() => {
    if (data?.pages) {
      const resp = data.pages.map(page => page.data.data);
      return resp.flat();
    }
    return null;
  }, [data]);

  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {hasNextPage && (
          <Button
            mt="5"
            disabled={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {!isFetchingNextPage ? 'Carregar mais' : 'Carregando...'}
          </Button>
        )}
      </Box>
    </>
  );
}
