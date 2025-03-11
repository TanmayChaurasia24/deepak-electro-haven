
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  User, 
  Lock, 
  Mail, 
  UserPlus, 
  ArrowLeft, 
  Facebook, 
  Github 
} from "lucide-react";

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);
  
  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
        {/* Left Side - Illustration/Image */}
        <div className="lg:w-1/2 bg-primary/5 flex items-center justify-center p-8 lg:p-12">
          <div className="max-w-lg">
            <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium mb-12">
              <ArrowLeft className="h-4 w-4" /> 
              Back to homepage
            </Link>
            
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl font-display font-bold">
                {isLogin 
                  ? "Welcome back to Deepak Agencies" 
                  : "Join Deepak Agencies Family"}
              </h1>
              
              <p className="text-muted-foreground">
                {isLogin 
                  ? "Sign in to your account to access exclusive deals, track orders, and manage your profile." 
                  : "Create an account to enjoy seamless shopping, exclusive offers, and personalized recommendations."}
              </p>
              
              <div className="aspect-[4/3] relative max-w-md mx-auto lg:mx-0">
                <img 
                  src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                  alt="Electronics store" 
                  className="rounded-xl object-cover w-full h-full shadow-lg"
                />
                <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-xl shadow-lg max-w-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <User className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Join 10,000+ customers</p>
                      <p className="text-xs text-muted-foreground">Who trust Deepak Agencies</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Right Side - Auth Form */}
        <div className="lg:w-1/2 flex items-center justify-center p-8 lg:p-12">
          <div className="w-full max-w-md">
            <div className="mb-8 text-center lg:text-left">
              <Link to="/" className="inline-block">
                <h2 className="text-2xl font-display font-bold text-foreground">
                  Deepak<span className="text-primary font-light">Agencies</span>
                </h2>
              </Link>
            </div>
            
            <div className="bg-white shadow-sm border border-border rounded-xl p-8">
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">
                    {isLogin ? "Sign In" : "Create Account"}
                  </h3>
                  <button 
                    onClick={toggleAuthMode} 
                    className="text-sm text-primary hover:underline"
                  >
                    {isLogin ? "Need an account?" : "Already have an account?"}
                  </button>
                </div>
                
                <div className="flex flex-col gap-4">
                  {/* Social Login Buttons */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <Button variant="outline" className="flex items-center gap-2" type="button">
                      <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"></path>
                        <path d="M15.547 8.74A3.3 3.3 0 0012.93 7.36a3.24 3.24 0 00-2.488 1.307 3.38 3.38 0 00-.678 2.088 3.35 3.35 0 00.678 2.045 3.24 3.24 0 002.451 1.307 3.3 3.3 0 002.572-1.318"></path>
                      </svg>
                      Google
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2" type="button">
                      <Facebook className="h-4 w-4" />
                      Facebook
                    </Button>
                  </div>
                  
                  <div className="relative my-4">
                    <div className="absolute inset-0 flex items-center">
                      <span className="w-full border-t"></span>
                    </div>
                    <div className="relative flex justify-center text-xs uppercase">
                      <span className="bg-white px-2 text-muted-foreground">Or continue with</span>
                    </div>
                  </div>
                  
                  <form className="space-y-4">
                    {!isLogin && (
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                            <User className="h-4 w-4" />
                          </div>
                          <input
                            id="name"
                            type="text"
                            className="w-full pl-10 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="John Doe"
                          />
                        </div>
                      </div>
                    )}
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                          <Mail className="h-4 w-4" />
                        </div>
                        <input
                          id="email"
                          type="email"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="you@example.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <label htmlFor="password" className="block text-sm font-medium">Password</label>
                        {isLogin && (
                          <a href="#" className="text-sm text-primary hover:underline">
                            Forgot password?
                          </a>
                        )}
                      </div>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                          <Lock className="h-4 w-4" />
                        </div>
                        <input
                          id="password"
                          type="password"
                          className="w-full pl-10 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="••••••••"
                        />
                      </div>
                    </div>
                    
                    {!isLogin && (
                      <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium mb-2">Confirm Password</label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-muted-foreground">
                            <Lock className="h-4 w-4" />
                          </div>
                          <input
                            id="confirm-password"
                            type="password"
                            className="w-full pl-10 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                            placeholder="••••••••"
                          />
                        </div>
                      </div>
                    )}
                    
                    {isLogin ? (
                      <div className="flex items-center space-x-2 my-1">
                        <input
                          type="checkbox"
                          id="remember"
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="remember" className="text-sm text-muted-foreground">
                          Remember me for 30 days
                        </label>
                      </div>
                    ) : (
                      <div className="flex items-center space-x-2 my-1">
                        <input
                          type="checkbox"
                          id="terms"
                          className="rounded border-gray-300 text-primary focus:ring-primary"
                        />
                        <label htmlFor="terms" className="text-sm text-muted-foreground">
                          I agree to the{" "}
                          <a href="#" className="text-primary hover:underline">
                            Terms of Service
                          </a>{" "}
                          and{" "}
                          <a href="#" className="text-primary hover:underline">
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    )}
                    
                    <Button className="w-full" size="lg">
                      {isLogin ? 
                        <span className="flex items-center gap-2">
                          <User className="h-4 w-4" /> Sign In
                        </span> 
                        : 
                        <span className="flex items-center gap-2">
                          <UserPlus className="h-4 w-4" /> Create Account
                        </span>
                      }
                    </Button>
                  </form>
                </div>
              </div>
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              &copy; {new Date().getFullYear()} Deepak Agencies. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
