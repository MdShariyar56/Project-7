import Container from "../Container/Container";

const Box = ({ inProgress, resolved }) => {
  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[20px] my-[50px]">
        {/* In-Progress Box */}
        <div className="relative rounded-md p-4 sm:p-7 text-white h-[160px] sm:h-[200px] bg-gradient-to-r from-[#632ee3cc] to-[#9f62f2cc] flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/d4CpyZYg/vector1.png"
            alt="left"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[160px] sm:h-[210px] object-contain"
          />

          <div className="z-10 text-center">
            <h1 className="text-lg sm:text-xl">In-Progress</h1>
            <h1 className="text-2xl sm:text-4xl font-bold">{inProgress}</h1>
          </div>

          <img
            src="https://i.ibb.co.com/d4CpyZYg/vector1.png"
            alt="right"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[160px] sm:h-[210px] object-contain scale-x-[-1]"
          />
        </div>

        {/* Resolved Box */}
        <div className="relative rounded-md p-4 sm:p-7 text-white h-[160px] sm:h-[200px] bg-[linear-gradient(90deg,#54CF67,#00827A)] flex items-center justify-center">
          <img
            src="https://i.ibb.co.com/d4CpyZYg/vector1.png"
            alt="left"
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[160px] sm:h-[210px] object-contain"
          />

          <div className="z-10 text-center">
            <h1 className="text-lg sm:text-xl">Resolved</h1>
            <h1 className="text-2xl sm:text-4xl font-bold">{resolved}</h1>
          </div>

          <img
            src="https://i.ibb.co.com/d4CpyZYg/vector1.png"
            alt="right"
            className="absolute right-0 top-1/2 -translate-y-1/2 h-[160px] sm:h-[210px] object-contain scale-x-[-1]"
          />
        </div>
      </div>
    </Container>
  );
};

export default Box;
