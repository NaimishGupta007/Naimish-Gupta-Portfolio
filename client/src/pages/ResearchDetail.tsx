import { motion } from 'framer-motion';
import { Link, useParams } from 'wouter';
import { ArrowLeft, FileText, Award, Download, ExternalLink, CheckCircle, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Layout } from '@/components/layout/Layout';
import { research } from '@/lib/data';

const statusConfig = {
  'Paper Accepted': {
    icon: CheckCircle,
    color: 'text-green-600 dark:text-green-400 bg-green-500/10 border-green-500/20',
  },
  'Under Review': {
    icon: Clock,
    color: 'text-yellow-600 dark:text-yellow-400 bg-yellow-500/10 border-yellow-500/20',
  },
  'Patent Published': {
    icon: Award,
    color: 'text-blue-600 dark:text-blue-400 bg-blue-500/10 border-blue-500/20',
  },
  'Patent Pending': {
    icon: Clock,
    color: 'text-purple-600 dark:text-purple-400 bg-purple-500/10 border-purple-500/20',
  },
} as const;


export default function ResearchDetail() {
  const params = useParams<{ id: string }>();
  const item = research.find(r => r.id === params.id);

  if (!item) {
    return (
      <Layout>
        <div className="min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="font-display text-2xl font-bold">Research Not Found</h1>
            <Link href="/research">
              <Button variant="outline" className="mt-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Research
              </Button>
            </Link>
          </div>
        </div>
      </Layout>
    );
  }

  const status = statusConfig[item.status];

if (!status) {
  console.error('Invalid research status:', item.status);
  return null;
}

const StatusIcon = status.icon;

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Link href="/research" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8" data-testid="link-back-research">
              <ArrowLeft className="w-4 h-4" />
              Back to Research
            </Link>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.type === 'patent' ? 'bg-amber-500/10' : 'bg-blue-500/10'}`}>
                {item.type === 'patent' ? (
                  <Award className="w-5 h-5 text-amber-600 dark:text-amber-400" />
                ) : (
                  <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                )}
              </div>
              <span className={`px-3 py-1 rounded-full text-xs font-medium border flex items-center gap-1.5 ${statusConfig[item.status].color}`}>
                <StatusIcon className="w-3 h-3" />
                {item.status}
              </span>
              {item.patentNumber && (
                <span className="px-3 py-1 rounded-full text-xs font-mono bg-muted/50 border border-border">
                  {item.patentNumber}
                </span>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold leading-tight">
              {item.title}
            </h1>

            {item.pdfUrl && (
              <div className="mt-8">
                <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
                  <Button className="rounded-xl" data-testid="button-download-pdf">
                    <Download className="w-4 h-4 mr-2" />
                    Download PDF
                  </Button>
                </a>
              </div>
            )}
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
              <h2 className="font-display text-xl font-semibold mb-4">Abstract</h2>
              <p className="text-muted-foreground leading-relaxed">
                {item.abstract}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <h2 className="font-display text-xl font-semibold mb-4">Problem Motivation</h2>
              <p className="text-muted-foreground leading-relaxed">
                {item.motivation}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-card rounded-2xl border border-border p-8"
            >
              <h2 className="font-display text-xl font-semibold mb-4">Methodology</h2>
              <p className="text-muted-foreground leading-relaxed">
                {item.methodology}
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
                Results
              </h2>
              <p className="text-foreground leading-relaxed">
                {item.results}
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
