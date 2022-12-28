import { useState, lazy, Suspense, startTransition } from "react";

const LagyComponentA = lazy(() => import("./components/ComponentA"));
const LagyComponentB = lazy(() => import("./components/ComponentB"));

const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button
        onClick={() => {
          startTransition(() => {
            setCompA((prev) => !prev);
          });
        }}
      >
        ComponentA
      </button>
      <Suspense fallback={<div>Loading...</div>}>
        {compA ? <LagyComponentA /> : <LagyComponentB />}
      </Suspense>
    </>
  );
};

export default Example;
