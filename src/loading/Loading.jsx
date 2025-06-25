import "./Loader.css";

const Loader = ({ fadeOut = false }) => {
  return (
    <div id="loader-overlay" className={fadeOut ? "fade-out" : ""}>
      <div id="load">
        <div>G</div>
        <div>N</div>
        <div>I</div>
        <div>D</div>
        <div>A</div>
        <div>O</div>
        <div>L</div>
      </div>
    </div>
  );
};

export default Loader;
