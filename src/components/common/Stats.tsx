import siteData from '@/data/site.json';

export default function Stats() {
  const stats = siteData.stats;

  return (
    <section className="py-16 bg-card border-y-2 border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="stats-card p-6 rounded-lg">
            <div className="text-3xl md:text-4xl font-bold font-poppins text-primary vibrant-text">
              {stats.projectsCompleted}
            </div>
            <div className="text-lg font-medium light-mode-dark-text mt-2">Projects Completed</div>
          </div>
          
          <div className="stats-card p-6 rounded-lg">
            <div className="text-3xl md:text-4xl font-bold font-poppins text-primary vibrant-text">
              {stats.clientSatisfaction}
            </div>
            <div className="text-lg font-medium light-mode-dark-text mt-2">Client Satisfaction</div>
          </div>
          
          <div className="stats-card p-6 rounded-lg">
            <div className="text-3xl md:text-4xl font-bold font-poppins text-primary vibrant-text">
              {stats.experience}
            </div>
            <div className="text-lg font-medium light-mode-dark-text mt-2">Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
}