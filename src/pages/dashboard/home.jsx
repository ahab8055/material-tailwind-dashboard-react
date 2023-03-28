import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Tooltip,
  Progress,
  Button,
  CardFooter,
} from "@material-tailwind/react";
import {
  ClockIcon,
  CheckIcon,
  EllipsisVerticalIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/outline";
import { StatisticsCard } from "@/widgets/cards";
import { StatisticsChart } from "@/widgets/charts";
import {
  statisticsCardsData,
  statisticsChartsData,
  projectsTableData,
  ordersOverviewData,
  projectsData,
} from "@/data";

export function Home() {
  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <Card className="overflow-hidden xl:col-span-3">
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <div className="bg-darkslategray-200 flex flex-row items-center justify-start gap-[14px] rounded-[28px] py-[13px] px-[33px] text-[32px]">
              <div className="flex flex-col items-start justify-start gap-[39.82px]">
                <div className="flex flex-row items-start justify-start">
                  <b className="relative [background:linear-gradient(90.58deg,_#fff,_#dbe6ff)] [-webkit-background-clip:text]">
                    Create New Tournaments
                  </b>
                </div>
                <div className="flex flex-row items-start justify-start text-[16.51px]">
                  <div className="relative inline-block w-[566.19px] shrink-0 leading-[29.13px]">
                    <p className="m-0">
                      With a special premium account, you can do very
                      interesting things!
                    </p>
                    <p className="m-0">
                      By purchasing this account, special features will be
                      activated for you that you will be amazed to see!
                    </p>
                  </div>
                </div>
                <div className="font-inter flex flex-row items-start justify-start gap-[39.82px] text-[15.54px]">
                  <Button variant="outlined" size="sm">
                    New Tournament
                  </Button>
                  <Button variant="outlined" size="sm">
                    View features
                  </Button>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <img
                  className="relative h-[396.51px] w-[411.35px] shrink-0"
                  alt=""
                  src="/img/dashboard.png"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map(
          ({ img, title, description, tag, route, members }) => (
            <Card key={title} color="transparent" shadow={false}>
              <CardHeader
                floated={false}
                color="gray"
                className="mx-0 mt-0 mb-4 h-64 xl:h-40"
              >
                <img
                  src={img}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </CardHeader>
              <CardBody className="py-0 px-1">
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  {tag}
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mt-1 mb-2"
                >
                  {title}
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  {description}
                </Typography>
              </CardBody>
              <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                  <Button variant="outlined" size="sm">
                    view project
                  </Button>
                <div>
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
                </div>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </div>
  );
}

export default Home;
