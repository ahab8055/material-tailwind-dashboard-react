import React, { useEffect } from "react";
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
  CardFooter
} from "@material-tailwind/react";
import {
  EyeIcon,
  PencilSquareIcon,
  MagnifyingGlassIcon,
  TrashIcon
} from "@heroicons/react/24/outline";
import { projectsTableData } from "@/data";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export function Player() {

  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState({})
  const handleOpen = () => setOpen((cur) => !cur);
  const [playerList,setPlayerList] = React.useState([]);
  const navigate = useNavigate();

  const fetchPlayers = () =>{
    const token = localStorage.getItem('token')
    axios.get("http://localhost:4000/v1/player",{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res=>{
      setPlayerList(res.data.players)
    }).catch(err=>{
      console.log(err);
    })
  }

  const handleSubmit = () => {
    const token = localStorage.getItem('token')
    axios.post("http://localhost:4000/v1/player",data,{
      headers: {
        Authorization: `Bearer ${token}`
      }
    }).then(res=>{
      setOpen(false);
      fetchPlayers()
    }).catch(err=>{
      console.log(err);
    })
    console.log({data})
  }

  const handleChange = (event) =>{
    const { name, value } = event.target;
    setData({...data,[name]:value})
  }

  useEffect(()=>{
    fetchPlayers()
  },[])

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
              <Button variant="gradient" size="sm" onClick={handleOpen}> Add Player</Button>
            </div>
          </CardHeader>
          <CardBody className="overflow-x-scroll px-0 pt-0 pb-2">
            <table className="w-full min-w-[640px] table-auto">
              <thead>
                <tr>
                  {["player id", "player name","matches","gender","department","team" ,"action"].map(
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
                {playerList.map(
                  ({ pkfId, _id, name, totalMatches, user, completion }, key) => {
                    const className = `py-3 px-5 ${
                      key === projectsTableData.length - 1
                        ? ""
                        : "border-b border-blue-gray-50"
                    }`;

                    return (
                      <tr key={_id}>
                        <td className={className}>
                          <div className="flex items-center gap-4">
                            {/* <Avatar src={img} alt={name} size="sm" /> */}
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
                            {user?.department}
                          </Typography>
                        </td>
                        <td className={className}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-bold"
                          >
                            {user?.team}
                          </Typography>
                        </td>
                        <td className={className}>
                          <div className="flex w-10/12 gap-2">
                            <IconButton variant="text" onClick={()=>navigate("/player/1")}>
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
            <Input label="Name" size="lg" name="name" onChange={handleChange} />
            <Input label="Email" size="lg" name="email" onChange={handleChange} />
            <Input label="Player ID" size="lg" name="playerId" onChange={handleChange} />
            <Select label="Gender" onChange={(value)=>handleChange({target:{name: "gender",value}})}>
                <Option value="MALE" >Male</Option>
                <Option value="FEMALE">Female</Option>
              </Select>
              <Select label="province/department" onChange={(value)=>handleChange({target:{name: "",value}})}>
                <Option value="MALE" >Punjab</Option>
                <Option value="FEMALE">Sindh</Option>
                <Option value="MALE" >KPK</Option>
                <Option value="FEMALE">Balohistain</Option>
                <Option value="MALE" >Islambad</Option>
                <Option value="FEMALE">Wapda</Option>
                <Option value="MALE" >Army</Option>
                <Option value="FEMALE">Police</Option>
                <Option value="MALE" >HEC</Option>
                <Option value="FEMALE">Railways</Option>
              

              </Select>
              <Input label="team" size="lg" type="text" name="team" onChange={handleChange} />
            <Input label="Password" size="lg" type="password" name="password" onChange={handleChange} />
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

export default Player;
