import Profile from "./components/Profile";

const Example = () => {
  const profiles = [
    {
      name: "Geo",
      age: 18,
      Hobbies: ["Sports", "music"],
    },
    {
      name: "Tom",
      age: 25,
      Hobbies: ["Movie", "music"],
    },
    {
      name: "Lisa",
      age: 21,
      Hobbies: ["Sports", "travel", "game"],
    },
  ];
  return (
    <>
      <h3>練習問題</h3>
      <p>
        Profileコンポーネントを使用して、完成コードと同じ画面を作成してください。
      </p>
      <p>
        また、Profileコンポーネント内のリスト表示部分にkeyを設定して、ワーニング表示がされないようにしてください。
      </p>
      <ul>
        {profiles.map((profile) => (
          <Profile
            key={profile.name}
            name={profile.name}
            age={profile.age}
            hobbies={profile.Hobbies}
          />
        ))}
      </ul>
    </>
  );
};

export default Example;
