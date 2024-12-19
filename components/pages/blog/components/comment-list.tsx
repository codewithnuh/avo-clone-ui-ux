import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface Comment {
  id: number;
  author: string;
  date: string;
  content: string;
  avatar: string;
  replies?: Comment[];
}

const comments: Comment[] = [
  {
    id: 1,
    author: "John Doe",
    date: "Jul 22, 2020 at 3:31pm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris non quam volutpat, quis pharetra dolor auctor. Sed efficitur feugiat lorem, quis dignissim quam cursus id. Lorem volutpat porttitor velit.",
    avatar: "/images/person_2.webp",
    replies: [
      {
        id: 7,
        author: "Jane Smith",
        date: "Jul 22, 2020 at 4:15pm",
        content:
          "I completely agree with your point, John. The author's perspective on this topic is quite insightful.",
        avatar: "/images/person_1.webp",
      },
      {
        id: 8,
        author: "John Doe",
        date: "Jul 22, 2020 at 5:00pm",
        content:
          "Thanks for your input, Jane! I'm glad we're on the same page about this.",
        avatar: "/images/person_3.webp",
      },
    ],
  },
  {
    id: 2,
    author: "John Doe",
    date: "Jul 22, 2020 at 3:31pm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris non quam volutpat, quis pharetra dolor auctor. Sed efficitur feugiat lorem.",
    avatar: "/images/person_1.webp",
  },
  {
    id: 3,
    author: "John Doe",
    date: "Jul 22, 2020 at 3:31pm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris non quam volutpat, quis pharetra dolor auctor. Sed efficitur feugiat lorem, quis dignissim quam cursus id.",
    avatar: "/images/person_4.webp",
    replies: [
      {
        id: 9,
        author: "Alice Johnson",
        date: "Jul 23, 2020 at 9:45am",
        content:
          "I have a different perspective on this. While I see your point, I think we should also consider...",
        avatar: "/images/person_5.webp",
      },
    ],
  },
  {
    id: 4,
    author: "John Doe",
    date: "Jul 22, 2020 at 3:31pm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris non quam volutpat, quis pharetra dolor auctor.",
    avatar: "/images/person_1.webp",
  },
  {
    id: 5,
    author: "John Doe",
    date: "Jul 22, 2020 at 3:31pm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris non quam volutpat, quis pharetra dolor auctor. Sed efficitur feugiat lorem.",
    avatar: "/images/person_3.webp",
  },
  {
    id: 6,
    author: "John Doe",
    date: "Jul 22, 2020 at 3:31pm",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus auctor mauris non quam volutpat, quis pharetra dolor auctor. Sed efficitur feugiat lorem, quis dignissim quam cursus id.",
    avatar: "/images/person_2.webp",
  },
];

function CommentItem({
  comment,
  isReply = false,
}: {
  comment: Comment;
  isReply?: boolean;
}) {
  return (
    <div className={`flex gap-4 ${isReply ? "ml-12 mt-4" : ""}`}>
      <Avatar className="h-10 w-10 relative">
        <AvatarImage
          className="absolute -bottom-8"
          src={comment.avatar}
          alt={comment.author}
        />
        <AvatarFallback>{comment.author[0]}</AvatarFallback>
      </Avatar>
      <div className="flex-1 space-y-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold">{comment.author}</span>
          <span className="text-sm text-primary">{comment.date}</span>
        </div>
        <p className="text-muted-foreground">{comment.content}</p>
        <Button
          variant="ghost"
          size="sm"
          className="text-muted-foreground hover:text-foreground"
        >
          Reply
        </Button>
        {comment.replies && (
          <div className="space-y-4 mt-4">
            {comment.replies.map((reply) => (
              <CommentItem key={reply.id} comment={reply} isReply />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function CommentsList() {
  const totalComments = comments.reduce(
    (acc, comment) => acc + 1 + (comment.replies?.length || 0),
    0
  );

  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold">{totalComments} Comments</h2>
      <div className="space-y-6">
        {comments.map((comment) => (
          <CommentItem key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  );
}
