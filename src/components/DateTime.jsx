import { useState, useEffect } from "react";

export default function DateTime() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white text-yellow-700 text-center py-2 text-sm">
      {dateTime.toLocaleString()}
    </div>
  );
}