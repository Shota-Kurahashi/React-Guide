import { useEffect, useState, useLayoutEffect, useRef } from "react";

const Example = () => {
  const [time, setTime] = useState(0);
  const [isDisp, setIsDisp] = useState(true);
  const [isCount, setIsCount] = useState(false);
  const intervalId = useRef();

  useEffect(() => {
    document.title = "counter:" + time;
    window.localStorage.setItem("time-key", time);
  }, [time]);

  useEffect(() => {
    if (isCount) {
      intervalId.current = window.setInterval(() => {
        setTime((prev) => prev + 1);
      }, 1000);
    } else {
      window.clearInterval(intervalId.current);
    }
  }, [isCount]);

  useEffect(() => {
    if (!isDisp) {
      window.clearInterval(intervalId.current);
      setIsCount(false);
    }
  }, [isDisp]);

  useLayoutEffect(() => {
    const _time = parseInt(window.localStorage.getItem("time-key"));
    if (!isNaN(_time)) {
      setTime(_time);
    }
  }, []);

  return (
    <h3>
      {isDisp && (
        <>
          <time>{time}</time>
          <span>秒経過</span>
        </>
      )}

      <div>
        <button onClick={() => setIsCount((p) => !p)}>
          {isCount ? "ストップ" : "スタート"}
        </button>
        <button onClick={() => setTime(0)}>リセット</button>
        <button onClick={() => setIsDisp((prev) => !prev)}>
          {isDisp ? "非表示" : "表示"}
        </button>
      </div>
    </h3>
  );
};

export default Example;
