interface ProfileCardProps {
  firstName: string;
  lastName: string;
  role: string;
  imgUrl: string;
}
interface FooterLink {
  category: string;
  links: { label: string; href: string }[];
}
interface WorkItem {
  title: string;
  category: string;
  description: string;
  author: {
    name: string;
    avatar: string;
  };
  image: string;
}
