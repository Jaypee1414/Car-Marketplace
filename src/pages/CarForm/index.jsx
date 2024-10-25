import Header from "@/components/Header";
import InputField from "./components/InputField";
import carDetails from "@/shared/carDetails";
import DropdownField from "./components/DropdownField";
import UploadImage from "./components/UploadImage";
import { Separator } from "@radix-ui/react-select";
import { Checkbox } from "@/components/ui/checkbox";
import features from "@/shared/features";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { db } from "./../../../configs/index";
import { carImages, carListing } from "../../../configs/schema";
import { desc, eq } from "drizzle-orm";
import { RiLoader4Fill } from "react-icons/ri";
import { toast } from "@/hooks/use-toast";
import { useUser } from "@clerk/clerk-react";
import { useNavigate, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import CarList from "@/components/CarList";
import Service from "@/shared/Service";
function CarFrom() {
  const [carInfo, setCarInfo] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode");
  const carId = searchParams.get("id");
  const [formData, setFormData] = useState([]);
  const [feartures, setFeatures] = useState({});
  const [loader, setLoader] = useState(false);
  const [triggeredUploadImages, setTriggeredUploadImages] = useState();
  const { user } = useUser();
  const navigate = useNavigate();

  const now = new Date();
  const month = now.getMonth();
  const day = now.getDay();
  const year = now.getFullYear();

  useEffect(() => {
    if (mode === "edit") {
      getCarDetails();
    }
  }, []);

  const getCarDetails = async () => {
    const result = await db
      .select()
      .from(carListing)
      .leftJoin(carImages, eq(carListing.id, carImages.carListingId))
      .where(eq(carListing.id, carId));
    const res = Service.FormResult(result);
    setCarInfo(res[0]);
    setFeatures(res[0].features);
    setFormData(res[0]);
  };

  console.log(mode)

  const handleInput = (name, value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handlefeatures = (name, value) => {
    setFeatures((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, ":", value);
  };

  async function onSubmit(e) {
    e.preventDefault();
    console.log(formData);
    setLoader(true);
    toast({
      title: "Uploading Car Details",
      description: "Please Wait for a few seconds",
    });

    if (mode === "edit" || mode !== null){
      try {
        const result = await db
          .update(carListing)
          .set({
            ...formData,
            features: feartures,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            posted: `${month}-${day}-${year}`,
          })
          .where(eq(carListing.id, carId)) 
          .returning({ id: carListing.id });;

        if (result) {
          toast({
            title: "Succesfully Update",
            description: `successfully update car details name ${carInfo.listingTitle}`,
            className: "bg-green-100 text-green-800",
          });
          console.log(result?.[0]?.id)
          setTriggeredUploadImages(result?.[0]?.id);
          navigate("/profile");
          setLoader(false);
        }
      } catch (error) {
        toast({
          variant: "destructive",
          title: "Uploading Car Details",
          description: "Please Wait for a few seconds",
        });
        console.log("Data is not Error");
        setLoader(false);
      }
    } else {
      try {
        const result = await db
          .insert(carListing)
          .values({
            ...formData,
            features: feartures,
            createdBy: user?.primaryEmailAddress?.emailAddress,
            posted: `${month}-${day}-${year}`,
          })
          .returning({ id: carListing.id });

          console.log(result)
        if(result){
          console.log("Data is save");
          setTriggeredUploadImages(result?.[0].id);
          setLoader(false);
        }
      } catch (e) {
        toast({
          variant: "destructive",
          title: "Uploading Car Details",
          description: "Submitting Car Details Failed",
        });
        console.log("Data is not Error");
        setLoader(false);
      }
    }
  }

  return (
    <div>
      <Header />
      <div className="px-10 md:px-20 my-10">
        <h2 className="font-bold text-3xl">Add New Listing</h2>
        <form className="p-10 border rounded-md mt-10" onSubmit={onSubmit}>
          <div>
            <h2 className="font-medium text-lg mb-6">Car Details</h2>
            <div className="grid grid-cols-2 gap-5">
              {carDetails.carDetails.map((item, index) => (
                <div key={index}>
                  <label className="text-sm font-medium">
                    {item.name}
                    {item.required && (
                      <span className="text-rose-600 text-lg">*</span>
                    )}
                  </label>
                  {item.fieldType === "text" || item.fieldType === "number" ? (
                    <InputField
                      item={item}
                      handleInput={handleInput}
                      carInfo={carInfo}
                    />
                  ) : item.fieldType === "dropdown" ? (
                    <DropdownField
                      item={item}
                      carInfo={carInfo}
                      handleInput={handleInput}
                    />
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <Separator className="border mt-10 mb-10" />
          <div>
            <h2 className="font-medium text-lg mb-6">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
              {features.features.map((item, index) => (
                <div key={index}>
                  <Checkbox
                    onCheckedChange={(value) =>
                      handlefeatures(item.name, value)
                    }
                    checked={feartures?.[item.name]}
                  />{" "}
                  <label htmlFor="">{item.name}</label>
                </div>
              ))}
            </div>
          </div>
          <Separator className="border mt-10 mb-10" />
          <UploadImage
            setLoader={setLoader}
            triggeredUploadImages={triggeredUploadImages}
            carInfo={carInfo}
            mode={mode}
          />
          <div>
            <div className="mt-10 flex justify-end">
              <Button disabled={loader}>
                {loader ? <RiLoader4Fill className="animate-spin" /> : "Submit"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CarFrom;
