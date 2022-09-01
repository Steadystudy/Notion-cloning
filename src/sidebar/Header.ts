export default function Header({ $target }) {
  const $header = document.createElement("div");
  $header.classList.add("header");

  const $headerText = document.createElement("h1");
  $header.appendChild($headerText);
  $headerText.textContent = "노션";

  this.render = () => {
    $target.appendChild($header);
  };

  this.render();
}
