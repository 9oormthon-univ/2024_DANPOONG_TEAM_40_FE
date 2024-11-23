import styled from "styled-components";
import ScheduleItem from "./ScheduleItem";

const SubwaySchedule = () => {
  const currentTime = new Date();

  const formatTime = (date: Date) => {
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  const addMinutes = (date: Date, minutes: number) => {
    const newDate = new Date(date);
    newDate.setMinutes(newDate.getMinutes() + minutes);
    return newDate;
  };

  const times = [
    formatTime(addMinutes(currentTime, 0)),
    formatTime(addMinutes(currentTime, 3)),
    formatTime(addMinutes(currentTime, 9)),
  ];

  return (
    <Container>
      <ScheduleItem time={times[0]} minute={"곧 도착"} direction={"신도림행"} />
      <ScheduleItem time={times[1]} minute={"3분"} direction={"성수(외선)행"} />
      <ScheduleItem time={times[2]} minute={"9분"} direction={"성수(외선)행"} />
    </Container>
  );
};

export default SubwaySchedule;

// style
const Container = styled.div`
  width: 288px;
  padding: 20px;

  background-color: #ffffff;
  border-radius: 20px;
  box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.25);

  display: flex;
  flex-direction: column;
  gap: 5px;
`;
