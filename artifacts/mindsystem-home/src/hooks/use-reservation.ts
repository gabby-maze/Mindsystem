import { useState } from "react";
import { useMutation } from "@tanstack/react-query";

interface ReservationInput {
  firstName: string;
  lastName: string;
  email: string;
}

// Mock mutation since there is no backend provided
export function useCreateReservation() {
  return useMutation({
    mutationFn: async (data: ReservationInput) => {
      // Simulate network request
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      if (!data.email.includes("@")) {
        throw new Error("Please enter a valid email address.");
      }
      
      return { success: true, data };
    },
  });
}

export function useReservationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
