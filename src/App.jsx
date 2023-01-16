import { useQuery } from '@apollo/client'
import GET_POSTS from '../graph'
import { Group } from '@visx/group'
import { Bar } from '@visx/shape'
import { scaleLinear, scaleBand } from '@visx/scale'
import { AxisBottom, AxisLeft } from '@visx/axis'

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
    console.log(postMonth)
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

  const margin = 32

  // visx configuration
  const width = 800
  const height = 500

  // Then we'll create some bounds
  const xMax = width - margin
  const yMax = height - margin

  // We'll make some helpers to get at the data we want
  const x = (d) => d.name
  const y = (d) => d.val

  // And then scale the graph by our data
  const xScale = scaleBand({
    range: [margin, xMax],
    round: true,
    domain: postsNumber.map(x),
    padding: 0.4,
  })
  const yScale = scaleLinear({
    range: [yMax, margin],
    round: true,
    domain: [Math.min(...postsNumber.map(y)), Math.max(...postsNumber.map(y))],
  })

  // Compose together the scale and accessor functions to get point functions
  const compose = (scale, accessor) => (data) => scale(accessor(data))
  const xPoint = compose(xScale, x)
  const yPoint = compose(yScale, y)

  return (
    <main>
      <h1>Number of Posts per Month</h1>
      <svg width={width} height={height}>
        {postsNumber.map((d, i) => {
          const barHeight = yMax - yPoint(d)
          return (
            <Group key={`bar-${i}`}>
              <Bar
                x={xPoint(d)}
                y={yMax - barHeight}
                height={barHeight}
                width={xScale.bandwidth()}
                fill="#6c5efb"
              />
            </Group>
          )
        })}
        <Group>
          <AxisBottom top={yMax} scale={xScale} />
        </Group>
        <Group>
          <AxisLeft left={margin} scale={yScale} />
        </Group>
      </svg>
    </main>
  )
}

export default App
