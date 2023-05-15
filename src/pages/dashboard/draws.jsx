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
  PencilSquareIcon,
  PrinterIcon,
  DocumentTextIcon
} from "@heroicons/react/24/outline";
import AutoCompleteInput from "../../widgets/layout/autoCompleteInput";
import { useDispatch, useSelector } from "react-redux";
import { GetTournament } from "../../redux/slices/tournament-slice";
import { toast } from "react-hot-toast";
import { AddDraw, GetDraws, SetDrawState } from "../../redux/slices/draw-slice";

export function Draws() {
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({});
  const [activeTournament, setActiveTournament] = useState("");
  const handleOpen = () => setOpen((cur) => !cur);
  const { tournaments } = useSelector((store) => store.tournament);
  const { 
    err, 
    success, 
    message, 
    draws
  } = useSelector((store) => store.draw);
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = () => {
    const tournamentId = tournaments.find(item=>item.name === activeTournament)?._id
    const payload = {
      tournamentId,
      ...data
    }
    dispatch(AddDraw(payload));
  };

  useEffect(() => {
    dispatch(GetTournament());
  }, []);

  useEffect(()=>{
    if(activeTournament) {
      const tournamentId = tournaments.find(item=>item.name === activeTournament)?._id
      dispatch(GetDraws({ tournamentId }));
    }
  },[activeTournament])

  useEffect(() => {
    if (err) {
      toast.error(err)
      dispatch(SetDrawState({ field: "err", value: "" }));
      setOpen(false);
    }

    if (success) {
      setOpen(false);
      const tournamentId = tournaments.find(item=>item.name === activeTournament)?._id
      dispatch(GetDraws({ tournamentId }));
      toast.success(message)
      dispatch(SetDrawState({ field: "success", value: false }));
    }
  }, [err, success]);

  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="flex w-max gap-4">
          <div className="md:w-64">
            <AutoCompleteInput
              options={tournaments?.map((item) => item.name ) || []}
              placeholder="Search Tournament"
              value={activeTournament}
              onChange={(event,value)=>{
                setActiveTournament(value )
              }}
            />
          </div>
          <div className="md:w-64">
            <Button variant="gradient" size="sm" onClick={()=> activeTournament? handleOpen(): toast.error("Select a tournament to add draws")}>
              Add Draw
            </Button>
          </div>
        </div>
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
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pb-2 ">
            <table className="w-full min-w-[640px] table-auto ">
              <thead>
                <tr>
                  {["weight category", "number of players","status", "action"].map(
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
                {draws.map(({ weight, noOfPlayer, status, _id }, key) => {

                  const className = `py-3 px-5 ${
                    key === draws.length - 1
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
                            {weight} kg
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {noOfPlayer}
                          </Typography>
                        </div>
                      </td>
                      <td className={className}>
                        <div className="flex items-center gap-4">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {status}
                          </Typography>
                        </div>
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
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      <Dialog
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto h-full w-full">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-24 place-items-center"
          >
            <Typography variant="h3" color="white">
              Add Draws
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4 h-72">
            <Select
              label="Select Weight"
              onChange={(value) =>
                handleChange({ target: { value, name: "weight" } })
              }
            >
              <Option value="-50">-50KG</Option>
              <Option value="-55">-55KG</Option>
              <Option value="-60">-60KG</Option>
              <Option value="-65">-65KG</Option>
              <Option value="-75">-75KG</Option>
              <Option value="-84">-84KG</Option>
              <Option value="+84">+84KG</Option>
            </Select>
            <Input
              label="Number of Player"
              name="noOfPlayer"
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
  );
}

export default Draws;
