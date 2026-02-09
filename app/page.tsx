import ButtonBar from "@/ components/ButtonBar";
import {
  ArrowUpFromLine,
  ArrowDownToLine,
  Trash2,
  FileCheck,
} from "lucide-react";
const baseline = () => {
  return (
    <>
      <div className="grid grid-col-12 m-6  gap-4 bg-gray-700 mr-2">
        <div className="col-span-12 flex justify-between  items-center ">
          <div className=" text-white bg-gray-700 p-5 ">
            <div className="flex  items-center gap-2 ">
              <div className="border rounded bg-amber-50  text-black ">
                <img className="h-12 w-12" src="/logo.png" />
              </div>
              <div className="bg-gray-700 text-white shadow ">
                <div className="text-2xl">File Integrity Monitor</div>
                <div className="flex   text-gray-400">
                  Hash-based malware detection and integrity verification
                </div>
              </div>
            </div>
          </div>
          <div className="flex items-center  border  p-2 m-2 rounded-2xl text-blue-300 shadow">
            0 Files in Bseline
          </div>
        </div>
        <div className="col-span-4 ">
          <ButtonBar />
        </div>
        <div className="col-span-12 mx-4">
          <div className="flex gap-2 mb-2">
            <FileCheck />

            <span>Baseline Management</span>
          </div>

          <div className="text-gray-400">
            Create and manage your file integrity baseline
          </div>
        </div>
        <div className="col-span-12 border rounded m-4 flex justify-center ">
          <div className="p-5 text-center cursor-pointer">
            <img className="mx-auto" src="/Image.png" alt="asc" />
            <div className="mt-6 ">Click to upload files to baseline</div>
            <div className="mt-3 text-gray-400">
              Upload trusted files to create baseline
            </div>
          </div>
        </div>
        <div className="col-span-12">
          <div className="grid grid-cols-5 gap-2 m-4">
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
