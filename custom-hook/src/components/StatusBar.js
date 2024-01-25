import useOnlineStatus from "../hooks/useOnlineStatus";

const StatusBar = () => {
  const isOnline = useOnlineStatus()
  
  return <h4>Status: {isOnline ? '✅ Online' : '❌ Disconnected'}</h4>;
}

export default StatusBar
