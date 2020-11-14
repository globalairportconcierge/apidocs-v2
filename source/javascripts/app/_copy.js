function copyToClipboard(container) {
  const el = document.createElement('textarea');
  el.value = container.textContent.replace(/\n$/, '');
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}

function setupCodeCopy() {
  $('pre.highlight').prepend('<div class="copy-clipboard"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>Copy to Clipboard</title><path d="M18 6v-6h-18v18h6v6h18v-18h-6zm-12 10h-4v-14h14v4h-10v10zm16 6h-14v-14h14v14z"></path></svg></div>');
  $('.copy-clipboard').on('click', function() {
    copyToClipboard(this.parentNode.children[1]);
  });
  $('pre.highlight').prepend('<div><a href="https://insomnia.rest/run/?label=GAC%20V1.1.0&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fglobalairportconcierge%2Fapidocs-v1.1.0%2Fmaster%2Freference%2FGAC.v1.yaml%3Ftoken%3DAEL5HX6CGFLUYGKHBAEVFKK7WAAJS" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a></div>');
}
