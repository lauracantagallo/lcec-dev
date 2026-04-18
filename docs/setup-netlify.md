# Netlify Account Setup

This guide walks you through creating a Netlify account and connecting it to your staging repository. Complete the [GitHub setup](setup-github.md) first before starting this guide.

> **Note:** Your developer needs to push the code to your GitHub repositories before Netlify can build your site. Coordinate with them on timing.

---

## Step 1 — Create a Netlify Account

1. Go to [netlify.com](https://netlify.com) and click **Sign up**
2. Select **Sign up with GitHub** — this is the easiest option and connects your accounts automatically
3. Click **Authorize Netlify** when GitHub asks for permission
4. Complete any remaining account setup steps

---

## Step 2 — Add Your Staging Site

1. From your Netlify dashboard, click **Add new site**
2. Select **Import an existing project**
3. Click **Deploy with GitHub**
4. If prompted, click **Configure Netlify on GitHub** and authorize access to your repositories
5. Search for and select **lc-dev** from the repository list

---

## Step 3 — Configure the Build Settings

On the build settings screen, enter the following exactly as shown:

| Setting | Value |
| ------- | ----- |
| Branch to deploy | `dev` |
| Build command | `npm run build` |
| Publish directory | `dist` |

Leave everything else as the default.

Click **Deploy lc-dev**.

---

## Step 4 — Wait for the First Deploy

Netlify will now build and deploy your site for the first time. This takes about 2–3 minutes.

1. You'll see a build log appear — this is normal
2. When it finishes, the status will change to **Published**
3. Netlify will give you a temporary URL like `https://lc-dev.netlify.app` — this is your staging site

If the build fails, let your developer know — they may need to make an adjustment.

---

## Step 5 — Set Up Your Contact Form

Your contact form uses Web3Forms to send submissions to your email. To activate it:

1. Go to [web3forms.com](https://web3forms.com)
2. Enter the email address where you want to receive contact form submissions
3. Click **Create Access Key** — you'll be emailed a key immediately, no account required
4. Send the key to your developer — they'll add it to the site configuration

Until the key is added, the contact form will not send submissions.

---

## What's Next

Once your staging site is live, share the Netlify URL with your developer. They'll use it to preview and test changes before anything goes to your production site.

When you're ready to connect your custom domain to the live site, your developer will guide you through the DNS steps.
