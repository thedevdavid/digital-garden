"use client";

import { useCallback, useEffect, useState } from "react";

import { Button, ButtonProps } from "@/components/ui/button";

interface CopyButtonProps extends ButtonProps {
  copyText: string;
}

export function CopyButton({ copyText, children, ...props }: CopyButtonProps) {
  const [notification, setNotification] = useState<boolean>(false);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(false);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const copyToClipboard = useCallback((value: string) => {
    navigator.clipboard.writeText(value);
    setNotification(true);
  }, []);

  return (
    <Button onClick={() => copyToClipboard(copyText)} {...props}>
      {notification ? <span className="text-xs text-green-500">Copied!</span> : children}
    </Button>
  );
}
