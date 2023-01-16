import { useQuery } from '@apollo/client'
import GET_POSTS from '../graph'

function App() {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  console.log(data)
  return <></>
}

export default App
