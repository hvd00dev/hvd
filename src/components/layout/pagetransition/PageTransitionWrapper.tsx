"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import PageLoader from "@/components/ui/pageloader/PageLoader";

export default function PageTransitionWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setLoading(true);

    timeoutRef.current = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [pathname]);

  return (
    <>
      {loading && <PageLoader />}
      {children}
    </>
  );
}
