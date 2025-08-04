addEventListener("fetch", event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {
  const url = new URL(request.url);
  const hostname = url.hostname;

  if (hostname.startsWith("www.")) {
    url.hostname = hostname.replace(/^www\./, "");
    return Response.redirect(url.toString(), 301);
  }

  return fetch(request);
}
