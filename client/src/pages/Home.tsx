import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Brain, Eye, FileText, Sparkles, Code, Shield, Microscope } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { projects } from '@/lib/data';

const stats = [
  { label: 'Projects Completed', value: '8+' },
  { label: 'Patents & Papers', value: '4' },
  { label: 'Applied Learning years', value: '3+' },
  { label: 'Cross-Domain Collaboration', value: '5+' },
];

const expertise = [
  { icon: Brain, label: 'Deep Learning', description: 'Neural networks, transformers, and model optimization' },
  { icon: Eye, label: 'Computer Vision', description: 'Object detection, segmentation, and tracking' },
  { icon: Shield, label: 'AI Security', description: 'Threat detection and adversarial robustness' },
  { icon: Microscope, label: 'Research', description: 'Publications, patents, and novel methodologies' },
];

export default function Home() {
  return (
    <Layout>
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                <span>Open to new opportunities</span>
              </div>

              <div className="space-y-4">
                <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="text-gradient">Naimish</span>
                  <br />
                  Gupta
                </h1>
                <p className="text-xl sm:text-2xl text-muted-foreground font-display">
                  Machine Learning Engineer
                  <span className="text-primary"> · </span>
                  Computer Vision Engineer
                  <span className="text-primary"> · </span>
                  AI Researcher
                </p>
              </div>

              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Building intelligent systems that perceive, understand, and act. Specializing in real-time computer vision, 
                deep learning architectures, and research that pushes the boundaries of what AI can achieve.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link href="/projects">
                  <Button size="lg" className="group rounded-xl" data-testid="button-view-projects">
                    View Projects
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
                <Link href="/research">
                  <Button size="lg" variant="outline" className="rounded-xl" data-testid="button-view-research">
                    View Research
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button size="lg" variant="ghost" className="rounded-xl" data-testid="button-contact">
                    Contact Me
                  </Button>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square max-w-lg mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-3xl blur-2xl" />
                <div className="relative bg-card rounded-3xl border border-border p-8 shadow-2xl">
                  <div className="grid grid-cols-2 gap-4">
                    {expertise.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 + i * 0.1 }}
                        className="p-4 rounded-2xl bg-muted/50 border border-border/50 hover:border-primary/30 transition-colors group"
                      >
                        <item.icon className="w-8 h-8 text-primary mb-3 group-hover:scale-110 transition-transform" />
                        <h3 className="font-display font-semibold text-sm">{item.label}</h3>
                        <p className="text-xs text-muted-foreground mt-1">{item.description}</p>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center justify-center gap-4">
                    <Code className="w-6 h-6 text-muted-foreground animate-float" />
                    <Brain className="w-10 h-10 text-primary animate-float" style={{ animationDelay: '1s' }} />
                    <Eye className="w-6 h-6 text-muted-foreground animate-float" style={{ animationDelay: '2s' }} />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-card/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="font-display text-4xl sm:text-5xl font-bold text-gradient">{stat.value}</div>
                <div className="text-sm text-muted-foreground mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              A selection of my work in computer vision, machine learning, and AI research.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link href={`/projects/${project.id}`} data-testid={`card-project-${project.id}`}>
                  <div className="group relative bg-card rounded-2xl border border-border p-6 h-full hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer">
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
                      style={{
                        background: `linear-gradient(135deg, hsl(${project.themeColor} / 0.05) 0%, transparent 50%)`
                      }}
                    />
                    <div className="relative">
                      <div className="flex items-center gap-2 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          project.domain === 'CV' ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20' :
                          project.domain === 'ML' ? 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20' :
                          project.domain === 'Security' ? 'bg-red-500/10 text-red-600 dark:text-red-400 border-red-500/20' :
                          project.domain === 'Research' ? 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20' :
                          'bg-pink-500/10 text-pink-600 dark:text-pink-400 border-pink-500/20'
                        }`}>
                          {project.domain}
                        </span>
                      </div>
                      <h3 className="font-display text-lg font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
                        {project.shortDescription}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.techStack.slice(0, 3).map((tech) => (
                          <span key={tech} className="px-2 py-0.5 bg-muted/50 rounded text-xs text-muted-foreground">
                            {tech}
                          </span>
                        ))}
                        {project.techStack.length > 3 && (
                          <span className="px-2 py-0.5 text-xs text-muted-foreground">
                            +{project.techStack.length - 3}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects">
              <Button variant="outline" size="lg" className="rounded-xl group" data-testid="button-view-all-projects">
                View All Projects
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-card/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold">Let's Build Something Amazing</h2>
            <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
              Whether you're looking for a collaborator on cutting-edge AI research or need expertise in building production ML systems, I'd love to hear from you.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/contact">
                <Button size="lg" className="rounded-xl" data-testid="button-get-in-touch">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/resume">
                <Button size="lg" variant="outline" className="rounded-xl" data-testid="button-download-resume">
                  <FileText className="w-4 h-4 mr-2" />
                  Download Resume
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
