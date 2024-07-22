document.addEventListener('DOMContentLoaded', () => {
    const skills = [
        'Apache Spark', 'PostgreSQL', 'PySpark', 'Delta Lake',
        'Django', 'Docker', 'Python',
        'pgAdmin 4', 'Database Keys', 'Integrity Constraints',
        'Airflow', 'Astro CLI',
        'Git',
        'Ubuntu', 'Virtual Environments'
    ];

    const experiences = [
        {
            title: 'Django Web Application Developer',
            details: [
                'Developed a Django web application with a virtual environment setup.',
                'Implemented features such as search functionality to fetch data from Wikipedia.'
            ]
        },
        {
            title: 'PostgreSQL Management',
            details: [
                'Managed PostgreSQL databases using pgAdmin 4.',
                'Resolved authentication issues and configured database connections.'
            ]
        },
        {
            title: 'Data Engineer Intern',
            details: [
                'Worked with large datasets using PySpark for efficient data processing.',
                'Integrated PostgreSQL with Spark for data storage and retrieval.'
            ]
        },
        {
            title: 'Trainee at Tricera.tech',
            details: [
                'Gaining practical experience and enhancing skills in Delta Lake technologies.',
                'Collaborating on projects to implement advanced data solutions and optimize workflows.'
            ]
        }
    ];

    const projects = [
        {
            title: "Django Project: 'myproject'",
            details: [
                'Created a search bar to fetch and display Wikipedia articles.',
                'Implemented template loading and troubleshooting.'
            ]
        },
        {
            title: 'Data Engineering with Docker and PostgreSQL',
            details: [
                'Set up and managed Docker containers for PostgreSQL.',
                'Utilized Docker for environment consistency and easy deployment.'
            ]
        },
        {
            title: 'Airflow Automation',
            details: [
                'Used Astro CLI for managing Airflow projects.',
                'Automated data pipeline tasks to streamline workflows.'
            ]
        }
    ];

    const skillsList = document.getElementById('skills-list');
    const experienceList = document.getElementById('experience-list');
    const projectsList = document.getElementById('projects-list');

    skills.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        skillsList.appendChild(li);
    });

    experiences.forEach(exp => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${exp.title}</strong>`;
        exp.details.forEach(detail => {
            const p = document.createElement('p');
            p.textContent = detail;
            li.appendChild(p);
        });
        experienceList.appendChild(li);
    });

    projects.forEach(project => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>${project.title}</strong>`;
        project.details.forEach(detail => {
            const p = document.createElement('p');
            p.textContent = detail;
            li.appendChild(p);
        });
        projectsList.appendChild(li);
    });
});
