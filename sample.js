javascript:
const deleteTarget = ["ul",".js-first-tabstop","button",".stream-end-inner",".flex-module-header",".promoted-heading",".ProfileTweet-actionCountForAria",".t1-form.tweet-form.condensed.is-reply",".self-thread-permalink-cta"];
deleteTarget.forEach(e => document.querySelectorAll(e).forEach(e => e.remove()));
const updateTarget = {"a":"href",".AdaptiveMedia-singlePhoto":"style",".AdaptiveMedia-photoContainer":"style"};
Object.keys(updateTarget).forEach(key => document.querySelectorAll(key).forEach(e => e.removeAttribute(updateTarget[key])));
document.querySelectorAll("span.js-short-timestamp").forEach(e => e.innerText = "\r\n" + e.innerText);
const html = document.createElement('a');
html.href = 'data:text/plain,' + encodeURIComponent(document.querySelector("#permalink-overlay-dialog").innerHTML.toString());
html.download = 'gyotaku.html';
html.style.display = 'none';
document.body.appendChild(html);
html.click();
location.reload();