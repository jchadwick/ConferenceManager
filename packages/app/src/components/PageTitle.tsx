import React, { useEffect } from "react";

export const PageTitle = ({ title }: { title: string }) => {
  useEffect(() => {
    window.document.title = title;
  }, [title]);

  return <h2>{title}</h2>;
};
