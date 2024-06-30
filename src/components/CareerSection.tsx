import React, { useEffect, useState } from 'react';

interface IResponsibility {
  description: string;
  highlight?: string;
};

interface ICareerExperience {
  title: string;
  company: string;
  dates: string;
  notes?: string;
  responsibilities: IResponsibility[];
};

const CareerSection: React.FC = () => {

  const [careerData, setCareerData] = useState<ICareerExperience[]>([]);

  useEffect(() => {
    const fetchCareerData = [
      {
        title: 'Senior Software Engineer / People Manager',
        company: 'Willis Towers Watson',
        dates: 'Jan 2015 - Present',
        notes: 'What haven\'t I done here... my job has been multifaceted, including roles within development, leadership, and project management. However, my primary responsibilities are:',
        responsibilities: [
          { highlight: 'Development & Maintenance', description: 'Spearhead consumer-facing applications leveraging Meta React, TypeScript, Bootstrap, ASP.NET Core, C#, Azure, AWS, Telerik, and GraphQL.' },
          { highlight: 'Leadership & Mentorship', description: 'Lead and mentor a development team, aligning with company objectives and promoting a culture of collaboration and innovation.' },
          { highlight: 'UI/UX Implementation', description: 'Drive the translation of Figma and Miro prototypes into functional components for a next-gen Employee Self-Service platform.' },
          { highlight: 'Recognition & Innovation', description: 'Received accolades for development leadership across Fortune 500 clients and recognized as a lead innovator.' },
          { highlight: 'AI Integration', description: 'Initiated the integration of GitHub Copilot to enhance client solutions with AI capabilities.' },
          { highlight: 'Quality Assurance', description: 'Oversee standards compliance, including linters, build pipelines, and service availability monitoring.' },
          { highlight: 'Accessibility', description: 'Ensure UX and accessibility standards across various platforms, including iOS, Android VMs, and browsers like Edge, Chrome, and Firefox.' },
        ]
      }
    ];

    setCareerData(fetchCareerData);
  }, []);

  return (
    <section>
      <div>
        <h2>Skills &amp; Abilities</h2>
        <p>Seasoned software engineer and people manager with track record of excellence, creating high-performing teams and applications,
          expertise in many different languages and frameworks (e.g. TypeScript, React, C#, ASP.NET Core, etc.), and delivering
          consumer-facing and enterprise web applications from concept to production.</p>
      </div>
      <div>
        <h2>Experience</h2>
        {careerData.map((career: ICareerExperience) => (
          <div key={career.dates}>
            <h3>{career.title}</h3>
            <p>{career.company}</p>
            <p>{career.dates}</p>
            <p>{career.notes}</p>
            <ul>
              {career.responsibilities.map((responsibility: IResponsibility, index: number) => (
                <li key={index}>{responsibility.highlight && `${responsibility.highlight}:`} {responsibility.description}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CareerSection;