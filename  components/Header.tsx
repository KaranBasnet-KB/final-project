const Header = () => {
    return (
        <>
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
        </>
    )

}
export default Header