import Image from "next/image";
import truck from "../../../../public/truck.jpg";

const Body = () => {
    
    return (
      <div> 
        <div className="w-screen md:flex items-center ">
          {/* Image container */}
          <div className="relative  rounded-full overflow-hidden">
            <Image
              src={truck}
              alt="Truck rental service"
              className=" object-cover"
              width="100vw"
              height="500px"
            />
          </div>
  
          {/* Search and input fields container */}
          <div className="w-screen rounded-md shadow-sm overflow-hidden p-5 flex flex-col justify-items-center text-center">
            {/* Search input */}
            <div className="overflow-hidden flex flex-col justify-items-center text-start rounded-xl border-2 border-gray-950 p-5">
              <span className=" py-6 ps-4">FROM</span>
              <input
                type="text"
                placeholder="Pick Up Location"
                className=" w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded-lg border border-gray-400"
              />
              <span className=" py-6 ps-4">to</span>
              <input
                type="text"
                placeholder="Drop Location"
                className=" w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 rounded-lg border border-gray-400"
              />
              <div className="flex w-full justify-end px-1">
                <button className=" p-2 px-6 mt-6  rounded-md border border-gray-950 bg-orange-600 text-white">
                  Search
                </button>
              </div>
  
         
            </div>
          </div>
        </div>
        <div className="w-screen flex justify-center ">
          <div className="w-full md:w-9/12 h-full p-4">
            <article class="text-wrap">
              <h1 className="text-xl md:text-2xl mb-6">
                <b>
                  Truck Rental – India’s most reliable, dedicated and expert
                  online Truck Transport & logistics service partner
                </b>
              </h1>
              <p className="pb-4">
                Truck Rental is one of the foremost trucking companies, delivering
                the plethora of transport services to its esteemed consumers
                across India.
              </p>
              <p className="pb-4">
                We are the “best-in-class and cost-effective transporter” as
                defined by our customers and serving this industry for many years.
                We have set high standards in every facet of transportation, and
                strive to keep raising the bar.
              </p>
              <p className="pb-4">
                With our extensive industry knowledge and skilled team, you can
                completely focus on your core interests whereas leaving the tiring
                and complex moving process on us. Time-critical? No worries –
                Truck Rental will help you!
              </p>
              <p className="pb-4">
                Our company is equipped with advanced equipment, modern tools, and
                expertise that enable us to help our consumers with crucial
                transportation and supply chain solutions.
              </p>
              <p className="pb-4">
                We ensure businesses that they will get excellent-quality, prompt,
                and secure transportation services irrespective of
                time-constraint, the heavy load issue, and any other related
                problem. Being the prime logistics services provider, we believe
                that people, technology, infrastructure and expertise all work
                together to help businesses to succeed and henceforth, we are
                offering the right blend of all these.
              </p>
              <p className="pb-4">
                We are a customer-centric firm and our every action is aimed to
                offer ease and comfort to them when it comes to booking a truck.
                Our online truck booking app has tremendously simplified the
                process of booking a truck.
              </p>
              <p className="pb-4">
                Whether you are looking for the companies of online truck booking
                Hyderabad or online truck booking Mumbai, Truck Rental would
                always be your right choice.
              </p>
            </article>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default Body;