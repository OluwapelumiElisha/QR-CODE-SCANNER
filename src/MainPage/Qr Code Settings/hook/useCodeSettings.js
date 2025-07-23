import { toast } from "@/hooks/use-toast";
import { publicRequest, UserRequest } from "@/Shared/API/Request";
import { useCurrentUser } from "@/Shared/hook/useCurrentUser";
import { useEffect, useState } from "react";

export const useCodeSettings = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const [selectedQrNumber, setSelectedQrNumber] = useState("");
  const [response2, setResponse2] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);
  const [loadingUnblock, setLoadingUnblock] = useState(null);
  const [loadingBlock, setLoadingBlock] = useState(null);
  const [loadingDelete, setLoadingDelete] = useState(null);
  const { currentUser } = useCurrentUser();
  const handlePopUpHistory = async (qrNumber) => {
    // alert(qrNumber)
    setLoading(qrNumber);
    setSelectedQrNumber(qrNumber);
    try {
      const res = await publicRequest.get(`api/v1/history/${qrNumber}`);
      console.log(res);
      setResponse2(res?.data);
      toast({
        title: qrNumber,
        description: res?.data?.message,
      });
      setIsPopUpVisible(true);
    } catch (error) {
      console.log(error);
      toast({
        title: "Error ❌❌❌",
        description: error?.response?.data?.message,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleBlockQrCode = async (qrNumber) => {
    setLoadingBlock(qrNumber);
    try {
      const res = await UserRequest().post("/api/v1/block", {
        qrNumber: qrNumber,
      });
      console.log(res);
      toast({
        title: "✅✅✅",
        description: res?.data?.message,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "❌❌❌",
        description: error?.response?.data?.error,
      });
    } finally {
      setLoadingBlock(false);
    }
  };

  const handleUnblockQrCode = async (qrNumber) => {
    setLoadingUnblock(qrNumber);
    try {
      const res = await UserRequest().post("/api/v1/unblock", {
        qrNumber: qrNumber,
      });
      console.log(res);
      toast({
        title: "✅✅✅",
        description: res?.data?.message,
      });
    } catch (error) {
      console.log(error);

      toast({
        title: "❌❌❌",
        description: error?.response?.data?.error,
      });
    } finally {
      setLoadingUnblock(false);
    }
  };

  const handleDeleteQrCode = async (qrNumber) => {
    setLoadingDelete(qrNumber);
    try {
      if (currentUser?.data?.isAmin) {
        const res = await UserRequest().delete(`/api/v1/delete/${qrNumber}`);
        console.log(res);
        toast({
          title: "✅✅✅",
          description: res?.data?.message,
        });

        const stored = localStorage.getItem("QrCodeHistory");
        if (stored) {
          const parsed = JSON.parse(stored);
          const updated = parsed.filter((item) => item.qrNumber !== qrNumber);
          localStorage.setItem("QrCodeHistory", JSON.stringify(updated));
        }
      } else {
        toast({
          title: "❌❌❌",
          description: "Access denied. Admins only!",
        });
      }
    } catch (error) {
      console.log(error);

      toast({
        title: "❌❌❌",
        description: error?.response?.data?.error,
      });
    } finally {
      setLoadingDelete(false);
    }
  };

  const handleClosePopUp = () => {
    setIsPopUpVisible(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return {
    handlePopUpHistory,
    handleBlockQrCode,
    handleUnblockQrCode,
    handleDeleteQrCode,
    handleClosePopUp,
    isPopUpVisible,
    selectedQrNumber,
    response2,
    handleSearchChange,
    searchTerm,
    loading,
    loadingUnblock,
    loadingBlock,
    loadingDelete,
  };
};
