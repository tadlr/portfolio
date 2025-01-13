import Image from 'next/image';
import skillsData from '@/data/skills.json';

const SkillSection = () => {
  return (
    <section className="bg-slate-950 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Title */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <h2 className="text-4xl font-medium text-gray-200 animate fade__left">
                <span className="featured">Known technologies and skills</span>
              </h2>
            </div>
          </div>

          {/* Skill Cards */}
          <div className="lg:col-span-3 space-y-5">
            {skillsData.map((section, index) => (
              <div key={index} className="space-y-8">
                {/* Section Title */}
                <div className="bg-slate-950 sticky top-0 pt-12 px-2 z-10">
                  <h3 className="text-xl font-semibold text-gray-200 animate fade__top">
                    {section.title}
                  </h3>
                </div>
                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-2 pb-3 animate fade__bottom">
                  {section.skills.map((skill, i) => (
                    <div
                      key={i}
                      className="bg-slate-800 rounded-lg shadow-md p-4 text-center content-around flex flex-col">
                      <div className="mx-auto h-full content-center rounded p-2">
                        <Image
                          src={skill.logo}
                          alt={skill.alt}
                          width={80}
                          height={80}
                          className="mx-auto"
                        />
                      </div>
                      <h4 className="mt-4 text-lg font-medium text-gray-300">{skill.name}</h4>
                    </div>
                  ))}

                  {/* "And more..." Card */}
                  {skillsData.length === index + 1 && (
                    <div className="bg-gray-900 rounded-lg p-4 text-center shadow-md">
                      <p className="text-gray-300">And more...</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
