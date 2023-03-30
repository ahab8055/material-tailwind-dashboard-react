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
  XMarkIcon,
  TrashIcon
} from "@heroicons/react/24/outline";
import { projectsTableData } from "@/data";

export function Player() {
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
                Players
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
                label="Search Player"
                icon={<MagnifyingGlassIcon />}
              />
            </div>
            <div className="mr-auto md:mr-4 md:w-56 object-right">
              <Button variant="gradient" size="sm"> Add Player</Button>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["player id", "player name","matches","gender", "action"].map(
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
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              00-02002-0333
                            </Typography>
                          </div>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            Hamza
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            20
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            Male
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
                              <TrashIcon className="h-5 w-5 text-inherit" />
                            </IconButton>
                          </div>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}

export default Player;
