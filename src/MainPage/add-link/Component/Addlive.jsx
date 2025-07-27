import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { publicRequest, UserRequest } from "@/Shared/API/Request";
import React, { useState } from "react";

const Addlive = () => {
  const [liveUrl, setLiveUrl] = useState("");
  const [isLoading, setIsLoading] = useState();
  const handleAddLink = async () => {
    setIsLoading(true);
    const data = {
      newLiveUrl: liveUrl,
    };
    console.log(data);

    try {
      const res = await UserRequest().post("api/v1/update-live-link", data);
      // console.log(res);
      toast({
        title: "✔️✔️✔️",
        description: res?.data?.message,
      });
    } catch (error) {
      console.log(error);
      toast({
        title: "❌❌❌",
        description: res?.data?.message,
      });
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="h-screen bg-gray-800">
      <div className="w-[60%] m-auto p-4">
        <div>
          <input
            type="text"
            placeholder="Enter live stream URL"
            className="mt-48 w-full focus:outline-none rounded-md px-2 py-2"
            value={liveUrl}
            onChange={(e) => setLiveUrl(e.target.value)}
          />{" "}
          <br />
          <div className="flex justify-center items-center">
            <Button className="mt-4" onClick={handleAddLink}>
              {isLoading ? "Adding..." : "Add Link"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addlive;
