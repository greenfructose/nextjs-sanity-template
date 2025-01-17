import {formatInTimeZone} from "date-fns-tz";

const Date = ({publishedAt}: {publishedAt: string}) => {
  const date = formatInTimeZone(publishedAt, "America/Chicago", "MMM dd, yyyy");

  return <p className="text-sm">{date}</p>;
};

export default Date;
