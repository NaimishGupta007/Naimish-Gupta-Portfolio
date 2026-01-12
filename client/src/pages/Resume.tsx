import { motion } from 'framer-motion';
import { Download, FileText, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { resumes } from '@/lib/data';

const roleIcons = {
  'ML Engineer': '🤖',
  'CV Engineer': '👁️',
  'Research Scientist': '🔬',
  'Data Scientist': '👩‍💻',
  'Data Analyst' : '📊',
  'Applied Cryptography Developer' : '🔍'
};

export default function Resume() {
  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold">Resume</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Download my resume tailored to specific roles. Each version highlights relevant 
              work and skills for different positions in AI and machine learning.
            </p>
          </motion.div>

          <div className="grid gap-6">
            {resumes.map((resume, i) => (
              <motion.div
                key={resume.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center text-3xl shrink-0">
                      {roleIcons[resume.role as keyof typeof roleIcons] || '📄'}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h2 className="font-display text-xl font-semibold">{resume.title}</h2>
                          <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
                            <Briefcase className="w-4 h-4" />
                            {resume.role}
                          </div>
                        </div>
                        <Button className="rounded-xl shrink-0" data-testid={`button-download-${resume.id}`}>
                          <Download className="w-4 h-4 mr-2" />
                          Download
                        </Button>
                      </div>
                      <p className="text-muted-foreground mt-4">
                        {resume.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-12 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20 p-8 text-center"
          >
            <FileText className="w-12 h-12 mx-auto text-primary mb-4" />
            <h3 className="font-display text-xl font-semibold">Need a Custom Resume?</h3>
            <p className="text-muted-foreground mt-2 max-w-md mx-auto">
              If you're looking for a resume tailored to a specific role or project, 
              feel free to reach out.
            </p>
            <Button variant="outline" className="mt-6 rounded-xl" asChild>
              <a href="/contact" data-testid="button-contact-resume">Contact Me</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
