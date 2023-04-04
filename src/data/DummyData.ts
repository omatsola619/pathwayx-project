import { IconType } from "react-icons";
import { RiPenNibFill } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { BiLineChart } from "react-icons/bi";
import { TbCloudComputing } from "react-icons/tb";
import {  } from "react-icons/bs";
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
        url: '',
    },
    {
        name: 'software development',
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
]