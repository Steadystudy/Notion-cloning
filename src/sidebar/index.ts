import Header from "./Header.js";

export default function Sidebar({ $target, initialState }) {
  const $sidebarContainer = document.createElement("div");
  $sidebarContainer.classList.add("sidebarContainer");

  this.state = initialState;

  new Header({ $target: $sidebarContainer });

  this.setState = () => {
    this.render();
  };

  this.render = () => {
    $target.appendChild($sidebarContainer);
  };
}
