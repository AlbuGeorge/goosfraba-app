import { useQuery } from '@apollo/client'
import GET_POSTS from '../graph'

function App() {
  const { loading, error, data } = useQuery(GET_POSTS)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  function parseDate(date) {
    return new Date(JSON.parse(date))
  }

  const getPostNumber = () => {
    const postMonth = data.allPosts.map((post) =>
      parseDate(post.createdAt).getMonth()
    )

    const jan = postMonth.filter((post) => post === 0).length
    const feb = postMonth.filter((post) => post === 1).length
    const mar = postMonth.filter((post) => post === 2).length
    const apr = postMonth.filter((post) => post === 3).length
    const may = postMonth.filter((post) => post === 4).length
    const jun = postMonth.filter((post) => post === 5).length
    const jul = postMonth.filter((post) => post === 6).length
    const aug = postMonth.filter((post) => post === 7).length
    const sep = postMonth.filter((post) => post === 8).length
    const oct = postMonth.filter((post) => post === 9).length
    const nov = postMonth.filter((post) => post === 10).length
    const dec = postMonth.filter((post) => post === 11).length

    const numberPostPerMonth = [
      { name: 'January', val: jan },
      { name: 'February', val: feb },
      { name: 'March', val: mar },
      { name: 'April', val: apr },
      { name: 'May', val: may },
      { name: 'June', val: jun },
      { name: 'July', val: jul },
      { name: 'August', val: aug },
      { name: 'September', val: sep },
      { name: 'Octomber', val: oct },
      { name: 'November', val: nov },
      { name: 'December', val: dec },
    ]

    return numberPostPerMonth
  }

  const postsNumber = getPostNumber()

  console.log(postsNumber)
  return <></>
}

export default App
