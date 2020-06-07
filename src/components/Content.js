import React from "react"

export const ContentCenter = ({ id, children, cta }) => {
  return (
    <div id={id} className="cards-1">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            {children}
            {cta}
          </div>
        </div>
      </div>
    </div>
  )
}

export const ContentLeft = ({ id, children, img, cta }) => {
  return (
    <div id={id} className="cards-1">
      <div className="basic-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="text-container">
                {children}
                {cta}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="image-container">{img}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export const ContentRight = ({ id, children, img, cta }) => {
  return (
    <div id={id} className="cards-1">
      <div className="basic-2">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="image-container">{img}</div>
            </div>
            <div className="col-lg-6">
              <div className="text-container">
                {children}
                {cta}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
