// ===== DATA LOADER =====
// This file automatically loads content from data.js into the HTML

function loadPortfolioData() {
    if (typeof portfolioData === 'undefined') {
        console.error('Portfolio data not found. Make sure data.js is loaded first.');
        return;
    }

    console.log('Loading portfolio data...');

    // Load personal information
    loadPersonalInfo();
    
    // Load experience
    loadExperience();
    
    // Load projects
    loadProjects();
    
    // Load skills
    loadSkills();
    
    // Load publications
    loadPublications();
    
    console.log('Portfolio data loaded successfully!');
}

// ===== LOAD PERSONAL INFO =====
function loadPersonalInfo() {
    const { personal } = portfolioData;
    
    // Update hero section
    const heroName = document.querySelector('.hero-name');
    if (heroName) heroName.textContent = personal.name;
    
    const heroDescription = document.querySelector('.hero-description');
    if (heroDescription) heroDescription.textContent = personal.description;
    
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        profileImg.src = personal.profileImage;
        profileImg.alt = personal.name;
    }
    
    // Update resume link
    const resumeLinks = document.querySelectorAll('a[href*="pdf"]');
    resumeLinks.forEach(link => {
        link.href = personal.resumeUrl;
    });
    
    // Update contact information
    const contactEmail = document.querySelector('.contact-details p');
    if (contactEmail && contactEmail.textContent.includes('@')) {
        contactEmail.textContent = personal.email;
    }
    
    const contactPhone = document.querySelectorAll('.contact-details p')[1];
    if (contactPhone) contactPhone.textContent = personal.phone;
    
    const contactLocation = document.querySelectorAll('.contact-details p')[2];
    if (contactLocation) contactLocation.textContent = personal.location;
    
    // Update social links
    const socialLinks = document.querySelectorAll('.social-link');
    socialLinks.forEach(link => {
        const icon = link.querySelector('i');
        if (icon) {
            if (icon.classList.contains('fa-github')) {
                link.href = personal.social.github;
            } else if (icon.classList.contains('fa-linkedin')) {
                link.href = personal.social.linkedin;
            } else if (icon.classList.contains('fa-graduation-cap')) {
                link.href = personal.social.googleScholar;
            } else if (icon.classList.contains('fa-envelope')) {
                link.href = personal.social.email;
            }
        }
    });
    
    // Update about section
    const aboutTitle = document.querySelector('.about-intro h3');
    if (aboutTitle) aboutTitle.textContent = personal.about.title;
    
    const aboutIntro = document.querySelector('.about-intro p');
    if (aboutIntro) aboutIntro.textContent = personal.about.intro;
    
    // Update about details
    const detailItems = document.querySelectorAll('.detail-item');
    personal.about.details.forEach((detail, index) => {
        if (detailItems[index]) {
            const icon = detailItems[index].querySelector('i');
            const title = detailItems[index].querySelector('h4');
            const description = detailItems[index].querySelector('p');
            
            if (icon) icon.className = detail.icon;
            if (title) title.innerHTML = `<i class="${detail.icon}"></i> ${detail.title}`;
            if (description) {
                // Handle line breaks in description
                description.innerHTML = detail.description.replace(/\n/g, '<br>');
            }
        }
    });
    
    // Update stats
    const statItems = document.querySelectorAll('.stat-item');
    personal.about.stats.forEach((stat, index) => {
        if (statItems[index]) {
            statItems[index].setAttribute('data-count', stat.count);
            const label = statItems[index].querySelector('.stat-label');
            if (label) label.textContent = stat.label;
        }
    });
}

