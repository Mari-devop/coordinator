import { Step } from "@/app/_types/onboardingTypes";

export const steps: Step[] = [
  { 
    id: 1, 
    title: "Personal Info", 
    description: "Tell us about yourself",
    icon: "👤"
  },
  { 
    id: 2, 
    title: "Company Details", 
    description: "Your work information",
    icon: "🏢"
  },
  { 
    id: 3, 
    title: "Role Selection", 
    description: "Choose your role type",
    icon: "🎯"
  },
  { 
    id: 4, 
    title: "Team Setup", 
    description: "Configure your team",
    icon: "👥"
  },
  { 
    id: 5, 
    title: "Connect Services", 
    description: "Link your accounts",
    icon: "🔗"
  }
];
