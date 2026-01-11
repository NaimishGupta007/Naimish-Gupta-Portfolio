import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Play, Calendar } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { blogPosts } from '@/lib/data';
import { format } from 'date-fns';

const categories = ['All', 'Tutorial', 'Research', 'Demo', 'Opinion'];

const categoryColors = {
  'Tutorial': 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
  'Research': 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
  'Demo': 'bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20',
  'Opinion': 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
};

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredPosts = activeFilter === 'All' 
    ? blogPosts 
    : blogPosts.filter(p => p.category === activeFilter);

  return (
    <Layout>
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="font-display text-4xl sm:text-5xl font-bold">Blog & Content</h1>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              Educational content, tutorials, project demos, and thoughts on the future of AI and machine learning.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap justify-center gap-2 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeFilter === category
                    ? 'bg-primary text-primary-foreground shadow-lg'
                    : 'bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground'
                }`}
                data-testid={`button-filter-${category.toLowerCase()}`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {filteredPosts.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                layout
              >
                <div className="group bg-card rounded-2xl border border-border p-6 hover:border-primary/30 hover:shadow-lg transition-all cursor-pointer h-full">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium border ${categoryColors[post.category]}`}>
                      {post.category}
                    </span>
                    {post.videoUrl && (
                      <div className="w-8 h-8 rounded-lg bg-red-500/10 flex items-center justify-center">
                        <Play className="w-4 h-4 text-red-500" />
                      </div>
                    )}
                  </div>

                  <h2 className="font-display text-xl font-semibold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-muted-foreground mt-3 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {format(new Date(post.publishedAt), 'MMM d, yyyy')}
                    </div>
                    <div className="flex items-center gap-2 text-primary text-sm font-medium">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
