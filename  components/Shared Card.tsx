import ButtonBar from "@/ components/ButtonBar";
import { TriangleAlertIcon } from "lucide-react";
import { DynamicIcon } from 'lucide-react/dynamic';


const SharedCard = ({title, subTitle, uploadText, noDataText, mainIcon, pageType, subIcon}) => {
    return (
        <>
       <div className="grid grid-cols-12">
         <div className="col-span-4 mb-6 h-10 ">
          <ButtonBar />
        </div>
        <div className="col-span-12 mx-4">
          <div className="flex gap-2 mb-2 mt-1">
            <DynamicIcon name={mainIcon} />
            <div>{title}</div>
          </div>
          <div className="text-gray-400">
            { subTitle }
          </div>
        </div>
        <div className="col-span-12 border rounded mx-4 flex justify-center ">
          <div className="p-5 text-center cursor-pointer">
            <DynamicIcon  size="100" name={subIcon} className="h-10 mt-4 mx-auto"></DynamicIcon>
            <div className={ `mt-3 ${pageType !== 'baseline' ? 'text-gray-400' : ''}`}>{ uploadText}</div>
            <div className="mt-3 mr-2 text-gray-400">
              {noDataText}
            </div>
          </div>
        </div>
        {pageType === 'scan' && (<div className="col-span-12">
          <div className="flex  mt-2 border rounded bg-yellow-600/10 border-amber-300 mx-4">
            <div className="mx-10 text-yellow-200   flex gap-2 p-2 ">
              <TriangleAlertIcon />
              <div className="mt-0.5">
                <span>please create a baseline before scanning files</span>
              </div>
            </div>
          </div>
        </div>)}
       
       </div>

        </>
    )
}

export default SharedCard