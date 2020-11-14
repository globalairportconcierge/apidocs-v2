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
$('pre.highlight').prepend('<div class="run-insomnia"><a href="https://insomnia.rest/run/?label=GAC%20V1.1.0&uri=https%3A%2F%2Fraw.githubusercontent.com%2Fglobalairportconcierge%2Fapidocs-v1.1.0%2Fmaster%2Freference%2FGAC.v1.yaml%3Ftoken%3DAEL5HX6CGFLUYGKHBAEVFKK7WAAJS" target="_blank"><svg style="clip-rule:evenodd;fill-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41420996" viewBox="0 0 18 18" height="18" width="18"><rect ry="3.290308e-14" y="0" x="0" height="18" width="18" id="rect4551" style="opacity:1;fill:#6a57d5;fill-opacity:1;stroke:none;stroke-width:1.57095289;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1" /><path id="path4" style="fill:#ffffff;stroke-width:1.06089664" d="m 9,1.4517199 c 4.165081,0 7.54828,3.3821378 7.54828,7.5482798 C 16.54828,13.16614 13.165081,16.54828 9,16.54828 4.833858,16.54828 1.45172,13.16614 1.45172,8.9999997 1.45172,4.8338577 4.833858,1.4517199 9,1.4517199 Z M 8.047314,2.7141867 C 8.359218,2.6685767 8.676426,2.6441667 9,2.6441667 c 3.507325,0 6.355832,2.847444 6.355832,6.355832 0,3.5083843 -2.848507,6.3558293 -6.355832,6.3558293 -3.508386,0 -6.356892,-2.847445 -6.356892,-6.3558293 0,-0.323575 0.02441,-0.641845 0.07108,-0.951626 0.667305,0.59198 1.544668,0.951626 2.506901,0.951626 2.085722,0 3.778912,-1.693192 3.778912,-3.777855 0,-0.962232 -0.359643,-1.839596 -0.952684,-2.507958 z" /></svg></a></div>');}
