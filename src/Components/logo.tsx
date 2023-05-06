const Logo = () => {
  return (
    <div className="flex items-center">
      <img src="/logo.png" width={"30px"} height={"30px"} alt="Youtube logo" />
      <span className="font-bold tracking-tighter lg:block hidden text-theme">
        YOUTUBE
      </span>
    </div>
  );
};

export default Logo;
