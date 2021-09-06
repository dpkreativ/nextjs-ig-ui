import Bio from "./GeneralContent/Bio";
import Numbers from "./GeneralContent/Numbers";
import Header from "./Header";
import Highlights from "./Highlights";
import Tabs from "./Tabs";

const PageContent = () => {
  return (
    <main>
      <Header />
      <Bio className="p-5 md:hidden" />
      <Highlights />
      <Numbers className="grid grid-cols-3 text-center border-t border-b border-gray-200 py-4 md:hidden" />
      <Tabs />
    </main>
  );
};

export default PageContent;
