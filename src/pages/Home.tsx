import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useEffect, useState } from "react";
import ScrollToTop from "@/components/ScrollToTop";

interface Element {
  name: string;
  symbol: string;
  atomicNumber: number;
  atomicMass: number;
  cpkHexColor: string;
  electronicConfiguration: string;
  electronegativity: string;
  yearDiscovered: number;
  group: number;
  period: number;
  atomicRadius: number;
}

const Home = () => {
  const [elements, setElements] = useState<Element[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  useEffect(() => {
    fetchElements();
  }, []);

  const fetchElements = async () => {
    setLoading(true);
    const response = await fetch("/ElementsJSON.json");
    const data = await response.json();
    if (data) {
      setElements(data);
      setLoading(false);
    }
  };

  // Separate lanthanide elements (atomic numbers 57 to 71)
  const lanthanides = elements.filter(
    (element) => element.atomicNumber >= 58 && element.atomicNumber <= 71
  );

  const actinides = elements.filter(
    (element) => element.atomicNumber >= 90 && element.atomicNumber <= 103
  );

  // Filter other elements excluding lanthanides
  const mainElements = elements.filter(
    (element) =>
      element.atomicNumber < 58 ||
      (element.atomicNumber > 71 && element.atomicNumber < 90) ||
      element.atomicNumber > 103
  );

  return (
    <>
      <main className="flex gap-4 flex-col">
        <h1 className="text-center font-bold text-white">
          Periodic Table of Elements
        </h1>
        <section className="z-50">
          <div className="flex flex-col place-content-center lg:grid lg:grid-cols-18 lg:grid-rows-7 gap-4 lg:gap-0">
            {loading ? (
              <section className="w-full flex place-content-center">
                <div className="w-full h-48 flex place-content-center items-center">
                  <h1 className="text-white text-3xl font-mono">
                    Fetching Elements...
                  </h1>
                </div>
              </section>
            ) : (
              /*MAIN ELEMENTS w/o lanthanides and actinides*/
              mainElements.map((element) => (
                <AlertDialog key={element.atomicNumber}>
                  <div
                    className="h-48 lg:w-20 lg:h-20 w-full hover:scale-125 hover:translate-y-[-20px] transition-all duration-75 cursor-pointer"
                    style={{
                      gridColumn: element.group,
                      gridRow: element.period,
                    }}
                  >
                    <AlertDialogTrigger asChild>
                      <Card
                        className="p-2 h-full w-5/6 lg:w-full mx-auto flex flex-col border-none"
                        style={{ backgroundColor: `#${element.cpkHexColor}` }}
                      >
                        <div className="flex justify-between text-sm">
                          <p className="lg:text-[10px] lg:font-bold">
                            {element.atomicNumber}
                          </p>
                          <p className="lg:text-[6px]">{element.atomicMass}</p>
                        </div>

                        <div className="flex flex-col items-center gap-4 lg:gap-0">
                          <CardTitle className="text-6xl lg:text-2xl ">
                            {element.symbol}
                          </CardTitle>
                          <CardContent>
                            <CardDescription className="text-sm lg:text-[8px] text-accent">
                              {element.name}
                            </CardDescription>
                          </CardContent>
                        </div>
                      </Card>
                    </AlertDialogTrigger>
                  </div>
                  <AlertDialogContent>
                    <AlertDialogHeader>
                      <AlertDialogTitle className="flex gap-2">
                        <p className="text-gray-600 font-mono">
                          {element.atomicNumber}
                        </p>{" "}
                        | {element.name} ({element.symbol})
                      </AlertDialogTitle>
                      <AlertDialogDescription>
                        <div>Year Discovered: {element.yearDiscovered}</div>
                        <div>Atomic Number: {element.atomicNumber}</div>
                        <div>Atomic Mass: {element.atomicMass}</div>
                        <div>Atomic Radius: {element.atomicRadius}</div>
                        <div>
                          Electronic Configuration:{" "}
                          {element.electronicConfiguration}
                        </div>
                        <div>
                          Electronegativity: {element.electronegativity}
                        </div>
                        <div>Group: {element.group}</div>
                        <div>Period: {element.period}</div>
                      </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                      <AlertDialogAction>Exit</AlertDialogAction>
                    </AlertDialogFooter>
                  </AlertDialogContent>
                </AlertDialog>
              ))
            )}
          </div>

          <section className="flex flex-col gap-4 lg:gap-0">
            {/* Separate div for Lanthanides (Atomic Numbers 57 to 71) */}
            <div className="flex flex-col lg:flex-row lg:h-20 justify-center mt-4 gap-4 lg:gap-0">
              {lanthanides.map((element) => (
                <AlertDialog key={element.atomicNumber}>
                  <div className="h-48 lg:w-20 lg:h-20 w-full hover:scale-125 hover:translate-y-[-20px] transition-all duration-75 cursor-pointer">
                    <AlertDialogTrigger asChild>
                      <Card
                        className="p-2 h-full w-5/6 lg:w-full mx-auto flex flex-col border-none"
                        style={{ backgroundColor: `#${element.cpkHexColor}` }}
                      >
                        <div className="flex justify-between text-sm">
                          <p className="lg:text-[10px] lg:font-bold">
                            {element.atomicNumber}
                          </p>
                          <p className="lg:text-[6px]">{element.atomicMass}</p>
                        </div>

                        <div className="flex flex-col items-center gap-4 lg:gap-0">
                          <CardTitle className="text-6xl lg:text-2xl">
                            {element.symbol}
                          </CardTitle>
                          <CardContent>
                            <CardDescription className="text-sm lg:text-[8px] text-black">
                              {element.name}
                            </CardDescription>
                          </CardContent>
                        </div>
                      </Card>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {element.name} ({element.symbol})
                        </AlertDialogTitle>
                      </AlertDialogHeader>

                      <div>
                        <div>Year Discovered: {element.yearDiscovered}</div>
                        <div>Atomic Number: {element.atomicNumber}</div>
                        <div>Atomic Mass: {element.atomicMass}</div>
                        <div>Atomic Radius: {element.atomicRadius}</div>
                        <div>
                          Electronic Configuration:{" "}
                          {element.electronicConfiguration}
                        </div>
                        <div>
                          Electronegativity: {element.electronegativity}
                        </div>
                        <div>Group: {element.group}</div>
                        <div>Period: {element.period}</div>
                      </div>

                      <AlertDialogFooter>
                        <AlertDialogAction>Close</AlertDialogAction>
                      </AlertDialogFooter>
                      
                    </AlertDialogContent>
                  </div>
                </AlertDialog>
              ))}
            </div>

            {/* Separate div for Actinides (Atomic Numbers 89 to 103) */}
            <div className="flex flex-col lg:flex-row lg:h-20 justify-center gap-4 lg:gap-0">
              {actinides.map((element) => (
                <AlertDialog key={element.atomicNumber}>
                  <div className="h-48 lg:w-20 lg:h-20 w-full hover:scale-125 hover:translate-y-[-20px] transition-all duration-75 cursor-pointer">
                    <AlertDialogTrigger asChild>
                      <Card
                        className="p-2 h-full w-5/6 lg:w-full mx-auto flex flex-col border-none"
                        style={{ backgroundColor: `#${element.cpkHexColor}` }}
                      >
                        <div className="flex justify-between text-sm">
                          <p className="lg:text-[10px] lg:font-bold">
                            {element.atomicNumber}
                          </p>
                          <p className="lg:text-[6px]">{element.atomicMass}</p>
                        </div>

                        <div className="flex flex-col items-center gap-4 lg:gap-0">
                          <CardTitle className="text-6xl lg:text-2xl">
                            {element.symbol}
                          </CardTitle>
                          <CardContent>
                            <CardDescription className="text-sm lg:text-[8px] text-black">
                              {element.name}
                            </CardDescription>
                          </CardContent>
                        </div>
                      </Card>
                    </AlertDialogTrigger>

                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>
                          {element.name} ({element.symbol})
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          <div>Year Discovered: {element.yearDiscovered}</div>
                          <div>Atomic Number: {element.atomicNumber}</div>
                          <div>Atomic Mass: {element.atomicMass}</div>
                          <div>Atomic Radius: {element.atomicRadius}</div>
                          <div>
                            Electronic Configuration:{" "}
                            {element.electronicConfiguration}
                          </div>
                          <div>
                            Electronegativity: {element.electronegativity}
                          </div>
                          <div>Group: {element.group}</div>
                          <div>Period: {element.period}</div>
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogAction>Close</AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </div>
                </AlertDialog>
              ))}
            </div>
          </section>

          <ScrollToTop />
        </section>
      </main>
    </>
  );
};

export default Home;
