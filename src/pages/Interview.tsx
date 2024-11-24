import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Calendar, Clock, Video } from "lucide-react";

const Interview = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSlot, setSelectedSlot] = useState("");

  const interviewSlots = [
    {
      id: "1",
      date: "2024-03-20",
      time: "10:00 AM",
      type: "Online",
      available: true,
    },
    {
      id: "2",
      date: "2024-03-20",
      time: "2:00 PM",
      type: "Face-to-face",
      available: true,
    },
    {
      id: "3",
      date: "2024-03-21",
      time: "10:00 AM",
      type: "Online",
      available: false,
    },
    {
      id: "4",
      date: "2024-03-21",
      time: "2:00 PM",
      type: "Face-to-face",
      available: true,
    },
  ];

  const handleSchedule = () => {
    if (!selectedSlot) {
      toast({
        title: "Error",
        description: "Please select an interview schedule",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Interview Scheduled",
      description: "Your interview schedule has been confirmed.",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-plp-maroon text-white p-4">
        <div className="container mx-auto">
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white"
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
              Schedule Your Interview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-4">
                {interviewSlots.map((slot) => (
                  <div
                    key={slot.id}
                    className={`p-4 border rounded-lg ${
                      selectedSlot === slot.id
                        ? "border-plp-maroon bg-plp-maroon/5"
                        : "border-gray-200"
                    } ${
                      slot.available
                        ? "cursor-pointer hover:border-plp-maroon"
                        : "opacity-50 cursor-not-allowed"
                    }`}
                    onClick={() => {
                      if (slot.available) {
                        setSelectedSlot(slot.id);
                      }
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="space-y-1">
                        <div className="flex items-center text-sm font-medium">
                          <Calendar className="mr-2 h-4 w-4" />
                          {new Date(slot.date).toLocaleDateString("en-US", {
                            weekday: "long",
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          
                          <Clock className="mr-2 h-4 w-4" />
                          {slot.time}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <Video className="mr-2 h-4 w-4" />
                          {slot.type}
                        </div>
                      </div>
                      {!slot.available && (
                        <span className="text-sm text-red-500">Full</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">
                    Interview Guidelines
                  </h4>
                  <ul className="list-disc list-inside text-sm text-yellow-700 space-y-1">
                    <li>Dress appropriately (business casual)</li>
                    <li>Prepare all required documents</li>
                    <li>Test your camera and microphone (for online interviews)</li>
                    <li>Be ready 10 minutes before the scheduled time</li>
                  </ul>
                </div>

                <Button
                  onClick={handleSchedule}
                  className="w-full bg-plp-maroon hover:bg-plp-maroon/90"
                >
                  Confirm Interview Schedule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default Interview;