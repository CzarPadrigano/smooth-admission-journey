import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Calendar,
  UserCheck,
  Clock,
  LogOut,
} from "lucide-react";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-plp-maroon text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <img src="/placeholder.svg" alt="PLP Logo" className="h-10 w-10" />
            <span className="font-semibold">PLP Admissions</span>
          </div>
          <Button
            variant="ghost"
            className="text-white hover:bg-white/10 hover:text-white"
            onClick={() => {
              // Add logout logic here
            }}
          >
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </div>
      </nav>

      <main className="container mx-auto py-8 px-4">
        <h1 className="text-3xl font-bold text-plp-maroon mb-8 animate-fade-in">
          Welcome, Applicant!
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Link to="/application" className="transform transition-all hover:scale-105">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-plp-maroon">
                  <FileText className="mr-2" />
                  Application
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Complete your admission application
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/exam-schedule" className="transform transition-all hover:scale-105">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-plp-maroon">
                  <Calendar className="mr-2" />
                  Exam Schedule
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  View and select your examination schedule
                </p>
              </CardContent>
            </Card>
          </Link>

          <Link to="/interview" className="transform transition-all hover:scale-105">
            <Card className="h-full">
              <CardHeader>
                <CardTitle className="flex items-center text-plp-maroon">
                  <UserCheck className="mr-2" />
                  Interview
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">
                  Schedule your admission interview
                </p>
              </CardContent>
            </Card>
          </Link>

          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center text-plp-maroon">
                <Clock className="mr-2" />
                Status
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <p className="text-sm font-semibold">Application Status:</p>
                <span className="inline-block px-2 py-1 text-xs font-semibold text-white bg-yellow-500 rounded">
                  Pending
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;