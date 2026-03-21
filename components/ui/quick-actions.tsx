"use client";

import { FloatingActionMenu } from "@/components/ui/floating-action-menu";
import { CONTACT } from "@/lib/constants";
import { FileText, MessageCircle } from "lucide-react";

export function QuickActions() {
  return (
    <FloatingActionMenu
      items={[
        {
          label: "Quick Inquiry",
          icon: <FileText className="h-4 w-4" />,
          onClick: () => {
            const section = document.getElementById("inquiry");
            section?.scrollIntoView({ behavior: "smooth" });
          },
          color: "bg-[--brand-solid]",
        },
        {
          label: "WhatsApp",
          icon: <MessageCircle className="h-4 w-4" />,
          onClick: () => {
            window.open(CONTACT.whatsapp, "_blank", "noopener,noreferrer");
          },
          color: "bg-emerald-500",
        },
      ]}
      mainLabel="Quick Actions"
    />
  );
}
