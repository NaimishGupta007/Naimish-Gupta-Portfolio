import { Github, Linkedin, Twitter, Mail, Brain } from 'lucide-react';
import { Link } from 'wouter';

const socialLinks = [
  { icon: Github, href: 'https://github.com/naimish', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/naimishgupta007', label: 'LinkedIn' },
  { icon: Mail, href: 'naimishgupta007@gmail.com', label: 'Email' },
];

const footerLinks = [
  { label: 'Projects', href: '/projects' },
  { label: 'Research', href: '/research' },
  { label: 'Blog', href: '/blog' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group" data-testid="link-footer-logo">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <Brain className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-semibold text-lg">Naimish Gupta</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Machine Learning Engineer and AI Researcher with a focus on computer vision, deep learning, and applied AI systems.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground">Quick Links</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    data-testid={`link-footer-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-muted-foreground">Connect</h3>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Naimish Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
