# Eftekhar's Blog — Owner's Manual

A complete reference for maintaining **eftekharahamed.com** — the personal blog of Eftekhar Ahamed.

Save this folder somewhere safe (e.g. backup to OneDrive, Google Drive, or an external drive). All your blog's source code lives here.

---

## 🌐 Live URLs

- **Production:** https://eftekharahamed.com (also https://www.eftekharahamed.com)
- **GitHub Repository:** https://github.com/eftekharahamed-D22/eftekharahamed-D22.github.io
- **Namecheap Dashboard:** https://ap.www.namecheap.com/domains/list/

---

## 💼 Account Reference

| What | Where | Notes |
|------|-------|-------|
| Domain registrar | Namecheap | eftekharahamed.com — renews May 2027 for ~$14.98 |
| Hosting | GitHub Pages (free, forever) | Repository named `eftekharahamed-D22.github.io` |
| SSL | Let's Encrypt via GitHub Pages (auto-renew, free) | Enforced HTTPS enabled |
| GitHub username | `eftekharahamed-D22` | |
| Git email | `eftekharahamed@gmail.com` | |

---

## 📁 File Structure

```
eftekhar-blog/
│
├── index.html                         ← Home page (the front door)
├── about.html                         ← About page
├── contact.html                       ← Contact page
├── CNAME                              ← Domain config (don't touch)
├── README.md                          ← This file
├── NEW-POST-TEMPLATE.html             ← Copy this for new blog posts
│
├── css/
│   └── style.css                      ← All styling lives here
│
├── js/
│   └── main.js                        ← Scroll reveal animations
│
└── posts/                             ← All your blog posts live here
    ├── hello-world.html
    ├── getting-started-with-coding.html
    ├── my-career-journal-decade-in-dubai.html
    ├── substations-to-luxury.html
    ├── the-quiet-power-of-small-things.html
    └── beneath-the-surface.html
```

---

## ✍️ How to Add a New Blog Post (5 minutes)

### Step 1: Copy the template

Inside the `posts/` folder, copy **NEW-POST-TEMPLATE.html** and rename it to something descriptive, like:

```
posts/my-new-post-title.html
```

Use lowercase letters and hyphens (no spaces, no special characters). This becomes your URL: `eftekharahamed.com/posts/my-new-post-title.html`

### Step 2: Edit the new file

Open it in any text editor (Notepad, VS Code, or Claude Code) and update **these 6 things only**:

1. **`<title>`** — Browser tab title
   ```html
   <title>My Post Title | Eftekhar's Blog</title>
   ```

2. **`<meta name="description">`** — A 1-sentence summary
   ```html
   <meta name="description" content="A short, compelling summary of your post.">
   ```

3. **The date** at the top of the article (line ~36)
   ```html
   <span class="post-date">May 24, 2026</span>
   ```

4. **The tag** — pick one:
   - `<span class="post-tag tag-journey">Journey</span>` — personal stories
   - `<span class="post-tag tag-nature">Nature</span>` — nature reflections
   - `<span class="post-tag tag-spiritual">Spiritual</span>` — spiritual thoughts
   - `<span class="post-tag tag-experience">Experience</span>` — work / life lessons
   - `<span class="post-tag tag-science">Science</span>` — science / ideas
   - `<span class="post-tag tag-life">Life</span>` — general life

5. **The title** — use `<em>` for the part you want in gradient italic
   ```html
   <h1>My Post Title — <em>Italic Highlight</em></h1>
   ```

6. **The body content** — write your post. See "Formatting Tips" below.

### Step 3: Add a card on the home page

Open `index.html` and find the `<div class="posts-grid">` section. Copy one of the existing `<article class="post-card">` blocks and paste it at the top (so your new post is featured first). Update:
- The `href` to your new file: `posts/your-new-post.html`
- The date
- The tag
- The title
- The 2-sentence summary

### Step 4: Push to GitHub (this publishes it live)

Open PowerShell and run:

```powershell
cd C:\Users\eftek\Downloads\files\eftekhar-blog
git add -A
git commit -m "Add new post: Your Post Title"
git push
```

