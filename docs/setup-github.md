# GitHub Account Setup

This guide walks you through creating a GitHub account and setting up the two repositories for your website.

---

## Step 1 — Create a GitHub Account

1. Go to [github.com](https://github.com) and click **Sign up**
2. Enter your email address, create a password, and choose a username
   - Your username will be part of your site's temporary URL, so something like `lauraconsulting` or `lceducation` works well
3. Complete the verification steps and click **Create account**
4. Check your email and click the verification link GitHub sends you

---

## Step 2 — Create the Production Repository (lc-prod)

This repository will hold your live website.

1. Once logged in, click the **+** icon in the top-right corner and select **New repository**
2. Fill in the details:
   - **Repository name:** `lc-prod`
   - **Visibility:** Public
   - Leave everything else unchecked — do not add a README, .gitignore, or license
3. Click **Create repository**
4. Leave the page open — you don't need to do anything else here yet

---

## Step 3 — Create the Staging Repository (lc-dev)

This repository will hold the staging version of your website used for previewing changes before they go live.

1. Click the **+** icon again and select **New repository**
2. Fill in the details:
   - **Repository name:** `lc-dev`
   - **Visibility:** Public
   - Leave everything else unchecked
3. Click **Create repository**

---

## Step 4 — Add Your Developer as a Collaborator

You need to give your developer access to push code to both repositories.

Repeat these steps for **both** `lc-prod` and `lc-dev`:

1. Go to the repository page
2. Click **Settings** (tab along the top)
3. In the left sidebar, click **Collaborators**
4. Click **Add people**
5. Search for your developer's GitHub username and click **Add [username] to this repository**
6. Your developer will receive an email invitation — they need to accept it before they can push code

---

## Step 5 — Enable GitHub Pages on lc-prod

This tells GitHub to publish your production site automatically whenever new code is pushed.

1. Go to your `lc-prod` repository
2. Click **Settings**
3. In the left sidebar, click **Pages**
4. Under **Source**, select **GitHub Actions**
5. That's it — no other changes needed on this page

> Your developer will handle the rest. Once they push the code over, your site will deploy automatically.

---

## What's Next

Once you've completed these steps, share your GitHub username with your developer so they can push the website code to both repositories.

After the code is pushed, your developer will let you know the temporary URL where you can preview the site while your custom domain is being set up.
