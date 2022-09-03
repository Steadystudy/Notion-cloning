export default function NotFoundPage({ $target }) {
  const $notFoundPage = document.createElement("div");
  $target.appendChild($notFoundPage);

  this.render = () => {
    $notFoundPage.innerHTML = "404 페이지임당";
  };

  this.render();
}
