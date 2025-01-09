import React from 'react';
import workExperiences from '@/data/workExperiences.json';

const WorkExperience = () => {
  return (
    <section className="bg-slate-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar Title */}
          <div className="lg:col-span-1">
            <div className="sticky top-20">
              <h2 className="text-4xl font-medium text-gray-200">
                <span className="featured">Work Experience</span>
              </h2>
            </div>
          </div>

          {/* Work Experience Cards */}
          <div className="lg:col-span-3 space-y-12">
            {workExperiences.map((job, index) => (
              <article key={index} className="space-y-4 bg-slate-800  rounded-lg">
                <div className="bg-slate-900 p-6 sticky top-0 pt-12 px-0">
                  <div className="px-3">
                    <p className="bg-purple-900 text-white text-sm font-semibold px-4 py-1 rounded-lg float-right">
                      {job.dates}
                    </p>
                    <h3 className="text-xl font-bold text-purple-400 ">{job.title}</h3>
                    <p className="text-purple-200 opacity-80">{job.company}</p>
                  </div>
                </div>

                <ul className="list-disc list-inside text-gray-300 px-4 pb-5 shadow-sm-light">
                  {job.responsibilities.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;
