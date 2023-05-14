import './App.css'
import ReactDatatable from '@ashvin27/react-datatable';
import {
  useQuery,
} from '@tanstack/react-query'

function App() {
  const { isLoading, error, data } = useQuery({
    queryKey: ['results'],
    queryFn: () =>
      fetch('https://swapi.dev/api/people/').then(
        (res) => res.json(),
      ),
  })
  console.log(isLoading, error, data)

  return (
    <>
      <div>
       <ReactDatatable
                    config={this.config}
                    records={this.state.records}
                    columns={this.columns}
                    extraButtons={this.extraButtons}
                />
      </div>
    </>
  )
}

export default App
