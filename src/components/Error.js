import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  console.log("Route Error:", err);

  return (
    <div>
      <h1>Oops!</h1>
      <h2>Something went wrong</h2>

      <p>{String(err?.statusText || err?.message || "Page not found")}</p>
    </div>
  );
};

export default Error;
