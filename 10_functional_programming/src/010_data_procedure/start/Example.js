const Example = () => {
  const nums = [1, 2, 3];

  const sum = (array) => {
    const sum = array.reduce((acc, num) => {
      return acc + num;
    });

    return sum;
  };

  const numObj = {
    num: [1, 2, 3],
    sum() {
      const nums = this.num;
      let sumValue = 0;

      sumValue = nums.reduce((acc, num) => {
        return acc + num;
      }, 0);

      return sumValue;
    },
  };

  return (
    <>
      <h3>状態管理と処理を分離</h3>
      <p>状態（データ）と処理（やりたいこと）は切り離す</p>
      <div>オブジェクト指向：{numObj.sum()}</div>
      <div>関数型：{sum(nums)}</div>
    </>
  );
};

export default Example;
