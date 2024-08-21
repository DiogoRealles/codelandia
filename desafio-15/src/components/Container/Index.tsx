type TPropsContainer = {
  children: React.ReactNode;
  className?: string;
};

const Index = ({ children, className }: TPropsContainer) => {
  return (
    <div className={`max-w-container mx-auto px-4 ${className}`}>
      {children}
    </div>
  );
};

export default Index;
