import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, FileText, Award, Clock, CheckCircle } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { research } from '@/lib/data';

const filters = ['All', 'Papers', 'Patents'];

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

export default function Research() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredResearch = activeFilter === 'All' 
    ? research 
    : activeFilter === 'Papers'
    ? research.filter(r => r.type === 'paper')
    : research.filter(r => r.type === 'patent');

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold">Research & Patents</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Academic publications and intellectual property representing novel contributions 
              to the fields of machine learning, computer vision, and AI security.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex justify-center gap-2 mb-12"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
                data-testid={`button-filter-${filter.toLowerCase()}`}
              >
                {filter}
              </button>
            ))}
          </motion.div>

          <div className="space-y-6">
            {filteredResearch.map((item, i) => {
              const StatusIcon = statusConfig[item.status].icon;
              
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  layout
                >
                  <Link href={`/research/${item.id}`} data-testid={`card-research-${item.id}`}>
                    <div className="group bg-card rounded-2xl border border-border p-8 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer">
                      <div className="flex items-start justify-between gap-4 mb-4">
                        <div className="flex items-center gap-3">
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
                        </div>
                        {item.patentNumber && (
                          <span className="text-xs text-muted-foreground font-mono">
                            {item.patentNumber}
                          </span>
                        )}
                      </div>

                      <h2 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                        {item.title}
                      </h2>

                      <p className="text-muted-foreground mt-3 line-clamp-3">
                        {item.abstract}
                      </p>

                      <div className="flex items-center gap-2 mt-6 text-primary text-sm font-medium">
                        Read More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
