import React from "react";
import AppLayout from "../component/Layout/Layout";
import Link from "next/link";

function Error() {
  return <>
<div className="container">
<div className="error-wrapper">
  <h1>4 <span>
  <svg width="100" height="150" viewBox="0 0 150 200" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15.6641 182.461L11.2891 185.977C10.0391 186.953 8.51562 187.5 6.95312 187.5C3.125 187.5 0 184.375 0 180.547V75C0 33.5938 33.5938 0 75 0C116.406 0 150 33.5938 150 75V180.547C150 184.375 146.875 187.5 143.047 187.5C141.484 187.5 139.961 186.953 138.711 185.977L134.336 182.461C129.102 178.281 121.523 178.945 117.109 183.984L105.195 197.656C103.906 199.141 101.992 200 100 200C98.0078 200 96.1328 199.141 94.8047 197.656L84.4141 185.742C79.4531 180.039 70.5859 180.039 65.5859 185.742L55.1953 197.656C53.9062 199.141 51.9922 200 50 200C48.0078 200 46.1328 199.141 44.8047 197.656L32.8906 183.984C28.4766 178.945 20.8984 178.281 15.6641 182.461ZM62.5 75C62.5 71.6848 61.183 68.5054 58.8388 66.1612C56.4946 63.817 53.3152 62.5 50 62.5C46.6848 62.5 43.5054 63.817 41.1612 66.1612C38.817 68.5054 37.5 71.6848 37.5 75C37.5 78.3152 38.817 81.4946 41.1612 83.8388C43.5054 86.183 46.6848 87.5 50 87.5C53.3152 87.5 56.4946 86.183 58.8388 83.8388C61.183 81.4946 62.5 78.3152 62.5 75ZM100 87.5C103.315 87.5 106.495 86.183 108.839 83.8388C111.183 81.4946 112.5 78.3152 112.5 75C112.5 71.6848 111.183 68.5054 108.839 66.1612C106.495 63.817 103.315 62.5 100 62.5C96.6848 62.5 93.5054 63.817 91.1612 66.1612C88.817 68.5054 87.5 71.6848 87.5 75C87.5 78.3152 88.817 81.4946 91.1612 83.8388C93.5054 86.183 96.6848 87.5 100 87.5Z" fill="white"/>
</svg>
    </span> 4</h1>
  <h2>Error: 404 page not found</h2>
  <p>Sorry, the page you're looking for cannot be accessed</p>

 <button className="btn btn-linear hover-up mt-25">
 <Link href={'/'}>
    Back To Home
  </Link>
 </button>
</div>
</div>
  
  </>;
}
Error.layout = AppLayout;

export default Error;
