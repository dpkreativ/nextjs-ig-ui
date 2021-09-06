import Bio from "../GeneralContent/Bio";
import Numbers from "../GeneralContent/Numbers";
import ActionButtons from "./ActionButtons";
import MoreOptions from "./MoreOptions";
import PageName from "./PageName";

const ProfileUserData = () => {
  return (
    <section className="w-2/3">
      <div className="grid grid-cols-2 md:flex md:space-x-8 items-center gap-y-4">
        <PageName />
        <MoreOptions />
        <ActionButtons />
      </div>
      <Numbers className="hidden md:flex md:space-x-4 md:py-4" />
      <Bio className="hidden md:block" />
    </section>
  );
};

export default ProfileUserData;
