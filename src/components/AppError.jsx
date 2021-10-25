import React from "react";

const AppError = (props) => {
  return (
    <div class="alert alert-success" role="alert">
      <h4 class="alert-heading">Warning!</h4>
      <p>{props.error.message}</p>
    </div>
  );
};

export default AppError;
