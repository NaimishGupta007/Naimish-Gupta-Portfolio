import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Github, Play } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { projects, domainColors } from '@/lib/data';

const domains = ['All', 'CV', 'ML', 'Security', 'Research', 'Healthcare'];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.domain === activeFilter);

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold">Projects</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A comprehensive collection of my work in AI, machine learning, and computer vision. 
              Each project represents a unique challenge and innovative solution.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {domains.map((domain) => (
              <button
                key={domain}
                onClick={() => setActiveFilter(domain)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === domain
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
                data-testid={`button-filter-${domain.toLowerCase()}`}
              >
                {domain}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                layout
              >
                <Link href={`/projects/${project.id}`} data-testid={`card-project-${project.id}`}>
                  <div className="group relative bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/30 hover:shadow-xl transition-all cursor-pointer h-full">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{
                        background: `linear-gradient(135deg, hsl(${project.themeColor} / 0.08) 0%, transparent 60%)`
                      }}
                    />
                    
                    <div className="relative p-8">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${domainColors[project.domain]}`}>
                          {project.domain}
                        </span>
                        <div className="flex gap-2">
                          {project.githubUrl && (
                            <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                              <Github className="w-4 h-4" />
                            </div>
                          )}
                          {project.videoUrl && (
                            <div className="w-8 h-8 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground group-hover:text-foreground transition-colors">
                              <Play className="w-4 h-4" />
                            </div>
                          )}
                        </div>
                      </div>

                      <h2 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h2>
                      
                      <p className="text-muted-foreground mt-3 line-clamp-3">
                        {project.shortDescription}
                      </p>

                      <div className="flex flex-wrap gap-2 mt-6">
                        {project.techStack.slice(0, 4).map((tech) => (
                          <span key={tech} className="px-2.5 py-1 bg-muted/50 rounded-lg text-xs text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 4 && (
                          <span className="px-2.5 py-1 text-xs text-muted-foreground">
                            +{project.techStack.length - 4} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center gap-2 mt-6 text-primary text-sm font-medium">
                        View Details
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
