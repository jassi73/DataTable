import React from 'react'

export const useFetch = () => {
    let url = `https://jsonplaceholder.typicode.com/todos?_page=${page}`;
    if (!!search) {
      url += `&q=${search}`;
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
 

