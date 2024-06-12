import { useLocation } from 'react-router-dom'

function useLocationQuery() {
  return new URLSearchParams(useLocation().search)
}

export default useLocationQuery
