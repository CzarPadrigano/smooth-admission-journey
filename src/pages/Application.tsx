import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Upload } from "lucide-react";

const Application = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Application submitted",
      description: "We will review your application and get back to you soon.",
    });
    setLoading(false);
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-plp-maroon text-white p-4">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            className="text-white hover:text-white/80"
            onClick={() => navigate("/dashboard")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </div>
      </nav>

      <main className="container mx-auto py-8 px-4">
        <Card className="max-w-2xl mx-auto animate-fade-in">
          <CardHeader>
            <CardTitle className="text-center text-plp-maroon">
              Admission Application Form
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-plp-maroon">
                  Personal Information
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="First Name" required />
                  <Input placeholder="Last Name" required />
                </div>
                <Input type="email" placeholder="Email Address" required />
                <Input placeholder="Contact Number" required />
                <Textarea placeholder="Complete Address" required />
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-plp-maroon">
                  Academic Information
                </h3>
                <Input placeholder="Previous School" required />
                <div className="grid grid-cols-2 gap-4">
                  <Input placeholder="Year Graduated" type="number" required />
                  <Input placeholder="GPA/Average" type="number" step="0.01" required />
                </div>
                <select
                  className="w-full p-2 border rounded-md"
                  required
                >
                  <option value="">Select Desired Program</option>
                  <option value="bsit">BS Information Technology</option>
                  <option value="bspsych">BS Psychology</option>
                  <option value="bsba">BS Business Administration</option>
                </select>
              </div>

              <div className="space-y-4">
                <h3 className="font-semibold text-lg text-plp-maroon">
                  Required Documents
                </h3>
                <div className="space-y-2">
                  <p className="text-sm text-gray-600">Upload the following documents:</p>
                  <div className="space-y-4">
                    {["School ID", "Transcript of Records", "2x2 Photo"].map((doc) => (
                      <div
                        key={doc}
                        className="border-2 border-dashed rounded-lg p-4 text-center"
                      >
                        <Upload className="mx-auto h-8 w-8 text-gray-400" />
                        <p className="mt-2 text-sm font-medium">{doc}</p>
                        <input
                          type="file"
                          className="hidden"
                          accept=".pdf,.jpg,.png"
                          required
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          className="mt-2"
                          onClick={() => {
                            // Add file upload logic
                          }}
                        >
                          Choose File
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-plp-maroon hover:bg-plp-maroon/90"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Application;