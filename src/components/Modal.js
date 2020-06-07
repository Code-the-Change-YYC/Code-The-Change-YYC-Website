import React from "react"

export const Modal = ({ id, children, img, cta }) => {
  return (
    <div id={id} className="lightbox-basic zoom-anim-dialog mfp-hide">
      <div className="container">
        <div className="row">
          <button
            title="Close (Esc)"
            type="button"
            className="mfp-close x-button"
          >
            ×
          </button>
          <div className="col-lg-8">
            <div className="image-container">{img}</div>
          </div>
          <div className="col-lg-4">
            {children}
            {cta}{" "}
            <a
              className="btn-outline-reg mfp-close as-button"
              href="#screenshots"
            >
              BACK
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
