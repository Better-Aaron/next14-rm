"use client";

import { UserButton, useAuth } from "@clerk/nextjs";
import Container from "../container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
import SearchInput from "../search-input";

const Navbar = () => {
  const router = useRouter();
  const { userId } = useAuth();
  return (
    <div className="sticky top-0 border border-b-primary/10 bg-secondary">
      <Container className="flex justify-between items-center gap-10">
        <div
          className="flex items-center gap-1 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image src="/next.svg" alt="" width={50} height={30} />
          <div className="font-bold text-xl">StaySavvy</div>
        </div>
        <SearchInput className="flex-grow max-w-96" />
        <div className="flex gap-3 items-center">
          <div>Theme</div>
          <UserButton afterSignOutUrl="/" />
          {!userId && (
            <>
              <Button
                onClick={() => router.push("/sign-in")}
                variant="outline"
                size="sm"
              >
                SignIn
              </Button>
              <Button
                onClick={() => router.push("/sign-up")}
                variant="default"
                size="sm"
              >
                SignUp
              </Button>
            </>
          )}
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
