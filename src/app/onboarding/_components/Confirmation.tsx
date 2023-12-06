import { useFormContext } from "react-hook-form";
import { type CreateUser } from "~/types/creative";

export function Confirmation() {
  const { getValues } = useFormContext<CreateUser>();
  const { location, firstName, lastName, birthdate, username } = getValues();

  return (
    <div>
      <div>{firstName}</div>
      <div>{lastName}</div>
      <div>{username}</div>
      <div>{location}</div>
      <div>{birthdate.toLocaleDateString()}</div>
    </div>
  );
}
