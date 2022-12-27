import { useEffect, useState, useRef } from "react";

const Example = () => {
  const [isDisp, setIsDisp] = useState(true);
  return (
    <>
      {isDisp && <Timer />}
      <button onClick={() => setIsDisp((isDisp) => !isDisp)}>トグル</button>
    </>
  );
};

const Timer = () => {
  const [time, setTime] = useState(0);
  const intervalId = useRef(null);

  useEffect(() => {
    // let intervalId = null;

    // console.log("init");
    intervalId.current = window.setInterval(() => {
      // console.log("interval called");
      setTime((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    time === 10 && clearInterval(intervalId.current);
  }, [time]);

  return (
    <h3>
      <time>{time}</time>
      <span>秒経過</span>
    </h3>
  );
};

export default Example;
