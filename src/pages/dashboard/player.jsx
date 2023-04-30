import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Select,
  Option,
  IconButton,
  Input,
  Button,
  Dialog,
  CardFooter,
} from "@material-tailwind/react";
import {
  EyeIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddPlayer,
  GetPlayers,
  SetPlayerState,
} from "@/redux/slices/player-slice";
import Notification from "@/widgets/layout/notification";

export function Player() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const handleOpen = () => setOpen((cur) => !cur);
  const { players, err, success, message } = useSelector(
    (store) => store.player
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notification, setNotification] = useState({
    open: false,
    type: "",
    message: "",
  });

  const handleSubmit = () => {
    dispatch(AddPlayer(data));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  useEffect(() => {
    dispatch(GetPlayers());
  }, []);

  useEffect(() => {
    if (err) {
      setNotification({
        open: true,
        message: err,
        type: "error",
      });
      dispatch(SetPlayerState({ field: "err", value: "" }));
    }

    if (success) {
      setOpen(false);
      dispatch(GetPlayers());
      setNotification({
        open: true,
        message: message,
        type: "success",
      });
      dispatch(SetPlayerState({ field: "success", value: false }));
    }
  }, [err, success]);

  return (
    <>
      <Notification
        notification={notification}
        setNotification={setNotification}
      />
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
              </div>
              <div className="md:w-74 mr-auto md:mr-0">
                <Input
                  type="text"
                  label="Search Player"
                  icon={<MagnifyingGlassIcon />}
                />
              </div>
              <div className="mr-auto object-right md:mr-4 md:w-56">
                <Button variant="gradient" size="sm" onClick={handleOpen}>
                  {" "}
                  Add Player
                </Button>
              </div>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {[
                      "player id",
                      "player name",
                      "matches",
                      "gender",
                      "department",
                      "team",
                      "action",
                    ].map((el) => (
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
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {players.map(
                    (
                      {
                        pkfId,
                        _id,
                        name,
                        totalMatches,
                        user,
                        department,
                        team,
                      },
                      key
                    ) => {
                      const className = `py-3 px-5 ${
                        key === players.length - 1
                          ? ""
                          : "border-b border-blue-gray-50"
                      }`;

                      return (
                        <tr key={_id}>
                          <td className={className}>
                            <div className="flex items-center gap-4">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {pkfId}
                              </Typography>
                            </div>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {name}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {totalMatches}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {user?.gender}
                            </Typography>
                          </td>

                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {department}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {team}
                            </Typography>
                          </td>
                          <td className={className}>
                            <div className="flex w-10/12 gap-2">
                              <IconButton
                                variant="text"
                                onClick={() => navigate("/player/1")}
                              >
                                <EyeIcon className="h-5 w-5 text-inherit" />
                              </IconButton>
                              <IconButton variant="text">
                                <PencilSquareIcon className="h-5 w-5 text-inherit" />
                              </IconButton>
                              <IconButton
                                variant="text"
                                onClick={() => navigate("/profile/1")}
                              >
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
        <Dialog
          size="xs"
          open={open}
          handler={handleOpen}
          className="bg-transparent shadow-none"
        >
          <Card className="mx-auto w-full max-w-[24rem]">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Add Player
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Name"
                size="lg"
                name="name"
                onChange={handleChange}
              />
              <Input
                label="Email"
                size="lg"
                name="email"
                onChange={handleChange}
              />
              <Input
                label="Player ID"
                size="lg"
                name="playerId"
                onChange={handleChange}
              />
              <Select
                label="Gender"
                onChange={(value) =>
                  handleChange({ target: { name: "gender", value } })
                }
              >
                <Option value="MALE">Male</Option>
                <Option value="FEMALE">Female</Option>
              </Select>
              <Select
                label="province/department"
                onChange={(value) =>
                  handleChange({ target: { name: "department", value } })
                }
              >
                <Option value="Punjab">Punjab</Option>
                <Option value="Sindh">Sindh</Option>
                <Option value="KPK">KPK</Option>
                <Option value="Balochistan">Balochistan</Option>
                <Option value="Islamabad">Islamabad</Option>
                <Option value="Wapda">Wapda</Option>
                <Option value="Army">Army</Option>
                <Option value="Police">Police</Option>
                <Option value="HEC">HEC</Option>
                <Option value="Railways">Railways</Option>
              </Select>
              <Input
                label="team"
                size="lg"
                type="text"
                name="team"
                onChange={handleChange}
              />
              <Input
                label="Password"
                size="lg"
                type="password"
                name="password"
                onChange={handleChange}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" onClick={handleSubmit} fullWidth>
                Add Player
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </div>
    </>
  );
}

export default Player;
