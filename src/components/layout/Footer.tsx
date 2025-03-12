
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="py-6 px-4 border-t border-border mt-auto">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="font-display font-bold text-lg tracking-tight">
              HOME<span className="text-homebase">BASE</span>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
              By Sears • Since 1893
            </p>
          </div>
          
          <div className="flex gap-6 text-sm">
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </Link>
            <Link to="#" className="text-muted-foreground hover:text-foreground transition-colors">
              Support
            </Link>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground text-center md:text-left mt-6">
          © {new Date().getFullYear()} Sears. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
