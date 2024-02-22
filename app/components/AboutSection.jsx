"use client";
import React, { useTransition, useState } from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TAB_DATA =[
    {
        title:"Skills",
        id: "skills",
        content:(
            <ul className="list-disc pl-2">
                <li>Node.js</li>
                <li>Next.js</li>
                <li>React</li>
                <li>MySQL</li>
                <li>Django</li>
            </ul>
          
        ),
    },
    {
        title:"Educaton",
        id:"education",
        content:(
            <ul className="list-disc pl-2">
                <li>Botho University</li>
            </ul>
          
        ),
    },
    {
        title:"Certificates",
        id:"certificates",
        content:(
            <ul className="list-disc pl-2">
                <li>Meta Full-Stack Engineer</li>
            </ul>
          
        ),


    },
];

const AboutSection = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) =>{
        startTransition(() =>{
            setTab(id);
        });
    }
  return (
    <section className="text-white" id="about">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image src="/images/designecologist.png" width={500} height={500}/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h1 className="text-4xl font-bold text-white mb-4">About Me</h1>
                <p className="text-base lg:text-lg">
                    I am a full stack developer with a passion for creating 
                    interactive and responsive web applications. I have experince
                    working with JavaScript, React, Node.js, HTML, CSS, Django, MySql
                    and Git. I am quick learner and I am always looking for opportunities
                    to expand my knowledge and skill set. I am a team player and always 
                    excited to work with others to create amazing applications.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")}
                     active={tab ==="skills"}
                     >
                        {" "}
                        Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")}
                     active={tab ==="education"}
                     >
                        {" "}
                        Education{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("certificates")}
                     active={tab ==="certificates"}
                     >
                        {" "}
                        Cerificates{" "}
                    </TabButton>
                    
                </div>
                <div className="mt-8">{TAB_DATA.find((t) =>t.id === tab).content}</div>
            </div>
        </div>
        </section>
  )
}

export default AboutSection