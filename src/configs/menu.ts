// src/configs/menu.ts

export interface MenuItem {
  icon: string;
  label: string;
  href: string;
  visible: string[];
}

export const managementMenu: MenuItem[] = [
  {
    icon: "/teacher.png",
    label: "Teachers",
    href: "/list/teachers",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/student.png",
    label: "Students",
    href: "/list/students",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/parent.png",
    label: "Parents",
    href: "/list/parents",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/subject.png",
    label: "Subjects",
    href: "/list/subjects",
    visible: ["admin"],
  },
  {
    icon: "/class.png",
    label: "Classes",
    href: "/list/classes",
    visible: ["admin", "teacher"],
  },
  {
    icon: "/lesson.png",
    label: "Lessons",
    href: "/list/lessons",
    visible: ["admin", "teacher"],
  },
];

export const activitiesMenu: MenuItem[] = [
  {
    icon: "/exam.png",
    label: "Exams",
    href: "/list/exams",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/assignment.png",
    label: "Assignments",
    href: "/list/assignments",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/result.png",
    label: "Results",
    href: "/list/results",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/attendance.png",
    label: "Attendance",
    href: "/list/attendance",
    visible: ["admin", "teacher", "student", "parent"],
  },
];

export const communicationMenu: MenuItem[] = [
  {
    icon: "/calendar.png",
    label: "Events",
    href: "/list/events",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/message.png",
    label: "Messages",
    href: "/list/messages",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/announcement.png",
    label: "Announcements",
    href: "/list/announcements",
    visible: ["admin", "teacher", "student", "parent"],
  },
];

export const otherMenu: MenuItem[] = [
  {
    icon: "/profile.png",
    label: "Profile",
    href: "/profile",
    visible: ["admin", "teacher", "student", "parent"],
  },
  {
    icon: "/setting.png",
    label: "Settings",
    href: "/settings",
    visible: ["admin", "teacher", "student", "parent"],
  },
];

export const menus = {
  managementMenu,
  activitiesMenu,
  communicationMenu,
  otherMenu,
};
