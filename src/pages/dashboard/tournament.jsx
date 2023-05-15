import React, { useEffect, useState } from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Button,
  Input,
  Dialog,
  Select,
  Option,
  CardFooter,
  IconButton,
} from "@material-tailwind/react";
import {
  EyeIcon,
  MagnifyingGlassIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  AddTournament,
  GetTournament,
  SetTournamentState,
} from "../../redux/slices/tournament-slice";
import Notification from "../../widgets/layout/notification";
import { debounce } from "lodash";
import { toast } from "react-hot-toast";

export function Tournament() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [filters,setFilters] = useState({});
  const handleOpen = () => setOpen((cur) => !cur);
  const { tournaments, success, err, message } = useSelector(
    (store) => store.tournament
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [notification, setNotification] = useState({
    open: false,
    type: "",
    message: "",
  });

  const handleSubmit = () => {
    dispatch(AddTournament(data));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSearch = debounce((value) => {
    if(value !== "") {
    setFilters((prev) => ({
      ...prev,
      search: value,
    }));
  } else {
    setFilters({});
  }
  }, 500);

  useEffect(() => {
    dispatch(GetTournament(filters));
  }, [filters]);

  useEffect(() => {
    if (err) {
      toast.error(err);
      dispatch(SetTournamentState({ field: "err", value: "" }));
      setOpen(false);
    }

    if (success) {
      setOpen(false);
      dispatch(GetTournament());
      toast.success(message);
      dispatch(SetTournamentState({ field: "success", value: false }));
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
                  Tournament
                </Typography>
              </div>
              <div className="md:w-74 mr-auto md:mr-0">
                <Input
                  type="text"
                  label="Search Tournament"
                  icon={<MagnifyingGlassIcon />}
                  onChange={(event) => handleSearch(event.target.value)}
                />
              </div>
              <div className="mr-auto object-right md:mr-4 md:w-56">
                <Button variant="gradient" size="sm" onClick={handleOpen}>
                  {" "}
                  Add Tournament
                </Button>
              </div>
            </CardHeader>
            <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
              <table className="w-full min-w-[640px] table-auto">
                <thead>
                  <tr>
                    {[
                      "tournament name",
                      "fight Style",
                      "genders",
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
                  {tournaments?.map(
                    (
                      {
                        _id,
                        name,
                        fightStyle,
                        genders,
                      },
                      key
                    ) => {
                      const className = `py-3 px-5 ${
                        key === tournaments?.length - 1
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
                                {name}
                              </Typography>
                            </div>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {fightStyle.join(",")}
                            </Typography>
                          </td>
                          <td className={className}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-bold"
                            >
                              {genders.join(",")}
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
          <Card className="mx-auto w-full max-w-[24rem] justify-center">
            <CardHeader
              variant="gradient"
              color="blue"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Add Tournament
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input label="Tournament Name" size="lg" name="name" onChange={handleChange} />
              <Select
                label="Select Gender"
                onChange={(value) =>
                  handleChange({ target: { name: "genders", value: [value] } })
                }
              >
                <Option value="MALE" >Male</Option>
                <Option value="FEMALE">Female</Option>
              </Select>
              <Select
                label="Select Type"
                onChange={(value) =>
                  handleChange({ target: { name: "fightStyle", value: [value] } })
                }
              >
                <Option value="Kata">Kata</Option>
                <Option value="Kumite">Kumite</Option>
              </Select>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth onClick={handleSubmit}>
                Add Tournament
              </Button>
            </CardFooter>
          </Card>
        </Dialog>
      </div>
    </>
  );
}

export default Tournament;
