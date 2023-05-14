import './App.css'

import {
  useQuery,
} from '@tanstack/react-query'

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['repoData'],
    queryFn: () =>
      fetch('https://api.github.com/repos/tannerlinsley/react-query').then(
        (res) => res.json(),
      ),
  })

  return (
    <>
      <div>
        Starting the app with vite
      </div>
    </>
  )
}

export default App
