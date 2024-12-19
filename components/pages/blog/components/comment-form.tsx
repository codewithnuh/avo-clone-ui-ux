import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function CommentForm() {
  return (
    <form className="space-y-6">
      <h2 className="text-2xl font-semibold">Leave a comment</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required placeholder="Your email" />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="website">Website</Label>
        <Input id="website" type="url" placeholder="Your website (optional)" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          required
          placeholder="Your comment"
          className="min-h-[150px]"
        />
      </div>
      <Button type="submit" className="bg-red-600 hover:bg-red-700">
        Post Comment
      </Button>
    </form>
  );
}
