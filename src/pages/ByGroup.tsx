import { useState, useEffect } from "react";
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

const ByGroup = () => {
  const [elements, setElements] = useState<Element[]>([]);
  useEffect(() => {
    FetchGroups();
  }, []);

  const FetchGroups = async () => {
    const response = await fetch("/ElementsJSON.json");
    const data = await response.json();
    if (data) {
      setElements(data);
      console.log(data);
    }
  };

  const renderGroup = (groupNumber: number) => {
    return (
      <div
        key={groupNumber}
        className="text-center w-5/6 lg:w-5/6 md:w-3/6 lg:grid gap-4 border border-white/65 p-4 rounded-2xl mx-auto"
        style={{ gridTemplateColumns: "10% 1fr" }}
      >
        <h1 className="font-bold text-white">Group {groupNumber}</h1>

        <div className="flex flex-wrap gap-4 lg:gap-0">
          {elements
            .filter((element) => element.group === groupNumber)
            .map((element) => (
              <AlertDialog key={element.atomicNumber}>
                <div className="h-48 md:w-20 md:h-20 w-full hover:scale-125 hover:translate-y-[-20px] transition-all duration-75 cursor-pointer">
                  <AlertDialogTrigger asChild>
                    <Card
                      className="p-2 h-full w-5/6 md:w-full mx-auto flex flex-col border-none"
                      style={{ backgroundColor: `#${element.cpkHexColor}` }}
                    >
                      <div className="flex justify-between text-sm">
                        <p className="md:text-[10px] md:font-bold">
                          {element.atomicNumber}
                        </p>
                        <p className="md:text-[6px]">{element.atomicMass}</p>
                      </div>

                      <div className="flex flex-col items-center gap-4 md:gap-0">
                        <CardTitle className="text-6xl md:text-2xl">
                          {element.symbol}
                        </CardTitle>
                        <CardContent>
                          <CardDescription className="text-sm md:text-[8px] text-black">
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
      </div>
    );
  };

  return (
    <>
      <section className="w-[100%]">
        <div className="flex flex-col gap-4">
          {Array.from({ length: 18 }, (_, i) => i + 1).map(renderGroup)}
        </div>
      </section>
    </>
  );
};

export default ByGroup;
