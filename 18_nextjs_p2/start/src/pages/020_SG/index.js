export default function SG({ message }) {
  console.log("Sg");

  return <h3>SG: {message}</h3>;
}

export async function getStaticProps(context) {
  return {
    props: {
      message: "Hello from getStaticProps",
    },
  };
}
