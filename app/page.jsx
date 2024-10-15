import ResultsSection from "./components/ResultsSection";
import SummarySection from "./components/SummarySection";
import data from "/data.json";
import ContinueBtn from "./components/ContinueBtn";
import CategoryList from "./components/CategoryList";

export default function Home() {
  const { score } = data.reduce((firstVal, lastVal) => ({
    score: firstVal.score + lastVal.score,
  }));

  const avgScore = (score / data.length).toFixed(0);

  return (
    <main className="md:w-[46rem] md:h-[32rem] md:shadow-2xl md:rounded-[2rem] flex md:flex-row flex-col md:*:w-1/2 overflow-hidden">
      <ResultsSection className="flex flex-col text-center px-14 md:py-10 py-6 justify-between items-center bg-gradient-to-b from-[#6943FF] to-[#2F2CE9] md:rounded-r-[2rem] rounded-b-[2rem] md:gap-8 gap-6">
        <h1 className="md:text-2xl text-lg text-[#CAC9FF] font-bold">
          Your Result
        </h1>
        <div className="md:size-48 size-36 rounded-full bg-gradient-to-b from-[#4D21C9] from-0% to-[#2521C9]/0 to-100% flex flex-col items-center justify-center">
          <span className="md:text-7xl text-[3.5rem] font-extrabold text-white">
            {avgScore}
          </span>
          <p className="md:text-lg font-bold text-[#CAC9FF]/50">of 100</p>
        </div>
        <div>
          <h3 className="text-white md:text-[2rem] text-2xl font-bold">
            Great
          </h3>
          <p className="font-medium text-[#CAC9FF] md:leading-6 md:text-lg md:pt-4">
            Your performance exceed 65% of the people conducting the test here!
          </p>
        </div>
      </ResultsSection>

      <SummarySection className="md:p-10 p-7">
        <h2 className="text-[#303B59] md:text-2xl text-lg font-bold">
          Summary
        </h2>
        <CategoryList className="flex flex-col gap-4 pt-6 pb-10">
          {data.map((item) => (
            <CategoryList.Item
              className="md:text-lg font-medium flex justify-between p-4 rounded-xl"
              style={{ backgroundColor: `${item.color}05` }}
              key={item.category}
            >
              <div className="flex items-center gap-3">
                <CategoryList.Item.Icon
                  src={item.icon}
                  width={20}
                  height={20}
                  alt={item.category}
                />
                <CategoryList.Item.Title style={{ color: item.color }}>
                  {item.category}
                </CategoryList.Item.Title>
              </div>
              <div className="flex font-bold gap-1 text-[#303B59]">
                <CategoryList.Item.Score>{item.score}</CategoryList.Item.Score>
                <span className="opacity-50">/</span>
                <p className="opacity-50">100</p>
              </div>
            </CategoryList.Item>
          ))}
        </CategoryList>
        <ContinueBtn className="w-full rounded-full bg-[#303B59] py-4 text-lg font-bold text-white hover:cursor-pointer hover:bg-gradient-to-b from-[#6943FF] to-[#2F2CE9]">
          Continue
        </ContinueBtn>
      </SummarySection>
    </main>
  );
}
