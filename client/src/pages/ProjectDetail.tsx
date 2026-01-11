import { motion } from 'framer-motion';
import { Link, useParams } from 'wouter';
import { ArrowLeft, Github, Play, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { projects, domainColors } from '@/lib/data';

export default function ProjectDetail() {
  const params = useParams<{ id: string }>();
  const project = projects.find(p => p.id === params.id);

  if (!project) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold">Project Not Found</h1>
            <Link href="/projects">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div
        className="absolute inset-0 h-[60vh] opacity-30 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, hsl(${project.themeColor} / 0.15) 0%, transparent 100%)`
        }}
      />

      <section className="relative py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/projects" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-projects">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Link>

            <div className="flex items-center gap-3 mb-6">
              <span className={`px-3 py-1 rounded-full text-xs font-medium border ${domainColors[project.domain]}`}>
                {project.domain}
              </span>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
              {project.title}
            </h1>

            <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
              {project.shortDescription}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-xl" data-testid="button-github">
                    <Github className="w-4 h-4 mr-2" />
                    View Code
                  </Button>
                </a>
              )}
              {project.videoUrl && (
                <a href={project.videoUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="rounded-xl" data-testid="button-video">
                    <Play className="w-4 h-4 mr-2" />
                    Watch Demo
                  </Button>
                </a>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <h2 className="font-display text-xl font-semibold mb-4">Problem Statement</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.problemStatement}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <h2 className="font-display text-xl font-semibold mb-4">Tech Stack</h2>
              <div className="flex flex-wrap gap-3">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-muted/50 rounded-xl text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <h2 className="font-display text-xl font-semibold mb-4">Architecture Overview</h2>
              <p className="text-muted-foreground leading-relaxed">
                {project.architecture}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8"
            >
              <h2 className="font-display text-xl font-semibold mb-4 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                Results & Impact
              </h2>
              <p className="text-foreground leading-relaxed">
                {project.results}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
