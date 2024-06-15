"use client";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Search } from "lucide-react";

const SearchInput = ({ className }: { className: string }) => {
  return (
    <div className={cn("relative sm:block hidden", className)}>
      <Search className="absolute h-4 w-4 top-3 left-4 text-muted-foreground" />
      <Input placeholder="Search" className="pl-10 bg-primary/10" />
    </div>
  );
};

export default SearchInput;
