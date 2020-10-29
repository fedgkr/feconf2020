import {Session} from "@constants/types";
import {useEffect, useState} from "react";

export const useLiveState = (session: Session) => {
  const [isLive, setLive] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      const now = +new Date();
      const { startTimestamp, endTimestamp } = session;
      setLive(startTimestamp <= now && now <= endTimestamp);
    }, 1000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return isLive;
}
