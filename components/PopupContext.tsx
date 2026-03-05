"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type PopupStage = "closed" | "services" | "eligibility";

interface PopupContextValue {
  stage: PopupStage;
  selectedService: string;
  openServicesPopup: () => void;
  openEligibilityPopup: (service?: string) => void;
  closePopup: () => void;
}

const PopupContext = createContext<PopupContextValue>({
  stage: "closed",
  selectedService: "",
  openServicesPopup: () => {},
  openEligibilityPopup: () => {},
  closePopup: () => {},
});

export function PopupProvider({ children }: { children: React.ReactNode }) {
  const [stage, setStage] = useState<PopupStage>("services"); // auto-open on mount
  const [selectedService, setSelectedService] = useState("");

  const openServicesPopup = useCallback(() => setStage("services"), []);

  const openEligibilityPopup = useCallback((service = "") => {
    setSelectedService(service);
    setStage("eligibility");
  }, []);

  const closePopup = useCallback(() => {
    setStage("closed");
    setSelectedService("");
  }, []);

  return (
    <PopupContext.Provider
      value={{ stage, selectedService, openServicesPopup, openEligibilityPopup, closePopup }}
    >
      {children}
    </PopupContext.Provider>
  );
}

export function usePopup() {
  return useContext(PopupContext);
}
