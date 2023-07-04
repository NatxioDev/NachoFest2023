import { useEffect, useState } from "react";
import {
  Button,
  ScaleFade,
  Card,
  Center,
  Grid,
  CardBody,
  GridItem,
  Text,
  Box,
  CardHeader,
} from "@chakra-ui/react";

import { AddToCalendarButton } from "add-to-calendar-button-react";

function Countdown() {
  const birthdayDate = new Date(2023, 6, 22, 15, 0, 0);
  let today = new Date();

  let difference;

  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  //

  const getDateDiference = () => {
    today = new Date();
    difference = birthdayDate - today;

    let day = Math.floor(difference / (1000 * 60 * 60 * 24));
    let hour = Math.floor((difference / (1000 * 60 * 60)) % 24);
    let minute = Math.floor((difference / 1000 / 60) % 60);
    let second = Math.floor((difference / 1000) % 60);

    if (day < 10) day = "0" + day;
    if (hour < 10) hour = "0" + hour;
    if (minute < 10) minute = "0" + minute;
    if (second < 10) second = "0" + second;

    setDay(day);
    setHour(hour);
    setMinute(minute);
    setSecond(second);
  };

  useEffect(() => {
    getDateDiference();

    const timer = setInterval(() => {
      getDateDiference();
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <ScaleFade direction="top" in={true}>
      <Card
        align={"center"}
        background={"#f15a24"}
        mx={[5, 10, 100, 400]}
        my={[1, 5]}
      >
        <CardHeader marginBottom={"-20px"}>
          <Text
            fontSize={["xl", "xl", "3xl", "3xl"]}
            fontWeight={"bold"}
            color={"#fff"}
            fontFamily={"Montserrat"}
            align={"center"}
          >
            FECHA:
          </Text>
          <Text
            fontSize={["l", "l", "2xl", "2xl"]}
            fontWeight={"bold"}
            color={"#fff"}
            fontFamily={"Montserrat"}
          >
            22/07/2023 15:00HRS
          </Text>
        </CardHeader>
        <CardBody color={"#fff"}>
          <Grid templateColumns="repeat(4, 1fr)" gap={[5, 5]}>
            <GridItem align="center">
              <Box>
                <Button
                  fontSize={["xl", "2xl"]}
                  fontWeight={"bold"}
                  cursor={"default"}
                  fontFamily={"montserrat, sans-serif"}
                >
                  {day}
                </Button>
                <Text>
                  <strong>Días</strong>
                </Text>
              </Box>
            </GridItem>
            <GridItem align="center">
              <Button
                fontSize={["xl", "2xl"]}
                fontWeight={"bold"}
                cursor={"default"}
                fontFamily={"Montserrat, sans-serif"}
              >
                {hour}
              </Button>
              <Text>
                <strong>Horas</strong>
              </Text>
            </GridItem>
            <GridItem align="center">
              <Button
                fontSize={["xl", "2xl"]}
                fontWeight={"bold"}
                cursor={"default"}
                fontFamily={"Montserrat, sans-serif"}
              >
                {minute}
              </Button>
              <Text>
                <strong>Minutos</strong>
              </Text>
            </GridItem>
            <GridItem align="center">
              <Button
                fontSize={["xl", "2xl"]}
                fontWeight={"bold"}
                cursor={"default"}
                fontFamily={"Montserrat, sans-serif"}
              >
                {" "}
                {second}
              </Button>
              <Text>
                <strong>Segundo(s)</strong>
              </Text>
            </GridItem>
          </Grid>
          <Center mt={5}>
            <AddToCalendarButton
              name="NachoFest 2023"
              startDate="2023-07-22"
              startTime="15:00"
              endTime="23:59"
              timeZone="America/La_Paz"
              location="Calle Hector Ormachea Entre Calle 13 y 14 de Obrajes #5906"
              options="'Google'"
              buttonStyle="flat"
              trigger="click"
              label="Agregar al calendario"
              language="es"
            ></AddToCalendarButton>
          </Center>
        </CardBody>
      </Card>
    </ScaleFade>
  );
}

export default Countdown;
