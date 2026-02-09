
import Header from "@/ components/Header";
import SharedCard from "@/ components/Shared Card";
import {
  ArrowUpFromLine,
  ArrowDownToLine,
  Trash2,
  
} from "lucide-react";
const baseline = () => {
  return (
    <>
      <div className="grid grid-col-12 m-6  gap-4 bg-gray-700 mr-2">
        
    
        <div className="col-span-12">
          <Header/> 
          <SharedCard
            pageType="baseline"
            mainIcon="file-check"
            subIcon="upload"
            noDataText=" Upload trusted files to create baseline"
            uploadText="Click to upload files to baseline"
            title="Baseline Management"
            subTitle="create and manage your file integrity baseline"
          />
        </div>
        
        <div className="col-span-12">
          <div className="grid grid-cols-5 gap-2 ">
            <div className="col-span-2 bg-blue-500 text-amber-200 text-center text-xl p-3 border rounded-xl cursor-pointer ">
              <ArrowDownToLine className="h-8 mx-auto " />
              Export Baseline
            </div>
            <div className="col-span-2 bg-green-500 text-amber-200 text-center p-3 text-xl border rounded-xl cursor-pointer">
              <ArrowUpFromLine className="h-8 mx-auto" />
              Import Baseline
            </div>
            <div className="col-span-1 bg-red-500 text-amber-200 text-center p-3 text-xl border rounded-xl cursor-pointer">
              <Trash2 className="h-8 mx-auto" />
              Clear
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default baseline;
