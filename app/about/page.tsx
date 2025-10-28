"use client"

import {useEffect} from "react";
import UIkit from "uikit";

export default function AboutPage() {

  useEffect(() => {
    UIkit.notification("To Go Back Click The Home Button")
  }, []);

  return (
    <main className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">About Me</h1>
      <p className="mb-2">
        Hello! My name is Alek Bronsky. I am a student in CIM 343, and this is my Wikipedia assignment project.
      </p>
      <p className="mb-2">
        I enjoy learning about web development, design, and technology. In my free time, I like to read, code, and
        explore new tools.
      </p>
      <p>Thank you for visiting my site!</p>
    </main>
  );
}
