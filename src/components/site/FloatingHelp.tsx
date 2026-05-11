import { Link } from "@tanstack/react-router";
import { MessageSquare } from "lucide-react";

export function FloatingHelp() {
  return (
    <Link
      to="/contact"
      className="fixed bottom-8 right-8 z-[100] flex items-center gap-2 bg-[#1f3a5f] text-white px-6 py-3 rounded-full shadow-2xl hover:bg-[#152a47] transition-all group border border-white/10"
    >
      <MessageSquare className="h-4 w-4" />
      <span className="text-[14px] font-medium">Get help</span>
    </Link>
  );
}
