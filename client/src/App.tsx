import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import Home from "@/pages/Home";
import Projects from "@/pages/Projects";
import ProjectDetail from "@/pages/ProjectDetail";
import Research from "@/pages/Research";
import ResearchDetail from "@/pages/ResearchDetail";
import Blog from "@/pages/Blog";
import Resume from "@/pages/Resume";
import Contact from "@/pages/Contact";
import NotFound from "@/pages/not-found";

import AdminMessages from "@/pages/AdminMessages";
import AdminLogin from "@/pages/AdminLogin";

import { useEffect, useState, ReactNode } from "react";
import { supabase } from "@/lib/supabase";

/* ================= ADMIN GUARD ================= */

function AdminGuard({ children }: { children: ReactNode }) {
  const [allowed, setAllowed] = useState<boolean | null>(null);

  const checkAdmin = async () => {
  try {
    const { data: sessionData } = await supabase.auth.getSession();

    if (!sessionData.session?.user) {
      setAllowed(false);
      return;
    }

    const user = sessionData.session.user;

    console.log("Admin check:", user.email);

    setAllowed(user.email === "naimishgupta001@gmail.com");
  } catch (err) {
    console.error("Admin auth error:", err);
    setAllowed(false);
  }
};


  useEffect(() => {
    checkAdmin();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      checkAdmin();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);


  if (allowed === null) return <p>Checking access...</p>;
  if (!allowed) return <p>❌ Access denied</p>;

  return <>{children}</>;
}

/* ================= ROUTER ================= */

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/projects" component={Projects} />
      <Route path="/projects/:id" component={ProjectDetail} />
      <Route path="/research" component={Research} />
      <Route path="/research/:id" component={ResearchDetail} />
      <Route path="/blog" component={Blog} />
      <Route path="/resume" component={Resume} />
      <Route path="/contact" component={Contact} />

      {/* 🔑 ADMIN LOGIN (PUBLIC) */}
      <Route path="/admin/login" component={AdminLogin} />

      {/* 🔒 ADMIN ONLY */}
      <Route path="/admin/messages">
        <AdminGuard>
          <AdminMessages />
        </AdminGuard>
      </Route>

      <Route component={NotFound} />
    </Switch>
  );
}

/* ================= APP ================= */

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}
