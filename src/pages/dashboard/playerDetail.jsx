import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Avatar,
  Typography,
  Tabs,
  TabsHeader,
  Tab,
  Tooltip,
  Button,
} from "@material-tailwind/react";
import {
  HomeIcon,
  ChatBubbleLeftEllipsisIcon,
  Cog6ToothIcon,
  PencilIcon,
} from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import { ProfileInfoCard } from "../../widgets/cards";
import { projectsData, ordersOverviewData } from "../../data";

export function PlayerDetail() {
  return (
    <>
      <div className="relative mt-8 h-72 w-full overflow-hidden rounded-xl bg-[url(https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80)] bg-cover	bg-center">
        <div className="absolute inset-0 h-full w-full bg-blue-500/50" />
      </div>
      <Card className="mx-3 -mt-16 mb-6 lg:mx-4">
        <CardBody className="p-4">
          <div className="mb-10 flex items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <Avatar
                src="/img/bruce-mars.jpeg"
                alt="bruce-mars"
                size="xl"
                className="rounded-lg shadow-lg shadow-blue-gray-500/40"
              />
              <div>
                <Typography variant="h5" color="blue-gray" className="mb-1">
                  Hamza
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-blue-gray-600"
                >
                  PUNJAB
                </Typography>
              </div>
            </div>
            <div className="w-96">
              <Tabs value="app">
                <TabsHeader>
                  <Tab value="app">
                    <HomeIcon className="-mt-1  inline-block h-5 w-5" />
                    App
                    
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
            </div>
          </div>
          <div className="gird-cols-1 mb-12 grid gap-12 px-4 lg:grid-cols-2 xl:grid-cols-3">
            {/* <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <div className="flex flex-col gap-12">
                {platformSettingsData.map(({ title, options }) => (
                  <div key={title}>
                    <Typography className="mb-4 block text-xs font-semibold uppercase text-blue-gray-500">
                      {title}
                    </Typography>
                    <div className="flex flex-col gap-6">
                      {options.map(({ checked, label }) => (
                        <Switch
                          key={label}
                          id={label}
                          label={label}
                          defaultChecked={checked}
                          labelProps={{
                            className: "text-sm font-normal text-blue-gray-500",
                          }}
                        />
                      ))}
                    </div>
                  </div> */}
                {/* ))}
              </div>
            </div> */}
            <ProfileInfoCard
              title="Profile Information"
              description="Hi, I'm Alec Thompson, Decisions: If you can't decide, the answer is no. If two equally difficult paths, choose the one more painful in the short term (pain avoidance is creating an illusion of equality)."
              details={{
                "first name": "Amna Khalid",
                mobile: "03454886789",
                email: "amna@gmail.com",
                Address: "tajpura road",
                // social: (
                //   <div className="flex items-center gap-4">
                //     <i className="fa-brands fa-facebook text-blue-700" />
                //     <i className="fa-brands fa-twitter text-blue-400" />
                //     <i className="fa-brands fa-instagram text-purple-500" />
                //   </div>
                // ),
              }}
              action={
                <Tooltip content="Edit Profile">
                  <PencilIcon className="h-4 w-4 cursor-pointer text-blue-gray-500" />
                </Tooltip>
              }
            />
            {/* <div>
              <Typography variant="h6" color="blue-gray" className="mb-3">
                Platform Settings
              </Typography>
              <ul className="flex flex-col gap-6">
                {conversationsData.map((props) => (
                  <MessageCard
                    key={props.name}
                    {...props}
                    action={
                      <Button variant="text" size="sm">
                        reply
                      </Button>
                    }
                  />
                ))}
              </ul>
            </div> */}
            <Card>
              <CardHeader
                floated={false}
                shadow={false}
                color="transparent"
                className="m-0 p-6"
              >
                <Typography variant="h6" color="blue-gray" className="mb-2">
                  Recent Matches
                </Typography>
              </CardHeader>
              <CardBody className="pt-0">
                {ordersOverviewData.map(
                  ({ icon, color, title, description }, key) => (
                    <div key={title} className="flex items-start gap-4 py-3">
                      <div
                        className={`relative p-1 after:absolute after:-bottom-6 after:left-2/4 after:w-0.5 after:-translate-x-2/4 after:bg-blue-gray-50 after:content-[''] ${
                          key === ordersOverviewData.length - 1
                            ? "after:h-0"
                            : "after:h-4/6"
                        }`}
                      >
                        {React.createElement(icon, {
                          className: `!w-5 !h-5 ${color}`,
                        })}
                      </div>
                      <div>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="block font-medium"
                        >
                          Against Player 2 (Won)
                        </Typography>
                        <Typography
                          as="span"
                          variant="small"
                          className="text-xs font-medium text-blue-gray-500"
                        >
                          {description}
                        </Typography>
                      </div>
                    </div>
                  )
                )}
              </CardBody>
            </Card>
          </div>
          <div className="px-4 pb-4">
            <Typography variant="h6" color="blue-gray" className="mb-2">
              Projects
            </Typography>
            <Typography
              variant="small"
              className="font-normal text-blue-gray-500"
            >
              Architects design houses
            </Typography>
            <div className="mt-6 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
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
                      <Link to={route}>
                        <Button variant="outlined" size="sm">
                          view project
                        </Button>
                      </Link>
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
        </CardBody>
      </Card>

      
      <div className="w-2/3">
  <div className="relative right-0">
    <ul
      className="relative flex list-none flex-wrap rounded-xl bg-blue-gray-50/60 p-1"
      data-tabs="tabs"
      role="list"
    >
      <li className="z-30 flex-auto text-center">
        <a
          className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
          data-tab-target=""
          role="tab"
          aria-selected="true"
          aria-controls="app"
        >
          <span className="ml-1">App</span>
        </a>
      </li>
      <li className="z-30 flex-auto text-center">
        <a
          className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
          data-tab-target=""
          role="tab"
          aria-selected="false"
          aria-controls="message"
        >
          <span className="ml-1">Messages</span>
        </a>
      </li>
      <li className="z-30 flex-auto text-center">
        <a
          className="text-slate-700 z-30 mb-0 flex w-full cursor-pointer items-center justify-center rounded-lg border-0 bg-inherit px-0 py-1 transition-all ease-in-out"
          data-tab-target=""
          role="tab"
          aria-selected="false"
          aria-controls="settings"
        >
          <span className="ml-1">Settings</span>
        </a>
      </li>
    </ul>
    <div data-tab-content="" className="p-5">
      <div className="block opacity-100" id="app" role="tabpanel">
        <p className="block font-sans text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
          Because it&apos;s about motivating the doers. Because I&apos;m here to follow
          my dreams and inspire other people to follow their dreams, too.
        </p>
      </div>
      <div className="hidden opacity-0" id="message" role="tabpanel">
        <p className="block font-sans text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
          The reading of all good books is like a conversation with the finest
          minds of past centuries.
        </p>
      </div>
      <div className="hidden opacity-0" id="settings" role="tabpanel">
        <p className="block font-sans text-base font-light leading-relaxed text-inherit text-blue-gray-500 antialiased">
          Comparing yourself to others is the thief of joy.
        </p>
      </div>
    </div>
  </div>
</div>
    </>
  );
}

export default PlayerDetail;
