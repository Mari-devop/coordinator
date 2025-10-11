import OnboardingWrapper from "./OnboardingWrapper";

async function getOnboardingData() {
  await new Promise(resolve => setTimeout(resolve, 500));
  return {
    title: "Welcome to Coordinator",
    subtitle: "Let's set up your account in just a few steps"
  };
}

export default async function OnboardingPage() {
  const data = await getOnboardingData();
  
  return <OnboardingWrapper />;
}