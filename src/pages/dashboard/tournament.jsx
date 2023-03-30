import React from "react";
import {
  Typography,
  Card,
  CardHeader,
  CardBody,
  Select,
  Option,
  CardFooter,
  Button,
  Input
} from "@material-tailwind/react";

export function Tournament() {
  return (
    <div className="mt-12">
      <div className="mb-4 grid grid-cols-1 gap-6">
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
            <Input label="Tournament Name" size="lg" />
            <Select label="Select Gender">
                <Option>Male</Option>
                <Option>Female</Option>
            </Select>
            <Select label="Select Type">
                <Option>Kata</Option>
                <Option>Kamite</Option>
            </Select>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Add Tournament
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}

export default Tournament;
