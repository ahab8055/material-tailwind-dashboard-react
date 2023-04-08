import React from "react";
import {
  Typography,
  Card,
  CardBody,
  Button,

  CardFooter,
  avatar,
  container,
  
} from "@material-tailwind/react";
import { projectsData } from "@/data";
import { Container } from "@material-tailwind/react";
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
                   <span className="highlight" color="pink"> For creating</span> the Tournament of the respected event or organization! 
                    </p>
                    <p className="m-0">
                      By purchasing this account, special features will be
                      activated for you that you will  <span className="highlight" color="pink"> For creating</span>be amazed to see!
                    </p>
                  </div>
                </div>
                <div className="font-inter flex flex-row items-start justify-start gap-[39.82px] text-[15.54px]">
                  <Button variant="outlined" size="sm" color="red">
                    New Tournament
                  </Button>
                  <Button variant="outlined" size="sm" color="drak-blue">
                    View features
                  </Button>
                </div>
              </div>
              <div className="flex flex-row items-start justify-start">
                <img
                  className="relative h-[396.51px] w-[250px] shrink-0"
                  alt=""
                  src="/img/karate.jpg"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
      {/* <div className="mt-6 grid  gap-12 md:grid-cols-2 xl:grid-cols-3">
        {projectsData.map(
          ({ img, title, description, tag, route, members }) => (
            <Card key={title} color="transparent" shadow={false}>
              <CardBody className="py-0 px-1">
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  Tournament 
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mt-1 mb-2"
                >
                  Al-KAbir Punjab Karate League 
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  25-03-2023 | Punjab
                </Typography>
              </CardBody>
              <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                  <Button variant="outlined" size="sm">
                    Results
                  </Button>
              </CardFooter>
              
            </Card>
          )
        )}
      </div> */}
  <div className="container">
    <div className="row">
  <CardBody className="py-0 px-1 col-4">
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  Tournament 
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mt-1 mb-2"
                >
                  Al-KAbir Punjab Karate League 
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  25-03-2023 | Punjab
                </Typography>
              </CardBody>
              <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                  <Button variant="outlined" size="sm">
                    Results
                  </Button>
              </CardFooter>
              <CardBody className="py-0 px-1 col-4">
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  Tournament 
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mt-1 mb-2"
                >
                  Al-KAbir Punjab Karate League 
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  25-03-2023 | Punjab
                </Typography>
              </CardBody>
              <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                  <Button variant="outlined" size="sm">
                    Results
                  </Button>
              </CardFooter>
              <CardBody className="py-0 px-1 col-4">
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  Tournament 
                </Typography>
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="mt-1 mb-2"
                >
                  Al-KAbir Punjab Karate League 
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-500"
                >
                  25-03-2023 | Punjab
                </Typography>
              </CardBody>
              <CardFooter className="mt-6 flex items-center justify-between py-0 px-1">
                  <Button variant="outlined" size="sm">
                    Results
                  </Button>
              </CardFooter>
  </div>
    </div>
    </div>
    
  );
}

export default Home;
