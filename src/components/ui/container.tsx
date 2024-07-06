type ContainerProps = {
  children: React.ReactNode;
};

export default function Container({ children }: Readonly<ContainerProps>) {
  return (
    <main className="mx-auto flex min-h-screen flex-col bg-gradient-to-b from-[#FAF0E4] to-[#AAA96E] px-4 text-black">
      {children}
    </main>
  );
}
