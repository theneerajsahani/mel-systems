import Navbar from "@/components/Navbar"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <div className="h-[60vh] sm:h-[70vh] md:h-[75vh] lg:h-[80vh]
      min-h-[400px] md:min-h-[500px] max-h-[900px]
      flex flex-col justify-center items-start 
      px-4 sm:px-6 md:px-8 lg:px-16 
      gap-4 sm:gap-6 md:gap-8">
        <div className="flex flex-col items-start ">
            <h1>MACHINERY EXTENDED LIFE</h1>
            <p>Premium Oil Conditioning & Safety Systems for Machines That Don't Get a Second Chance. <br />We guarantee better management of the plant with relative optimization of maintenance costs and fully support environmental sustainability by significantly reducing CO2 emissions.</p>
        </div>
        <div>
            <Button >Explore our Solutions</Button>
        </div>
    </div>
  )
}