import React from 'react';
import Azure from '../assets/img/icons/azure.svg';
import Copilot from '../assets/img/icons/copilot.svg';
import GitHub from '../assets/img/icons/github.svg';
import IntelliJIdea from '../assets/img/icons/intellijidea.svg';
import Jira from '../assets/img/icons/jira.svg';
import SqlServer from '../assets/img/icons/sqlserver.svg';
import VsCode from '../assets/img/icons/vscode.svg';
import VsPro from '../assets/img/icons/vspro2022.svg';
import AboutMe from './AboutMe';
import CompetentFullStack from './CompetentFullStack';
import CurrentProjects from './CurrentProjects';
import FavoriteRepos from './FavoriteRepos';
import SimpleFooter, { ISocialMediaProps } from './Footers/SimpleFooter';
import Hero from './Hero';
import NewNavbar from './Navbars/NewNavbar';
import Toolstack, { IToolProps } from './Toolstack';


const Landing: React.FC = () => {

    // Create a method called getSocialMediaButtons that returns an array of ISocialMediaButtonProps objects.
    const getSocialMediaButtons = (): ISocialMediaProps[] => {
        return [
            {
                color: "primary",
                icon: "fa-linkedin",
                url: "https://www.linkedin.com/in/paulpemberton/",
                tooltip: "Follow me on LinkedIn"
            },
            {
                color: "primary",
                icon: "fa-facebook-square",
                url: "https://www.facebook.com/paul.pemberton/",
                tooltip: "Follow me on Facebook"
            },
            {
                color: "danger",
                icon: "fa-instagram",
                url: "https://www.instagram.com/bleachlizard/",
                tooltip: "Follow me on Instagram"
            },
            {
                color: "dark",
                icon: "fa-github",
                url: "https://github.com/pember10",
                tooltip: "Star me on GitHub"
            },
        ];
    };

    const getToolstacks = (): IToolProps[] => {
        return [
            {
                name: 'Visual Studio Code',
                description: 'For most of my coding',
                icon: VsCode,
                url: 'https://code.visualstudio.com/',
            },
            {
                name: 'Visual Studio Pro',
                description: 'For my .NET coding',
                icon: VsPro,
                url: 'https://visualstudio.microsoft.com/vs/professional/',
            },
            {
                name: 'GitHub Copilot',
                description: 'Pretty much everywhere',
                icon: Copilot,
                url: 'https://github.com/features/copilot',
            },
            {
                name: 'IntelliJ IDEA',
                description: 'For my MC mods dev',
                icon: IntelliJIdea,
                url: 'https://www.jetbrains.com/idea/',
            },
            {
                name: 'Azure',
                description: 'All of my cloud stuff',
                icon: Azure,
                url: 'https://azure.microsoft.com/',
            },
            {
                name: 'GitHub',
                description: 'Where all my code lives',
                icon: GitHub,
                url: 'https://github.com/',
            },
            {
                name: 'Jira',
                description: 'For work issue tracking',
                icon: Jira,
                url: 'https://www.atlassian.com/software/jira',
            },
            {
                name: 'SQL Server',
                description: 'Most of my data work',
                icon: SqlServer,
                url: 'https://www.microsoft.com/en-us/sql-server/sql-server-downloads',
            }
        ];
    };

    return (
        <>
            {/* <DemoNavbar socialMediaLinks={getSocialMediaButtons()} /> */}
            <NewNavbar socialMediaLinks={getSocialMediaButtons()} />
            <main id='main'>
                <Hero />
                <FavoriteRepos />
                <CompetentFullStack />
                <CurrentProjects />
                <Toolstack tools={getToolstacks()} />
                <AboutMe />
            </main>
            <SimpleFooter socialMediaLinks={getSocialMediaButtons()} />
        </>
    );
};

export default Landing;