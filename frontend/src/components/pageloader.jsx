import { LoaderIcon } from "lucide-react";

const PageLoader = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <span className="loading loading-ring w-[60px] lg:w-[70px]"></span>
    </div>
  );
};
export default PageLoader;
