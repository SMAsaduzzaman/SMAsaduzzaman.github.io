// ===== PORTFOLIO DATA CONFIGURATION =====
// Edit this file to update your portfolio content easily!

const portfolioData = {
    // ===== PERSONAL INFO =====
    personal: {
        name: "S M Asaduzzaman",
        title: "Data Scientist & Research Analyst",
        email: "smasaduzzaman95@gmail.com",
        phone: "+8801521100829",
        location: "Mirpur, Dhaka, Bangladesh",
        profileImage: "assets/img/my.png",
        resumeUrl: "assets/S_M_Asaduzzaman.pdf",
        
        // Social Links
        social: {
            github: "https://github.com/SMAsaduzzaman/",
            linkedin: "https://www.linkedin.com/in/s-m-asaduzzaman/",
            googleScholar: "https://scholar.google.com/citations?user=Obs8e4UAAAAJ&hl",
            email: "mailto:smasaduzzaman95@gmail.com"
        },
        
        // Typing Animation Titles
        typingTitles: [
            'Data Scientist',
            'Data Analyst', 
            'ML Engineer',
            'Statistical Analyst',
            'AI Enthusiastics'
        ],
        
        // Hero Description
        description: "Quantitative Data Analyst specializing in AI/ML solutions, statistical analysis, and humanitarian data science with 5+ years of research experience.",
        
        // About Section
        about: {
            title: "Passionate Data Scientist & Research Analyst",
            intro: "I am currently working as a Quantitative Data Analyst at Thinkthrough Consulting Pvt. Ltd., where I focus on developing quantitative tools and managing field data collection teams. With over 5 years of experience in data science and research, I specialize in AI/ML solutions, statistical analysis, and humanitarian data science.",
            
            details: [
                {
                    icon: "fas fa-graduation-cap",
                    title: "Education",
                    description: "Master's in Applied Statistics and Data Science from Jahangirnagar University (CGPA: 3.88/4.00)\nBachelor's in Electrical and Electronic Engineering from AIUB (CGPA: 3.96/4.00)"
                },
                {
                    icon: "fas fa-briefcase",
                    title: "Experience", 
                    description: "5+ years in research, data analysis, and machine learning across humanitarian, healthcare, telemedicine and education"
                },
                {
                    icon: "fas fa-award",
                    title: "Achievements",
                    description: "5 published research papers, Dean's List recipient, Summa Cum Laude graduate, Best Employee Award"
                }
            ],
            
            // Statistics
            stats: [
                { count: 25, label: "Projects Completed" },
                { count: 5, label: "Research Papers" },
                { count: 5, label: "Years Experience" },
                { count: 15, label: "Technologies" }
            ]
        }
    },

    // ===== EXPERIENCE =====
    experience: [
        {
            period: "Apr 2025 - Present",
            title: "Quantitative Data Analyst",
            company: "Thinkthrough Consulting Pvt. Ltd.",
            responsibilities: [
                "Developed and managed quantitative tools on Kobo and ODK platforms",
                "Supervised field data collection teams and ensured real-time data quality",
                "Created Power BI dashboards for monitoring and analysis",
                "Designed quantitative analysis plans and performed statistical analysis"
            ],
            skills: ["KOBO", "Power BI","MySQL","Statistical Analysis"]
        },
        {
            period: "Jan 2024 - Apr 2025",
            title: "Research Analyst",
            company: "Datainsightopia",
            responsibilities: [
                "Led design and implementation of innovative AI/ML solutions",
                "Automated data analysis processes to enhance operational efficiency",
                "Collaborated with cross-functional teams on predictive modeling",
                "Contributed to data-driven decision-making processes"
            ],
            skills: ["AI/ML", "Python","MySQL","Predictive Modeling"]
        },
        {
            period: "Jan 2022 - Dec 2023",
            title: "Research Manager",
            company: "Time Research & Innovation",
            responsibilities: [
                "3+ years expertise in MIS, research, and MEL systems",
                "Authored and secured 5 project proposals with government funding",
                "Specialized in cultural development, telemedicine, and disease prediction",
                "Advanced statistical analysis using SPSS and Python"
            ],
            skills: ["SPSS", "Research Management", "Grant Writing"]
        },
        {
            period: "Dec 2020 - Dec 2021",
            title: "Research Associate",
            company: "Time Research & Innovation",
            responsibilities: [
                "Assisted in research paper writing and funding applications",
                "Worked on IoT product design and machine learning for image processing",
                "Created pitch decks for government and private investors",
                "Implemented UI/UX design for web applications"
            ],
            skills: ["IoT", "Computer Vision", "UI/UX"]
        }
    ],

    // ===== PROJECTS =====
    projects: [
        {
            title: "Automated Bangla Number Plate Detection",
            description: "Real-time detection system using YOLOv11 for parking management and surveillance with Flask web interface.",
            image: "assets/img/project-AI.jpg",
            technologies: ["YOLOv11", "Flask", "Docker", "OpenCV"],
            category: ["ml", "web"],
            links: {
                demo: "#",
                github: "#"
            }
        },
        {
            title: "Maternal Risk Assessment Platform",
            description: "ML-powered platform using Random Forest algorithm to predict maternal health risks with unlimited testing capabilities.",
            image: "assets/img/maternal_risk.jpg",
            technologies: ["Python", "Scikit-learn", "Flask", "Docker"],
            category: ["ml", "web"],
            links: {
                demo: "https://maternalrisk.onrender.com",
                github: "#"
            }
        },
        {
            title: "CPPC Multi-Sector Assessment",
            description: "Quantitative evaluation for CARE-led consortium covering protection, WASH, livelihoods, and DRR outcomes.",
            image: "assets/img/project-ml-1.jpg",
            technologies: ["KOBO", "Power BI", "Statistical Analysis"],
            category: ["research"],
            links: {
                demo: "#"
            }
        },
        {
            title: "Cultural Heritage Conservation",
            description: "Advanced analytics and GIS-based assessment for preserving Jatrapala cultural heritage in Bangladesh.",
            image: "assets/img/project-ml-2.jpg",
            technologies: ["GIS", "Python", "SPSS", "Survey Design"],
            category: ["research"],
            links: {
                demo: "#"
            }
        },
        {
            title: "Real-Time Sign Language Translator",
            description: "Bidirectional communication system for hearing-impaired using CNN and VR technology. Dean's Award winner.",
            image: "assets/img/SignlanguageTranslator.png",
            technologies: ["CNN", "Keras", "Arduino", "Raspberry Pi"],
            category: ["ml"],
            links: {
                demo: "#",
                github: "#"
            }
        },
        {
            title: "Diabetes Prediction System",
            description: "Online platform using Random Forest ML model for diabetes prediction with unlimited testing capabilities.",
            image: "assets/img/Diabetes.png",
            technologies: ["Random Forest", "Flask", "Docker", "Render"],
            category: ["web", "ml"],
            links: {
                demo: "https://diabeticspred.onrender.com",
                github: "#"
            }
        }
    ],

    // ===== SKILLS =====
    skills: {
        "Programming Languages": [
            { name: "Python", icon: "fab fa-python", level: 95 },
            { name: "SQL", icon: "fas fa-database", level: 90 },
            { name: "R", icon: "fab fa-r-project", level: 85 },
            { name: "HTML/CSS", icon: "fab fa-html5", level: 80 }
        ],
        "Machine Learning": [
            { name: "Scikit-learn", icon: "fas fa-chart-line", level: 92 },
            { name: "TensorFlow", icon: "fas fa-network-wired", level: 88 },
            { name: "Computer Vision", icon: "fas fa-eye", level: 85 },
            { name: "NLP", icon: "fas fa-language", level: 80 }
        ],
        "Analytics Tools": [
            { name: "Power BI", icon: "fas fa-chart-pie", level: 93 },
            { name: "SPSS", icon: "fas fa-calculator", level: 90 },
            { name: "Tableau", icon: "fas fa-table", level: 87 },
            { name: "KOBO/ODK", icon: "fas fa-poll", level: 95 }
        ],
        "Development Tools": [
            { name: "Git/GitHub", icon: "fab fa-git-alt", level: 88 },
            { name: "Docker", icon: "fab fa-docker", level: 82 },
            { name: "Flask", icon: "fas fa-server", level: 85 },
            { name: "Jupyter", icon: "fas fa-laptop-code", level: 92 }
        ]
    },

    // ===== AWARDS =====
    awards: [
        {
            title: "Summa Cum Laude",
            institution: "American International University-Bangladesh (AIUB)",
            year: "2020",
            description: "Receiving The Summa Cum Laude From The Honorable Dean and Associate Dean",
            image: "assets/img/summacumlaudemain-min.jpg",
            details: [
                "Summa cum laude is an honorary title used by educational institutions to signify a degree that was earned 'with the highest distinction.'"
            ]
        },
        {
            title: "Dean's For Capstone",
            institution: "American International University-Bangladesh (AIUB)",
            year: "2020",
            description: "Receiving Capstone From The Honorable Dean and Associate Dean",
            image: "assets/img/Capstone.jpg",
            details: [
                "Only Three group have Selected among the 100 groups",
                "I was Selected for Capstone Project along with my three groupmates"
            ]
        },
        {
            title: "Dean's For Academic",
            institution: "American International University-Bangladesh (AIUB)",
            year: "2016-2019",
            description: "Receiving Deans Award For The First Time",
            image: "assets/img/Deans1-min.jpg",
            details: [
                "A dean's list is an academic award, or distinction, used to recognize the highest level scholarship demonstrated by students in a college or university",
                "I have Received This Award For 4 Times"
            ]
        }
    ],

    // ===== EXTRACURRICULAR ACTIVITIES =====
    extracurricular: {
        charity: [
            {
                title: "Alor Swapno",
                type: "Charity Organization",
                role: "Volunteer & Social Activist",
                period: "2013 - Present",
                description: "Active involvement in educational support and social welfare initiatives, helping underprivileged communities through various charitable programs and awareness campaigns.",
                image: "assets/img/alor-swapno-logo.jpg", // Add logo when available
                activities: [
                    "Educational support for underprivileged children",
                    "Community welfare programs",
                    "Social awareness campaigns",
                    "Fundraising for educational materials"
                ],
                impact: "Contributed to educational support for 50+ children"
            }
        ],
        interviews: [
            {
                title: "Interview with Muhammad Jafar Iqbal",
                publication: "Kishor Alo (Monthly Magazine from Protom Alo)",
                interviewer: "Interview Team Member",
                date: "2014",
                type: "Media Interview",
                description: "Participated as a key interviewer in an exclusive interview with renowned Bangladeshi scientist and writer Muhammad Jafar Iqbal, discussing his scientific career, writing journey, and advice for youth pursuing STEM fields.",
                topics: [
                    "Scientific research and academia",
                    "Children's literature and creativity",
                    "Education and youth development",
                    "Technology and innovation",
                    "Career guidance for students"
                ],
                image: "assets/img/interview-jafor-iqbal-min.jpg",
                link: "https://www.kishoralo.com/interview/%E2%80%98%E0%A6%A4%E0%A6%BE%E0%A6%B0%E0%A6%AA%E0%A6%B0-%E0%A6%86%E0%A6%87%E0%A6%A8%E0%A6%B8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%87%E0%A6%A8%E0%A6%95%E0%A7%87-%E0%A6%95%E0%A6%AE%E0%A7%8D%E0%A6%AA%E0%A6%BF%E0%A6%89%E0%A6%9F%E0%A6%BE%E0%A6%B0-%E0%A6%86%E0%A6%B0-%E0%A6%87%E0%A6%A8%E0%A7%8D%E0%A6%9F%E0%A6%BE%E0%A6%B0%E0%A6%A8%E0%A7%87%E0%A6%9F-%E0%A6%A6%E0%A7%87%E0%A6%96%E0%A6%BE%E0%A6%AC%E2%80%99"
            },
            {
                title: "Interview with Ahsan Habib",
                publication: "Kishor Alo (Monthly Magazine from Protom Alo)",
                interviewer: "Interview Team Member",
                date: "2015",
                type: "Media Interview", 
                description: "Served as interviewer for an in-depth conversation with Bangladesh's renowned cartoonist Ahsan Habib, exploring his transition from banking to cartooning, founding of Unmad magazine, and contributions to Bangladesh's cartoon culture.",
                topics: [
                    "Career transition and entrepreneurship",
                    "Creative arts and cartoon culture",
                    "Media and publishing industry",
                    "Artistic inspiration and storytelling",
                    "Building creative communities"
                ],
                image: "assets/img/interview-ahsan-habib-min.jpg",
                link: "https://www.kishoralo.com/interview/%E2%80%98%E0%A6%89%E0%A6%A8%E0%A7%8D%E0%A6%AE%E0%A6%BE%E0%A6%A6%E2%80%99-%E0%A6%AA%E0%A7%9C%E0%A7%87-%E0%A6%95%E0%A6%BE%E0%A6%89%E0%A6%95%E0%A7%87-%E0%A6%B9%E0%A6%BE%E0%A6%B8%E0%A6%A4%E0%A7%87-%E0%A6%A6%E0%A7%87%E0%A6%96%E0%A6%BF%E0%A6%A8%E0%A6%BF-%E0%A6%A4%E0%A6%AC%E0%A7%87-%E0%A6%85%E0%A6%A8%E0%A7%87%E0%A6%95%E0%A6%95%E0%A7%87%E0%A6%87"
            }
        ],
        awards: [
            {
                title: "Poem Title: নষ্ট ইচ্ছা (Lost Desire)",
                  category: "Creative Writing",
                  work: "Poem",
                  year: "2015",
                  organization: "Campus Literary Magazine",
                  description: "Recognized by the judge panel for creative writing excellence and emotional depth.",
                  achievement: "Judge Panel Choice Writer",
                  image: "assets/img/poem_award.jpg",
                  workDescription: "A Bengali poem reflecting inner turmoil, moral decay, and the haunting persistence of love even through self-destruction."
            }
        ]
    },

    // ===== PUBLICATIONS =====
    publications: [
        {
            title: "MIRACLE: Malware Image Recognition and Classification by Layered Extraction",
            journal: "Data Mining and Knowledge Discovery, Springer US, 2025",
            authors: "Inzamamul Alam, Md Samiullah, S M Asaduzzaman, et al.",
            tags: ["Machine Learning", "Computer Vision", "Cybersecurity"],
            link: "https://dl.acm.org/doi/10.1145/3871765",
            linkText: "ACM Digital Library (open-access)"
        },
        {
            title: "Analysing and Identifying COVID-19 Risk Factors using Machine Learning",
            journal: "6th International Conference on Inventive Systems and Control (ICISC), 2022",
            authors: "Shah Siddiqui, Elias Hossain, S M Asaduzzaman, et al.",
            tags: ["Healthcare", "Machine Learning", "Mobile Apps"],
            link: "https://link.springer.com/article/10.1007/s11042-022-12915-5",
            linkText: "Springer Link (open-access)"
        },
        {
            title: "An Efficient Sign Language Translator Device using CNN",
            journal: "International Conference on Communication Engineering and Technology, 2019",
            authors: "S. A. Khan, S. M. Asaduzzaman, A. Debnath, M. Hossain",
            tags: ["Computer Vision", "CNN", "Accessibility"],
            link: "https://ieeexplore.ieee.org/document/8903606",
            linkText: "IEEE Xplore (open-access)"
        },
        {
            title: "Industrial Product Defect Detection Using Custom U-Net",
            journal: "International Conference on Computer and Information Technology (ICCIT)",
            authors: "Al Amin, Hongjie Ma, S M Asaduzzaman, et al.",
            tags: ["Deep Learning", "U-Net", "Quality Control"],
            link: "https://researchportal.port.ac.uk/en/publications/industrial-product-defect-detection-using-custom-u-net",
            linkText: "University of Portsmouth Research Portal"
        },
        {
            title: "Hybrid ML Model for Ecofriendly Travelling and Carbon Emission Reduction",
            journal: "International Conference on Computer and Information Technology (ICCIT)",
            authors: "Elias Hossain, Wahidur Rahman, S M Asaduzzaman, et al.",
            tags: ["Environmental", "NLP", "Sustainability"],
            link: "https://researchportal.port.ac.uk/en/publications/hybrid-machine-learning-model-for-a-next-generation-ecofriendly-t",
            linkText: "University of Portsmouth Research Portal"
        }
    ]
};

// ===== EXPORT FOR USE IN OTHER FILES =====
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
}
