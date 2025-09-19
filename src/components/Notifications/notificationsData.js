import SvgBugBeetle from "../RightSide/IconComps/BugBeetle";
import SvgBroadcast from "../RightSide/IconComps/Broadcast";
import SvgUser from "../RightSide/IconComps/User";

export const notificationsData = [
  {
    id: 1,
    icon: SvgBugBeetle,
    title: "You have a bug that needs fixing",
    description: "Just now",
  },
  {
    id: 2,
    icon: SvgUser,
    title: "New comment on your post",
    description: "5 minutes ago",
  },
  {
    id: 3,
    icon: SvgBugBeetle,
    title: "Your password was changed",
    description: "1 hour ago",
  },
  {
    id: 4,
    icon: SvgBroadcast,
    title: "New friend request",
    description: "Yesterday",
  },
];
