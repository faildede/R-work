import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="163" y="88" rx="3" ry="3" width="88" height="6" /> 
    <rect x="177" y="106" rx="3" ry="3" width="52" height="6" /> 
    <rect x="224" y="23" rx="3" ry="3" width="54" height="10" /> 
    <rect x="128" y="21" rx="3" ry="3" width="52" height="11" /> 
    <rect x="150" y="117" rx="3" ry="3" width="112" height="11" /> 
    <circle cx="203" cy="55" r="25" /> 
    <rect x="134" y="138" rx="0" ry="0" width="130" height="15" /> 
    <rect x="208" y="137" rx="0" ry="0" width="5" height="0" /> 
    <rect x="185" y="137" rx="0" ry="0" width="5" height="9" />
  </ContentLoader>
)

export default MyLoader