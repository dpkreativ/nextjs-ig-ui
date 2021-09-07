import Link from "next/link";

const Bio = ({ className }) => {
  return (
    <div className={`${className} text-sm`}>
      <h1 className="font-bold">Estelle</h1>
      <p>
        An online store 🏬 we deal on all kinds of footwear 👠👞 for both male
        and female. Contact us ☎{" "}
        <span className="text-blue-600">@08141703050</span>. Worldwide delivery
        🌍 <span className="text-blue-600">@Owerri</span>, Nigeria
      </p>
      <Link href="https://instagram.com">
        <p className="text-xs py-5">
          followed by <span className="font-bold">dpkreativ</span>
        </p>
      </Link>
    </div>
  );
};

export default Bio;
