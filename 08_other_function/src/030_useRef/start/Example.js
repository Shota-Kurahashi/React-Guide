import { useState, useRef } from "react";

const Case1 = () => {
  const [value, setValue] = useState("");
  const [isPlay, setIsPlay] = useState(false);

  const inputRef = useRef();

  const movieRef = useRef();

  return (
    <div>
      <h3>ユースケース1</h3>
      <input
        type="text"
        ref={inputRef}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={() => inputRef.current.focus()}>
        インプット要素をフォーカスする
      </button>
      <video
        style={{
          width: "100%",
        }}
        ref={movieRef}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
      </video>
      <button
        onClick={() => {
          if (isPlay) {
            movieRef.current.pause();
          } else {
            movieRef.current.play();
          }
          setIsPlay(!isPlay);
        }}
      >
        {isPlay ? "動画を一時停止する" : "動画を再生する"}
      </button>
    </div>
  );
};

const Example = () => {
  return (
    <>
      <Case1 />
    </>
  );
};

export default Example;
