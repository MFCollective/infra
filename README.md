# Infrastructure Repository

This repository contains the infrastructure code, CI/CD workflows, and Cloudflare Worker scripts that power MF Collective’s cross-entity platform. It supports all domains, subdomains, DNS configurations, and serverless logic required for public-facing services and internal tooling.

---

## 📁 Folder Structure

```plaintext
infra/
├── terraform/           # Infrastructure as Code (Cloudflare, DNS, Domains)
│   ├── cloudflare/      # Zone configs, records, workers, SSL, etc.
│   └── dns/             # Domain-specific DNS modules
├── workers/             # Cloudflare Worker scripts
│   ├── www-redirector/  # Redirects www.domain.com → domain.com
│   └── maintenance-mode/ # Temporary offline pages or hold states
├── ci/
│   └── workflows/       # GitHub Actions for deployment pipelines
└── README.md            # This file
```

---

## 🚀 Deployment Pipelines

This repo uses **Wrangler** and **GitHub Actions** for CI/CD.

- Workers auto-deploy on merge to `main`
- `terraform apply` is run manually or through CI based on tag triggers
- Each new domain should be added to both:
  - `terraform/cloudflare/` → for DNS & Worker routes
  - `workers/www-redirector/` → for www → apex redirect

---

## 🛠️ Tools Used

| Tool         | Purpose                         |
|--------------|---------------------------------|
| Cloudflare   | DNS, SSL, Workers               |
| Wrangler CLI | Deploy Workers to edge network  |
| GitHub Actions | CI/CD pipelines for workers   |
| Terraform    | Infrastructure as Code (DNS, routing) |

---

## 📦 Adding a New Domain

1. Add DNS config to `terraform/cloudflare/`
2. Add a route to the `www-redirector` worker
3. Commit and push to trigger CI/CD
4. Optionally, create a new `sites/<brand>` folder for static site deployment

---

## 📄 Documentation

- [Wrangler Docs](https://developers.cloudflare.com/workers/wrangler/)
- [Cloudflare Workers](https://developers.cloudflare.com/workers/)
- [Terraform Cloudflare Provider](https://registry.terraform.io/providers/cloudflare/cloudflare/latest)

---

## 🧠 Maintainers

- **Oscil8** — Infra & Automation
- **GitFlash** — Dev Support
- **Nathan (MFC)** — Implementation Co-Lead
- **Mayur (MFC)** — Implementation Co-Lead

---

## 🔐 Permissions

This repo is **private** and intended for internal MFC infrastructure maintainers only. Do not expose credentials or secrets publicly.