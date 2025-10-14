"use client";
import { useState } from "react";
import { OnboardingData } from "../../_types/onboardingTypes";
import { steps } from "../_components/_onboarding/constants";
import { 
  ProgressHeader, 
  StepContent, 
  SummaryPanel, 
  InviteSectionWrapper, 
  NavigationButtons 
} from "../_components/_onboarding/components";
import { onboardingStyles } from "../_styles/onboardingStyles";

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