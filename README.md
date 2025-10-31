# Personal Portfolio ⚡️ 
> A clean, beautiful, responsive portfolio template for Software Developers!

[![Website shields.io](https://img.shields.io/badge/website-up-yellow)](https://smasaduzzaman.github.io/)
[![License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org)

### Website Preview
<p align="center"> 
  <kbd>
    <a href="https://smasaduzzaman.github.io/" target="_blank"><img src="examples/preview.png">
  </a>
  </kbd>
</p>

:star: Star me on GitHub — it helps!

## Features 📋
⚡️ Fully Responsive\
⚡️ Valid HTML5 & CSS3\
⚡️ Typing animation using `Typed.js`\
⚡️ Easy to modify


## Sections 📚
✔️ About me\
✔️ Experience\
✔️ Projects \
✔️ Skills \
✔️ Education\
✔️ Award\
✔️ Publication\
✔️ Contact Info\
✔️ Resume

To view a live example, **[click here](https://smasaduzzaman.github.io/)**

## Tools Used 🛠️
* [<b>GitHub Pages</b>](https://create-react-app.dev/docs/deployment/#github-pages) - To host my static website (HTML, CSS, JS).
* [<b>Materialize</b>](https://materializecss.com/) - A CSS framework to get Google's Material Design components.
* [<b>Typed.js</b>](https://mattboldt.com/demos/typed-js/) - JavaScript Library

## Contributing 💡
#### Step 1

- **Option 1**
    - 🍴 Fork this repo!

- **Option 2**
    - 👯 Clone this repo to your local machine.


#### Step 2

- **Build your code** 🔨🔨🔨

#### Step 3

- 🔃 Create a new pull request.

# 📝 Content Update Guide

This guide shows you how to easily update your portfolio content without touching the HTML/CSS/JS code directly.

## 🎯 **Quick Start**

All your content is stored in **`assets/js/data.js`** - just edit this file to update your portfolio!

## 📊 **What You Can Update**

### 1. **Personal Information**
```javascript
personal: {
    name: "Your Name",
    title: "Your Title",
    email: "your.email@gmail.com",
    phone: "+1234567890",
    location: "Your City, Country",
    profileImage: "assets/img/your-photo.jpg",
    resumeUrl: "assets/your-resume.pdf",
    description: "Your hero section description..."
}
```

### 2. **Social Links**
```javascript
social: {
    github: "https://github.com/yourusername/",
    linkedin: "https://www.linkedin.com/in/yourusername/",
    googleScholar: "https://scholar.google.com/citations?user=...",
    email: "mailto:your.email@gmail.com"
}
```

### 3. **Typing Animation Text**
```javascript
typingTitles: [
    'Data Scientist',
    'Your Title 1',
    'Your Title 2',
    'Add More Titles'
]
```

### 4. **About Section Stats**
```javascript
stats: [
    { count: 50, label: "Projects Completed" },
    { count: 5, label: "Research Papers" },
    { count: 5, label: "Years Experience" },
    { count: 15, label: "Technologies" }
]
```

## 💼 **Adding Experience**

Add new jobs to the `experience` array:

```javascript
{
    period: "Jan 2023 - Present",
    title: "Your Job Title",
    company: "Company Name",
    responsibilities: [
        "Responsibility 1",
        "Responsibility 2",
        "Responsibility 3"
    ],
    skills: ["Skill1", "Skill2", "Skill3"]
}
```

## 🚀 **Adding Projects**

Add new projects to the `projects` array:

```javascript
{
    title: "Project Name",
    description: "Brief project description...",
    image: "assets/img/project-image.jpg",
    technologies: ["Tech1", "Tech2", "Tech3"],
    category: ["ml", "web", "research"], // Choose from: ml, web, research
    links: {
        demo: "https://your-demo-link.com",  // Optional
        github: "https://github.com/you/repo"  // Optional
    }
}
```

### **Project Categories:**
- `"ml"` - Machine Learning projects
- `"web"` - Web applications
- `"research"` - Research projects

## 🛠 **Adding Skills**

Add skills to existing categories or create new ones:

```javascript
"Your Skill Category": [
    { 
        name: "Skill Name", 
        icon: "fas fa-icon-name",  // FontAwesome icon
        level: 85  // Percentage (0-100)
    }
]
```

### **Common Icons:**
- Programming: `fab fa-python`, `fab fa-js-square`, `fab fa-react`
- Tools: `fas fa-database`, `fas fa-chart-line`, `fab fa-docker`
- General: `fas fa-code`, `fas fa-brain`, `fas fa-tools`

## 📚 **Adding Publications**

Add new publications to the `publications` array:

```javascript
{
    title: "Your Paper Title",
    journal: "Journal Name, Year",
    authors: "Author1, Author2, Your Name, etc.",
    tags: ["Tag1", "Tag2", "Tag3"]
}
```

## 🖼 **Adding Images**

1. **Profile Photo**: Add to `assets/img/` and update `profileImage` in data.js
2. **Project Images**: Add to `assets/img/` and reference in project `image` field
3. **Resume**: Add PDF to `assets/` and update `resumeUrl` in data.js

## 🎨 **Customizing Colors & Styles**

To change colors, edit the CSS variables in `assets/css/style.css`:

```css
:root {
    --primary-color: #3b82f6;     /* Main blue color */
    --secondary-color: #f59e0b;   /* Orange accent */
    --text-primary: #1f2937;      /* Dark text */
    --bg-primary: #ffffff;        /* Background */
}
```

## 📱 **Testing Your Changes**

1. Save your changes to `data.js`
2. Refresh your browser
3. The content will automatically update!

## ⚠ **Important Notes**

- **Always backup** your `data.js` file before making changes
- **Use proper JSON syntax** - don't forget commas and quotes
- **Test locally** before deploying to GitHub Pages
- **Image paths** are relative to the main directory

## 🔧 **Common Issues**

### **Content Not Updating?**
1. Check browser console for JavaScript errors
2. Make sure `data.js` syntax is correct
3. Hard refresh the page (Ctrl+F5)

### **Images Not Loading?**
1. Check image file paths are correct
2. Make sure images exist in the `assets/img/` folder
3. Use forward slashes `/` in paths

### **Broken Layout?**
1. Check for missing commas in arrays
2. Ensure all quotes are properly closed
3. Validate JSON syntax

## 🚀 **Deployment**

After updating `data.js`:
1. Commit changes to Git
2. Push to GitHub
3. GitHub Pages will automatically deploy your updates!

---

## 📞 **Need Help?**

If you run into issues:
1. Check the browser console for error messages
2. Validate your JSON syntax online
3. Compare your changes with the original structure
4. Feel free to reach out for assistance!

---

*Happy updating! 🎉*

## License 📄
This project is licensed under the MIT License - see the [LICENSE.md](./LICENSE) file for details.
