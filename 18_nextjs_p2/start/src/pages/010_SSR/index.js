import { useEffect, useState } from "react";

export default function SSR({ message }) {
  console.log("Ssr");

  const [state, setState] = useState(0);

  useEffect(() => {
    document.title = `SSR: ${state}`;
  }, []);

  const val = 0;

  console.log(message);

  return (
    <h3>
      SSR: {val},{state}
    </h3>
  );
}

export async function getServerSideProps(context) {
  console.log(context);
  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
    props: {
      message: "Hello from getServerSideProps",
    },
  };
}
