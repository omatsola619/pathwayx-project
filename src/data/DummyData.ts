import { IconType } from "react-icons";
import { RiPenNibFill } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { BiLineChart, BiShieldQuarter } from "react-icons/bi";
import { TbCloudComputing } from "react-icons/tb";
import { GiVintageRobot } from "react-icons/gi";
import {  } from "react-icons/bs";
import {  } from "react-icons/bs";
import {  } from "react-icons/bs";

export interface DataType {
    name: string;
    icon: IconType;
    url: string;
}

export const DATA: DataType[] = [
    {
        name: 'design',
        icon: RiPenNibFill,
        url: 'design',
    },
    {
        name: 'software dev',
        icon: BsCodeSlash,
        url: '',
    },
    {
        name: 'data science',
        icon: BiLineChart,
        url: '',
    },
    {
        name: 'cloud computing',
        icon: TbCloudComputing,
        url: '',
    },
    {
        name: 'robotics',
        icon: GiVintageRobot,
        url: '',
    },
    {
        name: 'cyber security',
        icon: BiShieldQuarter,
        url: '',
    },
]