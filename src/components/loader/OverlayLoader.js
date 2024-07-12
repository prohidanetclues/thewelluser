import Loading from "@/app/loading";
import React from "react";

function OverlayLoader({ loading, children }) {
  return (
    <div className={`${loading ? "loader_up" : ""}`}>
      {loading && <Loading />}
      {children}
    </div>
  );
}

export default OverlayLoader;
