/** @format */

const Loader = () => {
  return (
    <div className="text-center">
      <div
        className="spinner-border m-5"
        style={{ width: "3rem", height: "3rem" }}
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loader;
