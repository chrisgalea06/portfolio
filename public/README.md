# Public Assets Organization

This directory contains all static assets for the portfolio website, organized for better maintainability and performance.

## 📁 Directory Structure

```
public/
├── assets/                    # General website assets
│   ├── icons/                 # UI icons and decorative elements
│   │   ├── ellipse1.svg       # Background decorative elements
│   │   ├── ellipse2.svg
│   │   ├── ellipse3.svg
│   │   ├── ellipse5.svg
│   │   ├── ellipse6.svg
│   │   ├── icon-address.svg   # Contact icons
│   │   ├── icon-backend.svg   # Service icons
│   │   ├── icon-front.svg
│   │   ├── icon-learning.svg
│   │   ├── icon-mail.svg
│   │   └── icon-phone.svg
│   ├── images/                # General images
│   │   ├── BackgroundShades.svg
│   │   ├── check.svg
│   │   ├── chris.svg          # Profile illustrations
│   │   ├── chris2.png
│   │   ├── christoper.png
│   │   ├── imgabout.png
│   │   ├── proj1.png          # Generic project images
│   │   ├── proj2.png
│   │   ├── proj3.png
│   │   └── quote.svg
│   └── logos/                 # Brand logos
│       ├── logo-footer.svg
│       ├── logo-small.png
│       └── logo.svg
├── projects/                  # Project-specific images
│   ├── domus/                 # Domus Boutique Hotel
│   │   ├── domus1.png
│   │   ├── domus2.png
│   │   └── domus3.png
│   ├── karm/                  # Karamellu tar-Rahal t'Isfel
│   │   ├── karm1.png
│   │   ├── karm2.png
│   │   └── karm3.png
│   ├── optimist/              # Optimist Club of Malta
│   │   ├── optimist1.png
│   │   ├── optimist2.png
│   │   └── optimist3.png
│   ├── peristyle/             # Peristyle Restaurant
│   │   ├── peristyle1.png
│   │   ├── peristyle2.png
│   │   └── peristyle3.png
│   └── training/              # Personal Training Malta
│       ├── training1.png
│       ├── training2.png
│       └── training3.png
├── social/                    # Social media icons
│   ├── behance.png
│   ├── dribble.png
│   ├── link.png
│   └── medium.png
├── next.svg                   # Next.js default
└── vercel.svg                 # Vercel default
```

## 🎯 Benefits of This Organization

### **1. Logical Grouping**

- **Assets**: General website elements (icons, images, logos)
- **Projects**: Project-specific images organized by project name
- **Social**: Social media platform icons

### **2. Easy Maintenance**

- Clear separation of concerns
- Easy to find and update specific assets
- Project images are grouped together for easy management

### **3. Performance Optimization**

- Related assets are grouped for better caching
- Clear naming conventions for easy reference
- Reduced file lookup time

### **4. Scalability**

- Easy to add new projects by creating new folders
- Consistent structure for future additions
- Clear patterns for developers

## 🔧 Usage in Code

The portfolio data helper functions automatically map to the correct paths:

```typescript
// Project images
getProjectImages("Peristyle Restaurant");
// Returns: ["/projects/peristyle/peristyle1.png", ...]

// General assets
getProfileImage(); // Returns: "/assets/images/chris2.png"
getLogo(); // Returns: "/assets/logos/logo.svg"
```

## 📝 Adding New Assets

### **New Project Images**

1. Create folder: `public/projects/project-name/`
2. Add images: `project-name1.png`, `project-name2.png`, etc.
3. Update `getProjectImages()` function in `lib/portfolio-data.ts`

### **New Icons**

1. Add to: `public/assets/icons/`
2. Use descriptive names: `icon-feature-name.svg`

### **New General Images**

1. Add to: `public/assets/images/`
2. Use descriptive names: `feature-description.png`

## 🧹 Maintenance

- **Regular cleanup**: Remove unused assets
- **Consistent naming**: Use kebab-case for file names
- **Optimize images**: Compress images before adding
- **Update references**: Always update code when moving files
