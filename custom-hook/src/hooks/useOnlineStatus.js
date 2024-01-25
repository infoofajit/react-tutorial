import { useEffect, useState } from 'react'

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true)

  function handleOnline() {
    setIsOnline(true)
  }

  function handleOffline() {
    setIsOnline(false)
  }

  useEffect(() => {
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)

    return () => {
      window.removeEventListener('online')
      window.removeEventListener('offline')
    }
  }, [])
  
  return isOnline
}

export default useOnlineStatus
