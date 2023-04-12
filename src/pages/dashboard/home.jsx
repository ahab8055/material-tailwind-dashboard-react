import React from "react";
import {
  Typography,
  Card,
  CardBody,
  Button,
  CardFooter,
  TabsHeader,
  Tab,
  Tabs,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
  ArrowUpIcon,
} from "@heroicons/react/24/solid";
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
                <div className="flex flex-row items-start justify-start text-[16.51px] w-[400.19px]">
                  <div className="relative inline-block w-[400.19px] shrink-0 leading-[29.13px]">
                    <p className="m-0">
                   <span className="highlight" color="pink"> For creating</span> the Tournament of the respected event or organization! 
                    </p>
                    <p className="m-0  " >
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
                  className="relative h-[396.51px] w-[500px] shrink-0 border-solid border-2 border-black-600 scale-75 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-80 hover:bg-indigo-200 duration-300 rounded-lg" 
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
      <div className="container flex">
  <div className="item" >
    <CardBody color="pink" shadow={true} className="py-0 px-1" >
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
              </CardFooter></div>
  <div className="item"><CardBody className="py-0 px-1">
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
              </CardFooter></div>
  <div className="item"><CardBody className="py-0 px-1">
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
              </CardFooter></div>
</div>
{/* <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1  inline-block h-5 w-5" />
                    App
                    desc: `It really matters and then like it really doesn't matter.
      What matters `,
                  </Tab>
                  
                  <Tab value="message">
                    <ChatBubbleLeftEllipsisIcon className="-mt-0.5 mr-2 inline-block h-5 w-5" />
                    Message
                  </Tab>
                  <Tab value="settings">
                    <Cog6ToothIcon className="-mt-1 mr-2 inline-block h-5 w-5" />
                    Settings
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div> */}


            
  </div>





  );
  }
export default Home;