import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ThumbsUp, MessageSquare, Send } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const FeedbackWidget = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [feedback, setFeedback] = useState("");

  const handleHelpful = () => {
    // Track helpful feedback
    console.log("Page marked as helpful");
    
    toast({
      title: "Thanks for your feedback!",
      description: "We're glad this was helpful.",
    });
  };

  const handleSubmit = () => {
    if (!feedback.trim()) return;
    
    // Submit suggestion - would connect to backend
    console.log("Suggestion submitted:", feedback);
    
    toast({
      title: "Suggestion received!",
      description: "Thank you for helping us improve.",
    });
    
    setFeedback("");
    setIsExpanded(false);
  };

  return (
    <Card className="border-2 border-accent/20 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg">
          <MessageSquare className="w-5 h-5 text-accent" />
          We'd love your feedback
        </CardTitle>
        <CardDescription>
          Help us make Resilience Compass better for everyone
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {!isExpanded ? (
          <div className="flex gap-3">
            <Button
              onClick={handleHelpful}
              variant="outline"
              className="flex-1 gap-2"
            >
              <ThumbsUp className="w-4 h-4" />
              This was helpful
            </Button>
            
            <Button
              onClick={() => setIsExpanded(true)}
              variant="outline"
              className="flex-1 gap-2"
            >
              <MessageSquare className="w-4 h-4" />
              Make a suggestion
            </Button>
          </div>
        ) : (
          <div className="space-y-3">
            <Textarea
              placeholder="Share your ideas to help us improve..."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              className="min-h-[100px] resize-none"
            />
            
            <div className="flex gap-2">
              <Button
                onClick={handleSubmit}
                disabled={!feedback.trim()}
                className="flex-1 bg-accent hover:bg-accent/90 text-accent-foreground gap-2"
              >
                <Send className="w-4 h-4" />
                Send Suggestion
              </Button>
              
              <Button
                onClick={() => {
                  setIsExpanded(false);
                  setFeedback("");
                }}
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default FeedbackWidget;
