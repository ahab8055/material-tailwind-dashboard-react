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
  IconButton
} from "@material-tailwind/react";
import {
  EyeIcon,
  PencilSquareIcon,
  PlayCircleIcon
} from "@heroicons/react/24/outline";
import { projectsTableData } from "@/data";

export function Scoreboard() {
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
                Scoreboard
              </Typography>
              <Typography
                variant="small"
                className="flex items-center gap-1 font-normal text-blue-gray-600"
              >
                <strong>30 matches</strong>
              </Typography>
            </div>
            <div className="mr-auto md:mr-0 md:w-56">
              <Select
                label="Select Category"
                className="">
                <Option>Male</Option>
                <Option>Female</Option>
              </Select>
            </div>
            <div className="mr-auto md:mr-4 md:w-56">
              <Select label="Select Fight Style">
                <Option>Kumite</Option>
                <Option>Kata</Option>
              </Select>
            </div>
            {/* <Menu placement="left-start">
              <MenuHandler>
                <IconButton size="sm" variant="text" color="blue-gray">
                  <EllipsisVerticalIcon
                    strokeWidth={3}
                    fill="currenColor"
                    className="h-6 w-6"
                  />
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem>Action</MenuItem>
                <MenuItem>Another Action</MenuItem>
                <MenuItem>Something else here</MenuItem>
              </MenuList>
            </Menu> */}
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["weights", "players", "created date", "action"].map(
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
              <tbody>
                {projectsTableData.map(
                  ({ name, members }, key) => {
                    const className = `py-3 px-5 ${
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
                              - 60 kg
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-2.5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            24/04/2023
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="flex w-10/12 gap-2">
                            <IconButton variant="text">
                              <EyeIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                            <IconButton variant="text">
                              <PencilSquareIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                            <IconButton variant="text">
                              <PlayCircleIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            {/* </table><tbody>
                {projectsTableData.map(
                  ({ img, name, members, budget, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={name}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            {/* <Avatar src={img} alt={name} size="sm" /> */}
                            {/* <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              - 60 kg
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          {members.map(({ img, name }, key) => (
                            <Tooltip key={name} content={name}>
                              <Avatar
                                src={img}
                                alt={name}
                                size="xs"
                                variant="circular"
                                className={`cursor-pointer border-2 border-white ${
                                  key === 0 ? "" : "-ml-5"
                                }`}
                              />
                            </Tooltip>
                          ))}
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            className="text-xs font-medium text-blue-gray-600"
                          >
                            24/04/2023
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="flex w-10/12 gap-2">
                            <IconButton variant="text">
                              <EyeIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                            <IconButton variant="text">
                              <PencilSquareIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                            <IconButton variant="text">
                              <PlayCircleIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody> */}
            </table> 
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Scoreboard;
