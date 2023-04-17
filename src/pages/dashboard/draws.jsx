import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Tooltip,
  Select,
  Option,
  IconButton,
  Input,
  Button
} from "@material-tailwind/react";
import {
  EyeIcon,
  PencilSquareIcon,
  PlayCircleIcon,
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
  PrinterIcon,
  DocumentTextIcon,
  CheckIcon,
  XMarkIcon
} from "@heroicons/react/24/outline";
import { projectsTableData } from "@/data";


export function Draws() {
  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-3">
          <CardHeader
            floated={false}
            shadow={false}
            color="transparent"
            className="m-0 flex items-center justify-start gap-10 p-6"
          >
            <div>
              <Typography variant="h6" color="blue-gray" className="mb-1">
                Draws
              </Typography>
              {/* <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <strong>30 Tournaments</strong>
              </Typography> */}
            </div>
            <div className="md:w-74 mr-auto md:mr-0">
              <Input
                type="text"
                label="Search Tournament"
                icon={<MagnifyingGlassIcon />}
              />
            </div>
            <div className="mr-auto md:mr-0 md:w-56 flex flex-col w-72 gap-6">
              <Select label="Select  Gender" className="" variant="static">
                <Option>Male</Option>
                <Option>Female</Option>
              </Select>
            </div>
            
            <div className="mr-auto md:mr-4 md:w-56">
              <Select label="Select Type">
                <Option>Kumite</Option>
                <Option>Kata</Option>
              </Select>
            </div>
            <div className="mr-auto md:mr-4 md:w-56 text-end">
              <Button variant="gradient" size="sm"> Add Draw</Button>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pb-2 ">
            <table className="w-full min-w-[640px] table-auto ">
              <thead >
                <tr>
                  {["weight category", "number of players", "action"].map(
                    (el) => (
                      <th
                        key={el}
                        className="border-b border-blue-gray-50 py-3 px-6 text-left"
                      >
                        <Typography
                          variant="small"
                          className="text-[11px] font-medium uppercase text-blue-gray-400"
                        >
                          {el}
                        </Typography>
                      </th>
                    )
                  )}
                </tr>
              </thead>
              <tbody >

                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 $
                    {amna},
                    {kahlid}{
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            {/* <Avatar src={img} alt={name} size="sm" /> */}
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                            <div className="mr-auto md:mr-0 md:w-56 flex flex-col w-72 gap-6">
              <Select  className="">
                <Option>-50KG</Option>
                <Option>-55KG</Option>
                <Option>-60KG</Option>
                <Option>-67KG</Option>
                <Option>-75KG</Option>
                <Option>-84KG</Option>
                <Option>+84KG</Option>
              </Select>
            </div>
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            <div className="mr-auto md:mr-0 md:w-56 flex flex-col w-72 gap-3">
              <Select  className="">
                <Option>5</Option>
                <Option>6</Option>
                <Option>7</Option>
                <Option>8</Option>
                <Option>9</Option>
                <Option>10</Option>
                <Option>11</Option>
                <Option>12</Option>
                <Option>13</Option>
                <Option>14</Option>
                <Option>15</Option>
                <Option>16</Option>
              </Select>
            </div>
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="flex w-10/12 gap-2">
                            <IconButton variant="text">
                              <DocumentTextIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                            <IconButton variant="text">
                              <PencilSquareIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                            <IconButton variant="text">
                              <PrinterIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
                <tr>
                  <td className="border-b border-blue-gray-50 py-3 px-5">
                    <div className="flex items-center gap-4">
                      <Input label="Weight Category" variant="standard" />
                    </div>
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5">
                    <Input label="Number of Players" variant="standard" />
                  </td>
                  <td className="border-b border-blue-gray-50 py-3 px-5">
                    <div className="flex w-10/12 gap-2">
                      <IconButton variant="text">
                        <CheckIcon className="h-5 w-5 text-inherit" />
                      </IconButton>
                      <IconButton variant="text">
                        <XMarkIcon className="h-5 w-5 text-inherit" />
                      </IconButton>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      
  <div>
  
  </div>
  
    </div>
  );
}

export default Draws;
