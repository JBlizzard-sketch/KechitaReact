import { Switch, Route } from 'wouter';
import { HelmetProvider } from 'react-helmet-async';
import { queryClient } from './lib/queryClient';
import { QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import LoanProductsPage from '@/pages/LoanProductsPage';
import ApplyNowPage from '@/pages/ApplyNowPage';
import SuccessStoriesPage from '@/pages/SuccessStoriesPage';
import ImpactReportPage from '@/pages/ImpactReportPage';
import ResourcesPage from '@/pages/ResourcesPage';
import BlogPage from '@/pages/BlogPage';
import TeamPage from '@/pages/TeamPage';
import ContactPage from '@/pages/ContactPage';
import NotFound from '@/pages/not-found';

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/loans" component={LoanProductsPage} />
      <Route path="/apply" component={ApplyNowPage} />
      <Route path="/success-stories" component={SuccessStoriesPage} />
      <Route path="/impact" component={ImpactReportPage} />
      <Route path="/resources" component={ResourcesPage} />
      <Route path="/blog" component={BlogPage} />
      <Route path="/team" component={TeamPage} />
      <Route path="/contact" component={ContactPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
          <Toaster />
        </TooltipProvider>
      </QueryClientProvider>
    </HelmetProvider>
  );
}

export default App;
