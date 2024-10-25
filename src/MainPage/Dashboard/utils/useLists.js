import generate from "@/assets/QR Code.png"
import scan from "@/assets/Fingerprint Scan.png"
import history from "@/assets/Activity History.png"
import setting from '@/assets/Advanced Search.png'

export const useList = [
  {
    name: "Generate",
    icon: generate,
    path: "Generate QR Code",
  },
  {
    name: "Scan",
    icon: scan,
    path: "",
  },
  {
    name: "History",
    icon: history,
    path: "History",
  },
  {
    name: "Settings",
    icon: setting,
    path: "Settings",
  },
];
