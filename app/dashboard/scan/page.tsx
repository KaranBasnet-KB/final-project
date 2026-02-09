import Header from "@/ components/Header";
import SharedCard from "@/ components/Shared Card";
const scan = () => {
  return (
    <>
      <div className="grid grid-col-12   m-6 gap-4 bg-gray-700">
        <div className="col-span-12">
          <Header />
          <SharedCard
            mainIcon="scan"
            subIcon="upload"
            pageType="scan"
            noDataText="Click to upload files for scanning"
            uploadText="Supports multiple files"
            title="scan files for changes"
            subTitle="Upload files to scan against the baseline and detect modifications"
          />
        </div>
      </div>
    </>
  );
};

export default scan;
