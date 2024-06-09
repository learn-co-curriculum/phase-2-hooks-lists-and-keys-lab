import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const displayLinks = links.map((item) => {
    return <a key={item} href={`#${item}`}>{item}</a>
  })

  return <nav>{displayLinks}</nav>;
}

export default NavBar;
