// components/GradientBackground.tsx
export default function GradientBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-40 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 opacity-30 blur-3xl" />
      <div className="absolute top-1/3 right-10 h-[400px] w-[400px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 opacity-20 blur-3xl" />
    </div>
  );
}