That's it. Your post is live at **eftekharahamed.com/posts/your-new-post.html** within 30 seconds.

---

## ✏️ Formatting Tips for Post Content

All of these go inside the `<div class="post-content">` block:

| What you want | HTML to write |
|---------------|---------------|
| Regular paragraph | `<p>Your paragraph text.</p>` |
| Bold | `<strong>important phrase</strong>` |
| Italic (no color) | `<em>emphasis</em>` |
| Section heading (large) | `<h2>Section Title</h2>` |
| Sub-heading | `<h3>Subsection</h3>` |
| Bullet list | `<ul><li>Item 1</li><li>Item 2</li></ul>` |
| Numbered list | `<ol><li>Step 1</li><li>Step 2</li></ol>` |
| Quote | `<blockquote>Quote text here.</blockquote>` |
| Link to another page | `<a href="https://example.com">link text</a>` |
| Inline code | `<code>some code</code>` |

---

## 🔧 How to Edit Existing Pages

| To change... | Open this file |
|--------------|----------------|
| Home page hero text, intro, post cards | `index.html` |
| About me content | `about.html` |
| Contact info, email | `contact.html` |
| Colors, fonts, spacing | `css/style.css` |
| An existing blog post | `posts/[post-name].html` |
| Site-wide footer text | All HTML files (search for the footer line) |

After editing, push to GitHub:

```powershell
cd C:\Users\eftek\Downloads\files\eftekhar-blog
git add -A
git commit -m "Describe what you changed"
git push
```

---

## 🚀 Three Common Tasks

### A) Preview changes before publishing

Just double-click `index.html` on your computer. It opens in your browser. Make changes → refresh browser → see them.

### B) Discard changes if you broke something

```powershell
cd C:\Users\eftek\Downloads\files\eftekhar-blog
git checkout -- .
```

This restores all files to the last published version. Like an undo button.

### C) See what changed since the last push

```powershell
cd C:\Users\eftek\Downloads\files\eftekhar-blog
git status
git diff
```

---

## 🎨 Design System (so future edits feel consistent)

**Colors** (defined in `css/style.css` under `:root`):
- Page background: `#f4f8f6` (mint-cream, easy on eyes)
- Text: `#0c2340` (deep navy)
- Soft text: `#2d4a6b`
- Accent: `#0284c7` (sky blue)
- Accent gradient: sky-blue → green

**Fonts:**
- Headings & elegant accents: **Cormorant Garamond** (serif)
- Body text & UI: **Inter** (sans-serif)

**Voice / tone:**
- Refined, warm, reflective
- Short paragraphs
- "Less but better" — restrained elegance
- Italic emphasis in gradient sparingly (one word per heading)

---

## ⚠️ Don't Touch These

- `CNAME` file — connects your domain to GitHub Pages. Removing breaks the site.
- `.git/` folder — Git's internal records. Never delete this folder.

---

## 🆘 If Something Breaks

1. **Site is down?** Check https://github.com/eftekharahamed-D22/eftekharahamed-D22.github.io/actions — the latest deployment should show a green checkmark.
2. **Domain not working?** Check Namecheap DNS settings; the A records should still point to GitHub's IPs (185.199.108.153, .109, .110, .111).
3. **Made a bad change?** Run `git checkout -- .` to undo. Or visit GitHub's "Commits" history and copy code from a previous version.
4. **Forgot how to do something?** Re-read this README.

---

## 📅 Annual Reminder

**Every May**: log into Namecheap and check that `eftekharahamed.com` auto-renew is enabled. Cost is ~$14.98/year. If it lapses, the domain becomes available for anyone to buy.

---

## 🌱 Future Ideas

- Add a newsletter signup (Buttondown, ConvertKit, or Substack — all have free tiers)
- Add Google Analytics or Plausible Analytics
- Add an RSS feed so readers can subscribe in their reader
- Add an "Archive" page listing all posts chronologically
- Add tags filter (e.g., show only "Journey" posts)

---

*Last updated: May 22, 2026*
*Maintained by: Eftekhar Ahamed*
