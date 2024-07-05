"use client"
import Image from "next/image";
import ButtonCustome from "./button";

export default function Home() {
  return (
    <main className="flex w-screen h-screen justify-center align-middle m-auto">
      <ButtonCustome icon={<p>X</p>} loading iconPosition="right" title="Button" size="l" type="primary" />
    </main>
  );
}
