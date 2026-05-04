import { useEffect, useState } from "react";

export function useTypewriter(text: string, speed = 60, startDelay = 200) {
  const [out, setOut] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    setOut("");
    setDone(false);
    let i = 0;
    let timer: ReturnType<typeof setTimeout>;
    const startT = setTimeout(function tick() {
      if (i <= text.length) {
        setOut(text.slice(0, i));
        i++;
        timer = setTimeout(tick, speed);
      } else {
        setDone(true);
      }
    }, startDelay);

    return () => {
      clearTimeout(startT);
      clearTimeout(timer!);
    };
  }, [text, speed, startDelay]);

  return { text: out, done };
}
