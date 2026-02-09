"use client"

import Link from "next/link"
import { useState } from "react"
import { usePathname } from "next/navigation"

const ButtonBar = () => {
    const [activeTab, setActiveTab] = useState('scan')
    const route = usePathname()
    console.log(route)
    return (<>
    <div className="flex gap-2 ml-4 justify-between items-center  text-gray-700 text-bold bg-gray-400 border rounded-2xl  ">
        <div className="px-2">
       <Link href="/dashboard/scan">
        <button onClick={() => setActiveTab('scan')} className={ `-pointer ${route.includes('scan') ? 'border border-amber-50 rounded-2xl bg-amber-50 px-2 py-2' : ''}`}>
            Scan
        </button>
       </Link>
        </div>
        <div className="px-2">
            <Link href="/dashboard/baseline">
            <button onClick={() => setActiveTab('baseline')} className={`cursor-pointer ${route.includes('baseline') ? 'border border-amber-50 rounded-2xl bg-amber-50 px-2 py-2' : ''}`}>
            Baseline
            </button>
            </Link>
        </div>

        <div className="px-2">
            <Link href="/dashboard/results">
             <button onClick={() => setActiveTab('results')} className={`cursor-pointer ${route.includes('results') ? 'border border-amber-50 rounded-2xl bg-amber-50 px-2 py-2' : ''}`}>
                Results
              
            </button>
            </Link>
        </div>
    </div>

    </>)
}

export default ButtonBar