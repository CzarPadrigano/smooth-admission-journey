import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add actual login logic here
    if (email && password) {
      toast({
        title: "Login successful",
        description: "Welcome to PLP Admissions",
      });
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-plp-maroon to-plp-maroon/90 p-4">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center">
          <img
            src="/placeholder.svg"
            alt="PLP Logo"
            className="mx-auto h-24 w-auto"
          />
          <h2 className="mt-6 text-3xl font-bold text-white">
            Pamantasan ng Lungsod ng Pasig
          </h2>
          <p className="mt-2 text-sm text-white/80">Admission Portal</p>
        </div>

        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="text-center text-plp-maroon">
              Sign in to your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <Input
                  type="email"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <div>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full"
                  required
                />
              </div>
              <Button type="submit" className="w-full bg-plp-maroon hover:bg-plp-maroon/90">
                Sign in
              </Button>
            </form>
            <div className="mt-4 text-center text-sm">
              <span className="text-gray-600">Don't have an account? </span>
              <Link
                to="/register"
                className="text-plp-maroon hover:text-plp-maroon/80 font-semibold"
              >
                Register here
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;