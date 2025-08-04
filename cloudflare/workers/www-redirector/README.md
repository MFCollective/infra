# www-redirector

This Cloudflare Worker redirects all traffic from `www.example.com` to `example.com`, preserving the path and query string.

## 🔁 Redirect Logic (example)

- `https://www.neoncap.io/about?ref=123` → `https://neoncap.io/about?ref=123`

## 🛠 Deployment

1. Install Wrangler:

```bash
npm install -g wrangler
wrangler login
```

2. Publish the Worker:

```bash
wrangler publish
```

3. In Cloudflare Dashboard, bind the following routes:

```
www.neoncap.io/*
www.reserveplay.com/*
...
```

Assign this script: `www-redirector`

## 🔐 Config

Edit `wrangler.toml` with your Cloudflare `account_id`. You can leave out `zone_id` and manually bind routes via the dashboard.

---
