import { IconType } from "react-icons";
import { RiPenNibFill } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { BiLineChart, BiShieldQuarter } from "react-icons/bi";
import { TbCloudComputing } from "react-icons/tb";
import { GiVintageRobot } from "react-icons/gi";
import {  } from "react-icons/bs";
import {  } from "react-icons/bs";


export interface DataType {
    name: string;
    icon: IconType;
    url: string;
    cat: any;
}

export const DATA: DataType[] = [
    {
        name: 'design',
        icon: RiPenNibFill,
        url: 'design',
        cat: [
            {
                name: 'user interface',
                icon: RiPenNibFill,
                url: ''
            },
            {
                name: 'user exeperience',
                icon: RiPenNibFill,
                url: ''
            }
        ]
    },
    {
        name: 'software dev',
        icon: BsCodeSlash,
        url: '',
        cat: []
    },
    {
        name: 'data science',
        icon: BiLineChart,
        url: '',
        cat: []
    },
    {
        name: 'cloud computing',
        icon: TbCloudComputing,
        url: '',
        cat: []
    },
    {
        name: 'robotics',
        icon: GiVintageRobot,
        url: '',
        cat: []
    },
    {
        name: 'cyber security',
        icon: BiShieldQuarter,
        url: '',
        cat: []
    },
]