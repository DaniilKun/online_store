import React from "react"
import ContentLoader from "react-content-loader"

// type SkeletonProps = {
//   props:any
// }

const Skeleton: React.FC = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={465}
    viewBox="0 0 280 465"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="140" cy="130" r="130" /> 
    <rect x="0" y="320" rx="15" ry="15" width="280" height="66" /> 
    <rect x="2" y="407" rx="5" ry="5" width="90" height="25" /> 
    <rect x="123" y="398" rx="25" ry="25" width="153" height="45" /> 
    <rect x="0" y="280" rx="5" ry="5" width="280" height="20" />
  </ContentLoader>
)

export default Skeleton