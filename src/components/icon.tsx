import { iconArr } from "@/utils/Icons";
import * as Icon from "lucide-react";
import { SVGProps } from "react";
interface Icon {
  IconName: string;
}

export function AppIcon({ IconName }: Icon) {
  return (
    <>
      <Icon.Soup />
    </>
  );
}
