import { useTranslations } from "next-intl";
import Card from "../UI/Card";

export default function HomeCards() {
  const t = useTranslations();
  const cardCount = 6;

  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {[...Array(cardCount)].map((_, index) => (
        <Card key={`card-${index + 1}`}>
          <div className="flex flex-col gap-6 group">
            <div className="bg-main text-white py-4 px-6 rounded max-w-full">
              <h3 className="text-xl font-bold truncate">
                {t(`HomeCards.title${index + 1}`)}
              </h3>
            </div>
            <div className="flex justify-start">
              <hr className="h-[2px] bg-main w-[0px] group-hover:w-full group-hover:scale-0 group-hover:transition-all groupe-hover:ease group-hover:duration-500" />  
            </div>
            <div className="text-lg max-w-[650px] text-balance px-8">
              {t(`HomeCards.description${index + 1}`)}
            </div>
            <div className="flex justify-end">
              <hr className="h-[2px] bg-main w-[0px] group-hover:w-full group-hover:scale-0 group-hover:transition-all groupe-hover:ease group-hover:duration-500" />  
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}