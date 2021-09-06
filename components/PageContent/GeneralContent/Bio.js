import Link from "next/link";

const Bio = ({ className }) => {
  return (
    <div className={`${className} text-sm`}>
      <h1 className="font-bold">Estelle</h1>
      <p>
        An online store 🏬 we deal on all kinds of footwear 👠👞 for both male
        and female. Contact us ☎ @08141703050. Worldwide delivery 🌍 @Owerri,
        Nigeria
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
