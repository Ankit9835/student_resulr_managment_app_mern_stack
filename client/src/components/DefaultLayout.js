import React from 'react'

const DefaultLayout = (props) => {
  return (
    <div className="layout">
      <div className="header d-flex justify-content-between align-items-center">
        <h1 className="text-white">
          {" "}
          <b className="secondary-text">SHEY</b> RESULTS{" "}
        </h1>
        <div>
          <h1 className="text-white text-small">Admin</h1>
          <h1
            className="text-white text-small cursor-pointer underline"
            onClick={() => {
              localStorage.removeItem("token");
              //navigate("/login");
            }}
          >
            Logout
          </h1>
        </div>
      </div>
      <div className="content">{props.children}</div>
    </div>
  )
}

export default DefaultLayout
