import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

const ExamSchedule = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [selectedSlot, setSelectedSlot] = useState("");

  const examSlots = [
    {
      id: "1",
      date: "2024-03-15",
      time: "9:00 AM",
      venue: "Room 101",
      available: true,
    },
    {
      id: "2",
      date: "2024-03-15",
      time: "1:00 PM",
      venue: "Room 102",
      available: true,
    },
    {
      id: "3",
      date: "2024-03-16",
      time: "9:00 AM",
      venue: "Room 101",
      available: false,
    },
    {
      id: "4",
      date: "2024-03-16",
      time: "1:00 PM",
      venue: "Room 102",
      available: true,
    },
  ];

  const handleSchedule = () => {
    if (!selectedSlot) {
      toast({
        title: "Error",
        description: "Please select an exam schedule",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Exam Scheduled",
      description: "Your examination schedule has been confirmed.",
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
              Schedule Your Entrance Examination
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid gap-4">
                {examSlots.map((slot) => (
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
                          {slot.time} - {slot.venue}
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
                    Important Reminders
                  </h4>
                  <ul className="list-disc list-inside text-sm text-yellow-700 space-y-1">
                    <li>Bring a valid ID</li>
                    <li>Arrive 30 minutes before the scheduled time</li>
                    <li>Bring black or blue ballpen</li>
                    <li>No calculators allowed</li>
                  </ul>
                </div>

                <Button
                  onClick={handleSchedule}
                  className="w-full bg-plp-maroon hover:bg-plp-maroon/90"
                >
                  Confirm Schedule
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  );
};

export default ExamSchedule;