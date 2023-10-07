"use client";

const ErrorHandler = (props) => {
  const { error } = props;
  return (
    <div>
      <h2>
        Woops! <br />
        Something went wrong :(
      </h2>
      <p>Have you tried turning it off and on again?</p>
      <button onClick={() => window.location.reload()}>Refresh the page</button>
    </div>
  );
};

export default ErrorHandler;