// ===== LOAD EXPERIENCE =====
function loadExperience() {
    const timeline = document.querySelector('.timeline');
    if (!timeline) return;
    
    // Clear existing timeline items
    timeline.innerHTML = '';
    
    portfolioData.experience.forEach(exp => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item animate-on-scroll';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <div class="timeline-date">${exp.period}</div>
                <h3>${exp.title}</h3>
                <h4>${exp.company}</h4>
                <ul>
                    ${exp.responsibilities.map(resp => `<li>${resp}</li>`).join('')}
                </ul>
                <div class="timeline-skills">
                    ${exp.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// ===== LOAD PROJECTS =====
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    if (!projectsGrid) {
        console.warn('Projects grid not found');
        return;
    }
    
    if (!portfolioData || !portfolioData.projects) {
        console.warn('Projects data not found in portfolioData');
        return;
    }
    
    console.log('Loading projects data...');
    
    try {
        // Clear existing projects
        projectsGrid.innerHTML = '';
        
        portfolioData.projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card animate-on-scroll';
            projectCard.setAttribute('data-category', project.category.join(' '));
            
            const links = [];
            if (project.links.demo) {
                const href = project.links.demo !== '#' ? project.links.demo : '#';
                links.push(`<a href="${href}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i></a>`);
            }
            if (project.links.github) {
                const href = project.links.github !== '#' ? project.links.github : '#';
                links.push(`<a href="${href}" target="_blank" class="project-link"><i class="fab fa-github"></i></a>`);
            }
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                    <div class="project-overlay">
                        <div class="project-links">
                            ${links.join('')}
                        </div>
                    </div>
                </div>
                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="project-tech">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
        
        console.log('Projects loaded successfully');
        
        // Update project count
        const projectsCount = document.getElementById('projects-count');
        if (projectsCount) {
            projectsCount.textContent = portfolioData.projects.length;
        }
        
        // Re-initialize project filters
        setTimeout(() => {
            if (typeof initializeProjectFilters === 'function') {
                initializeProjectFilters();
            }
        }, 100);
        
    } catch (error) {
        console.error('Error loading projects:', error);
    }
}

// ===== LOAD SKILLS =====
function loadSkills() {
    const skillsCategories = document.querySelector('.skills-categories');
    if (!skillsCategories) {
        console.warn('Skills categories container not found');
        return;
    }
    
    if (!portfolioData || !portfolioData.skills) {
        console.warn('Skills data not found in portfolioData');
        return;
    }
    
    // Don't clear existing skills, just update them if data is available
    console.log('Loading skills data...');
    
    try {
        // Clear existing skills only if we have new data
        skillsCategories.innerHTML = '';
        
        Object.entries(portfolioData.skills).forEach(([categoryName, skills]) => {
            const categoryDiv = document.createElement('div');
            categoryDiv.className = 'skill-category animate-on-scroll';
            
            // Determine icon based on category name
            let categoryIcon = 'fas fa-tools';
            if (categoryName.toLowerCase().includes('programming')) categoryIcon = 'fas fa-code';
            else if (categoryName.toLowerCase().includes('machine')) categoryIcon = 'fas fa-brain';
            else if (categoryName.toLowerCase().includes('analytics')) categoryIcon = 'fas fa-chart-bar';
            else if (categoryName.toLowerCase().includes('development')) categoryIcon = 'fas fa-tools';
            
            categoryDiv.innerHTML = `
                <h3><i class="${categoryIcon}"></i> ${categoryName}</h3>
                <div class="skills-grid">
                    ${skills.map(skill => `
                        <div class="skill-item animate-on-scroll">
                            <div class="skill-icon">
                                <i class="${skill.icon}"></i>
                            </div>
                            <div class="skill-info">
                                <h4>${skill.name}</h4>
                                <div class="skill-bar">
                                    <div class="skill-progress" data-width="${skill.level}%"></div>
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            `;
            
            skillsCategories.appendChild(categoryDiv);
        });
        
        console.log('Skills loaded successfully');
        
        // Re-initialize skill bar animations
        setTimeout(() => {
            if (typeof initializeSkillBars === 'function') {
                initializeSkillBars();
            }
        }, 100);
        
    } catch (error) {
        console.error('Error loading skills:', error);
    }
}

// ===== LOAD PUBLICATIONS =====
function loadPublications() {
    const publicationsGrid = document.querySelector('.publications-grid');
    if (!publicationsGrid) return;
    
    // Clear existing publications
    publicationsGrid.innerHTML = '';
    
    portfolioData.publications.forEach(pub => {
        const publicationCard = document.createElement('div');
        publicationCard.className = 'publication-card animate-on-scroll';
        
        publicationCard.innerHTML = `
            <div class="publication-icon">
                <i class="fas fa-file-alt"></i>
            </div>
            <div class="publication-content">
                <h3>${pub.title}</h3>
                <p class="publication-journal">${pub.journal}</p>
                <p class="publication-authors">${pub.authors}</p>
                <div class="publication-tags">
                    ${pub.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
            </div>
        `;
        
        publicationsGrid.appendChild(publicationCard);
    });
}

// ===== UPDATE TYPING ANIMATION =====
function updateTypingAnimation() {
    // This will be called from the main script to update typing titles
    if (typeof portfolioData !== 'undefined' && portfolioData.personal.typingTitles) {
        return portfolioData.personal.typingTitles;
    }
    return ['Data Scientist', 'Research Analyst', 'ML Engineer'];
}

// ===== INITIALIZE DATA LOADING =====
document.addEventListener('DOMContentLoaded', function() {
    // Wait for other scripts to load
    setTimeout(loadPortfolioData, 500);
});

// Also try to load when window loads (backup)
window.addEventListener('load', function() {
    // Double-check that data is loaded
    setTimeout(() => {
        if (document.querySelector('.skills-categories').children.length === 0) {
            console.log('Retrying data load...');
            loadPortfolioData();
        }
    }, 1000);
});

// ===== EXPORT FUNCTIONS =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        loadPortfolioData,
        updateTypingAnimation
    };
}