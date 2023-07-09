import React from "react";
import { Triangle } from "react-loader-spinner";

const Preloader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        width: "100%",
        alignItems: "center",
      }}
    >
      <Triangle
        height="80"
        width="80"
        color="#69E166"
        ariaLabel="loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
    </div>
  );
};

export default Preloader;
