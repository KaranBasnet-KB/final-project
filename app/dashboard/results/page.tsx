import Header from "@/ components/Header";
import SharedCard from "@/ components/Shared Card";

const results = () => {
  return (
    <>
      <div className="grid grid-col-12  m-6 gap-4 bg-gray-700">
        <div className="col-span-12">
          <Header />
          <SharedCard
            pageType="results"
            subIcon="scan"
            uploadText=" No scan results yet"
            noDataText="Upload files in the scan tab to begin "
            title=" Scan results"
            subTitle="Detailed results from last scan"
            mainIcon="book-open"
          />
        </div>
      </div>
    </>
  );
};

export default results;
