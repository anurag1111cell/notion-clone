const PublicLayout = ({
    children
  }: {
    children: React.ReactNode;
  }) => {
    return ( 
      <div className="h-full dark:bg-[#000000]">
        {children}
      </div>
     );
  }
   
  export default PublicLayout;