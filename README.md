# rushikesh.dev — Portfolio Website

[![Deploy Portfolio to S3](https://img.shields.io/badge/deploy-passing-brightgreen)](https://github.com/Rushikesh-1010/my-portfolio/actions)
[![Built with React](https://img.shields.io/badge/built%20with-React%20%26%20Tailwind-38bdf8)](#tech-stack)
[![Hosted on AWS S3](https://img.shields.io/badge/hosted%20on-AWS%20S3-FF9900)](#aws-architecture)

My personal portfolio website — built with **React + Tailwind CSS**, hosted on **AWS S3 static website hosting**, and deployed automatically via a **GitHub Actions CI/CD pipeline** on every push to `master`.

🔗 **Live site:** http://my-portfolio-rd.s3-website.ap-south-1.amazonaws.com

---

## 📸 Preview

The site includes sections for About, Skills, Projects, Experience, Education, Certifications, and Contact — with a downloadable resume and direct links to Email, LinkedIn, and GitHub.

---

## 🏗️ Architecture

```
Developer (Git Bash / VS Code)
        │
        │  git push origin master
        ▼
   GitHub Repository (Rushikesh-1010/my-portfolio)
        │
        │  triggers on push to master
        ▼
   GitHub Actions Workflow (.github/workflows/deploy.yml)
        │
        ├── Checkout repository
        ├── Setup Node.js (v20)
        ├── Install dependencies (npm install)
        ├── Build project (npm run build)
        ├── Configure AWS credentials (via repo secrets)
        └── Deploy build output to S3
                ▼
        AWS S3 Bucket (my-portfolio-rd)
        Static Website Hosting — ap-south-1 (Mumbai)
                ▼
        Live at my-portfolio-rd.s3-website.ap-south-1.amazonaws.com
```

---

## ⚙️ Tech Stack

| Layer            | Technology                              |
|-------------------|------------------------------------------|
| Frontend          | React, Tailwind CSS, Vite                |
| CI/CD             | GitHub Actions                           |
| Hosting           | AWS S3 (Static Website Hosting)          |
| Access Control    | AWS IAM (scoped user + managed policies) |
| Version Control   | Git, GitHub                              |

---

## ☁️ AWS Architecture

### S3 Bucket
- **Bucket name:** `my-portfolio-rd`
- **Region:** `ap-south-1` (Asia Pacific – Mumbai)
- Configured for **static website hosting**, serving `index.html` directly
- Public read access enabled for website objects (`favicon.svg`, `index.html`, `assets/`, resume PDF)

### IAM User
- **User:** `my-portfolio-user`
- Scoped with two AWS-managed policies:
  - `AmazonS3FullAccess`
  - `AmazonS3FilesFullAccess`
- Access keys generated for this user are used exclusively by the GitHub Actions workflow — never committed to the repository.

---

## 🔐 GitHub Actions Secrets

Sensitive AWS credentials are stored securely as **encrypted repository secrets** under  
`Settings → Secrets and variables → Actions`, and referenced in the workflow via `${{ secrets.* }}`:

| Secret Name             | Purpose                              |
|--------------------------|---------------------------------------|
| `AWS_ACCESS_KEY_ID`      | IAM user access key                  |
| `AWS_SECRET_ACCESS_KEY`  | IAM user secret key                  |
| `S3_BUCKET`              | Target S3 bucket name (`my-portfolio-rd`) |

> No credentials are ever hardcoded in the repository or workflow file.

---

## 🚀 CI/CD Pipeline (`.github/workflows/deploy.yml`)

The workflow runs automatically on every push to `master` and performs the following steps:

1. **Checkout repository** — pulls the latest source code
2. **Setup Node.js** — configures Node v20 environment
3. **Install dependencies** — `npm install`
4. **Build project** — `npm run build` (generates production-ready static assets)
5. **Configure AWS credentials** — using `aws-actions/configure-aws-credentials@v4` with repo secrets
6. **Deploy to S3** — syncs the build output to the `my-portfolio-rd` S3 bucket

Each run is fully logged in the **Actions** tab, including per-step timing and a green checkmark on success.

### Sample workflow snippet

```yaml
- name: Checkout repository
  uses: actions/checkout@v4

- name: Setup Node.js
  uses: actions/setup-node@v4
  with:
    node-version: 20

- name: Install dependencies
  run: npm install

- name: Build project
  run: npm run build

- name: Configure AWS credentials
  uses: aws-actions/configure-aws-credentials@v4
  with:
    aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
    aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
    aws-region: ap-south-1

- name: Deploy to S3
  run: aws s3 sync ./dist s3://${{ secrets.S3_BUCKET }} --delete
```

---

## 📂 Project Structure

```
my-portfolio/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD pipeline definition
├── public/
│   ├── favicon.svg
│   └── Rushikesh_Debadwar_Resume.pdf
├── src/
│   ├── assets/
│   ├── components/
│   ├── data/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🧑‍💻 Local Development

```bash
# Clone the repository
git clone https://github.com/Rushikesh-1010/my-portfolio.git
cd my-portfolio

# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build
```

---

## 📦 Deployment

Deployment is fully automated — simply push to `master`:

```bash
git add .
git commit -m "update content"
git push origin master
```

GitHub Actions will pick up the push, run the build, and sync the output to the S3 bucket within seconds. Deployment status can be tracked under the repository's **Actions** tab.

---

## ✨ Sections Featured on the Site

- **About** — Intro, current role, AWS stats (services used, AZs deployed, CGPA)
- **Skills** — Cloud, DevOps, and development skill breakdown
- **Projects** — Featured AWS / DevOps projects
- **Experience** — Internship and training history
- **Education** — Academic background
- **Certifications** — Relevant certifications
- **Contact** — Email, LinkedIn, and GitHub links

---

## 📬 Contact

- **Email:** rushidebadwar@gmail.com
- **LinkedIn:** [linkedin.com/in/rushikesh-d10](https://linkedin.com/in/rushikesh-d10)
- **GitHub:** [github.com/Rushikesh-1010](https://github.com/Rushikesh-1010)

---

© 2026 Rushikesh Debadwar. Built with React & Tailwind. Deployed on AWS S3 via GitHub Actions.
