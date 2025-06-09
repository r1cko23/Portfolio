# DevOps Engineer Portfolio

A modern, responsive portfolio website for DevOps and Cloud Engineers, designed with the latest web trends for 2025.

## Features

- Clean, modern design with smooth animations
- Fully responsive layout for all devices
- Interactive elements with JavaScript
- Sections for showcasing skills, experience, and projects
- Contact form with validation
- Mobile-friendly navigation
- Performance optimized

## Technical Details

This portfolio site is built with:

- Semantic HTML5
- Modern CSS3 with custom properties (variables)
- Vanilla JavaScript
- Flexbox and CSS Grid for layouts
- Mobile-first responsive design
- Smooth scrolling and animations

## Getting Started

1. Clone this repository:

   ```
   git clone https://github.com/yourusername/devops-portfolio.git
   ```

2. Navigate to the project folder:

   ```
   cd devops-portfolio
   ```

3. Open `index.html` in your browser to view the portfolio.

4. To edit the portfolio for your own use:
   - Update the text content in `index.html`
   - Customize colors and styles in `css/style.css`
   - Modify animations and interactions in `js/main.js`

## Customization

### Colors and Theme

You can easily change the color scheme by editing the CSS variables in `css/style.css`:

```css
:root {
  --primary-color: #0b8d0b; /* Main brand color */
  --secondary-color: #242146; /* Secondary brand color */
  --accent-color: #f7df1e; /* Accent highlights */
  --dark-bg: #161b22; /* Dark background */
  --medium-dark-bg: #1f2937; /* Medium dark background */
  --light-bg: #f9fafb; /* Light background */
  /* ... other variables ... */
}
```

### Profile and Content

Replace the placeholder content in `index.html` with your own:

- Update your name, role, and tagline
- Replace the "About Me" text
- Update skills, experience, and project details
- Add your contact information and social links

### Adding Projects

To add a new project, copy and paste the following HTML structure in the projects section:

```html
<div class="project-card">
  <div class="project-image">
    <div class="image-placeholder"></div>
    <!-- or use an actual image: -->
    <!-- <img src="path/to/image.jpg" alt="Project name"> -->
  </div>
  <div class="project-content">
    <h3>Project Title</h3>
    <p>Project description goes here</p>
    <div class="tags">
      <span>Tag 1</span>
      <span>Tag 2</span>
      <span>Tag 3</span>
    </div>
  </div>
</div>
```

## Browser Support

This portfolio is compatible with all modern browsers:

- Chrome
- Firefox
- Safari
- Edge

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Google Fonts for the typography
- Inspiration from modern portfolio designs
- DevOps community for content inspiration
