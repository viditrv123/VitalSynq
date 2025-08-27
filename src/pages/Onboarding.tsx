import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import { Checkbox } from "../components/ui/checkbox";
import { Eye, EyeOff } from "lucide-react";
import { signInWithGoogle } from "@/utils/auth";
import logo from "../assets/logo.png";
import doctor from "../assets/doctor.jpg";

export function Onboarding() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email/password signin logic here
    console.log("Signin attempt:", { email, password, rememberMe });
  };

  const handleGoogleSignIn = async () => {
    setLoading(true);
    setError(null);
    try {
      const token = await signInWithGoogle();
      console.log("Firebase ID Token:", token);

      // TODO: send token to your backend for verification
      // await fetch("/auth", { method: "POST", body: JSON.stringify({ token }) });
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Google sign in failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center  bg-center relative">
      <div
        className="absolute inset-0 bg-cover bg-center bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(
      135deg,
      hsl(338, 100%, 50%, 0.5),
      hsl(338, 92%, 69%,0.3)
    ),url(${doctor})`,
        }}
      />
      <Card className="w-full max-w-md mx-auto bg-white/95 backdrop-blur-sm shadow-xl border-0 p-5">
        <CardHeader className="space-y-4 text-center">
          <div className="flex items-center justify-center space-x-2 gap-4">
            <div className="w-8 h-8  rounded-lg flex items-center justify-center">
              <div className="flex-shrink-0">
                <img src={logo} className="size-20" />
              </div>
            </div>
            <span className="text-3xl font-semibold text-primary">
              VitalSynq
            </span>
          </div>
          <div>
            <CardTitle className="text-2xl text-gray-900">
              Welcome Back
            </CardTitle>
            <CardDescription className="text-gray-600 mt-2">
              Sign in to your VitalSynq Hospital System account
            </CardDescription>
          </div>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-gray-700">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="doctor@VitalSynq.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                required
              />
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">
                Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500 pr-10"
                  required
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={setRememberMe}
                />
                <Label htmlFor="remember" className="text-sm text-gray-600">
                  Remember me
                </Label>
              </div>
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* Email/Password Sign In */}
            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
              disabled={loading}
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>

            {/* OR Divider */}
            <div className="flex items-center my-2">
              <hr className="flex-grow border-gray-300" />
              <span className="px-2 text-gray-500">or</span>
              <hr className="flex-grow border-gray-300" />
            </div>

            {/* Google Sign In */}
            <Button
              type="button"
              onClick={handleGoogleSignIn}
              className="w-full bg-red-600 hover:bg-red-700 text-white flex items-center justify-center space-x-2"
              size="lg"
              disabled={loading}
            >
              <img
                src="/google-icon.svg" // place a Google icon in public folder
                alt="Google"
                className="w-5 h-5"
              />
              <span>{loading ? "Signing in..." : "Sign in with Google"}</span>
            </Button>

            {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

            <div className="text-center text-sm text-gray-600 mt-4">
              Need help? Contact{" "}
              <button
                type="button"
                className="text-blue-600 hover:text-blue-800 hover:underline"
              >
                IT Support
              </button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
