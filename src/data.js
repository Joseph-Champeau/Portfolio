const workExperiences = [
    {
        id: 'e1',
        position_duration: 'May 2024 - August 2024',
        position_title: 'IT Architect',
        company_name: 'Ornge',
        company_website: 'https://www.ornge.ca/home',
        experience_content: 'Assessed supplier software for efficiency and workflow integration, recommending an aircraft maintenance system that reduced costs by 30%. Revamped SharePoint inventory by streamlining information architecture, retiring legacy apps, and enhancing search and management functionality. Developed and deployed a Power Apps solution to automate inventory updates, implementing scalable workflows for long-term maintainability.',
        experience_techstack : ['SharePoint', 'Microsoft Power Apps']
    },
    {
        id: 'e2',
        position_duration: 'September 2023 - December 2023',
        position_title: 'Embedded Software Engineer',
        company_name: 'Ford Motor Company',
        company_website: 'https://www.ford.ca/',
        experience_content: 'Implemented Smart Hitch feature in C++ with CAN bus, optimizing payload and preventing overhauls across all Ford trucks to serve millions of drivers. Spearheaded telemetry project to capture customer usage data from 30% of infotainment features using React.js, enabling efficient allocation of development resources. Resolved 10+ production bugs, reducing Smart Hitch load time by 20% and improving responsiveness. Extended automated testing of dashboard video games using Jest, increasing code coverage by 90%.',
        experience_techstack : ['HTML & CSS', 'C++', 'React']
    },
    {
        id: 'e3',
        position_duration: 'January 2023 - April 2023',
        position_title: 'Front End Software Engineer',
        company_name: 'Ford Motor Company',
        company_website: 'https://www.ford.ca/',
        experience_content: 'Worked on the dashboard infotainment team to ensure UI functionality across 15+ languages, implementing fixes in HTML + CSS to deliver smooth content display to a global audience. Contributed to the data restructuring of major dashboard UI features using React.js, collaborating with engineers across a large embedded systems code base and accelerating performance by 20%.',
        experience_techstack : ['HTML & CSS', 'C++', 'React', 'Confluence']
    },
    {
        id: 'e4',
        position_duration: 'May 2022 - Aug 2022',
        position_title: 'Junior Software Developer',
        company_name: 'Immigration, Refugees, and Citizenship Canada',
        company_website: 'https://www.canada.ca/en/immigration-refugees-citizenship.html',
        experience_content: 'Developed dynamic Power BI dashboards to measure workplace efficiency, establishing clear employee objectives. Managed and tracked bugs and software access requests in Azure DevOps for 20+ government departments.',
        experience_techstack : ['Power BI', 'Azure DevOps']
    },
    {
        id: 'e5',
        position_duration: 'May 2020 - Aug 2020',
        position_title: 'Operations Control Center Assistant',
        company_name: 'Ornge',
        company_website: 'https://www.ornge.ca/home',
        experience_content: 'Used Cisco databases to develop an operational dashboard for call-taking and dispatch, enhancing real-time monitoring of critical data. Developed a gamified testing system using Google Maps API to help new hires memorize Ontario air ambulance bases, leading to a 40% improvement in retention and faster on-boarding.',
        experience_techstack : ['SQL', 'Google Maps API', 'Operational Dashboards']
    }
]

const listOfProjects = [
    {
        id: 'p1',
        project_title: 'Asset Price Prediction with Machine Learning',
        project_description: 'Developed a stock price prediction model in Python, leveraging multiple linear regression to analyze S&P 500 prices based on economic indicators and stochastic oscillators.',
        project_techstack: ['Python', 'Pandas', 'Numpy'],
        project_link: "https://github.com/Joseph-Champeau/MLR_Stock_Price_Prediction",
        project_source_code: "https://github.com/Joseph-Champeau/MLR_Stock_Price_Prediction",
        project_screenshot: '/assets/projects/data.PNG'
    },
    {
        id: 'p2',
        project_title: 'Athletics Scheduling App',
        project_description: 'Created a fitness app using Java + Android Studio to help UOttawa students create and join exercise classes.',
        project_techstack: ['Java'],
        project_link: "https://github.com/Joseph-Champeau/SEG2105-F2021",
        project_source_code: "https://github.com/Joseph-Champeau/SEG2105-F2021/tree/main/Deliverable1Fixed",
        project_screenshot: '/assets/projects/fitness.png'
    }
]

export {workExperiences, listOfProjects};