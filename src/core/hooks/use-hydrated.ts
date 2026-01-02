import { useEffect, useState } from "react";


export default function useClientReady () {
  const [isClientReady, setIsClientReady] = useState(false)

  useEffect(() => {
    setIsClientReady(true)
  }, [])

  return isClientReady
}