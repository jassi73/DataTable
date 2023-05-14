import {
    useQuery,
  } from '@tanstack/react-query'
export const useFetch = ({page=1, search}) => {
    let url = `https://swapi.dev/api/people/?page=${page}`;
    if (!!search) {
      url += `&search=${search}`;
    }
  
    // see https://react-query.tanstack.com/guides/important-defaults
    // see https://react-query.tanstack.com/guides/paginated-queries
    return useQuery(
      ["todos", { page, search }],
      () => fetch(url).then((res) => res.json())
      // the following can be used to avoid refetches on already fetched data (see paginated queries docs)
      // { keepPreviousData: true, staleTime: 5 * 60 * 1000 }
    );
  }
 

