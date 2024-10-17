import Loading from './components/Loading'
import ToursList from './components/ToursList'
import { useState, useEffect } from 'react'

const url = 'https://www.course-api.com/react-tours-project'

const App = () => {
  // UI is the reflection of state, so let's describe the state

  const [tours, setTours] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = ''

  const fetchUsers = async () => {
    try {
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error('Could not fetch data')
      }
      const data = await response.json()

      console.log(data)

      setLoading(false)
      setTours(data)
    } catch (error) {
      setError(error)
      setLoading(false)
    }
  }

  const removeTour = id => {
    setTours(tours.filter(tour => tour.id !== id))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <p>{error}</p>
  }

  return (
    <main className="container">
      <h1 className="title">Tours List</h1>
      <div className="title-underline"></div>
      <ToursList
        tours={tours}
        removeTour={removeTour}
      />
    </main>
  )
}
export default App
