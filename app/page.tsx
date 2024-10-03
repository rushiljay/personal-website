import { Hero } from "@/components/Hero";
import { ModeToggle } from "@/components/ModeToggle";

export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute top-0 right-0 m-2">
        <ModeToggle />
      </div>

      {/* Flex container to center the Hero component with slight offset */}
      <div className="flex justify-center">
        {/* Inner container with a slight offset from the middle */}
        <div className="max-w-3xl w-full px-4">
          <Hero />
            <p className="text-right">HELLO</p>
        </div>
      </div>
      </div>

  );
}
