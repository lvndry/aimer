import { useFormContext } from "react-hook-form";
import { type CreateUser } from "~/types/creative";

export function BasicInfo() {
  const {
    register,
    formState: { errors },
  } = useFormContext<CreateUser>();

  return (
    <div>
      <div>
        <label
          htmlFor="firstName"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Firstname
        </label>
        <input
          type="text"
          id="firstName"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="John"
          {...register("firstName")}
        />
        {errors.firstName?.message && (
          <p className="mt-2 text-sm text-red-400">
            {errors.firstName.message}
          </p>
        )}
      </div>
      <div>
        <label
          htmlFor="surname"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Lastname
        </label>
        <input
          type="text"
          id="lastName"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Doe"
          {...register("lastName")}
        />
        {errors.lastName?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.lastName.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="username"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Username
        </label>
        <input
          type="text"
          id="username"
          className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="johndoe"
          {...register("username")}
        />
        {errors.lastName?.message && (
          <p className="mt-2 text-sm text-red-400">{errors.lastName.message}</p>
        )}
      </div>
      <div>
        <label
          htmlFor="location"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Location
        </label>
        <input
          type="text"
          id="city"
          className="form-input block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          value={"Paris"}
          {...register("location")}
        />
      </div>
      {errors.location?.message && (
        <p className="mt-2 text-sm text-red-400">{errors.location.message}</p>
      )}
      <div>
        <label
          htmlFor="birthdate"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
        >
          Birthdate
        </label>
        <input
          type="date"
          id="birthdate"
          className="form-input block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          {...register("birthdate", {
            setValueAs: (date: string) => new Date(date),
          })}
        />
      </div>
      {errors.birthdate?.message && (
        <p className="mt-2 text-sm text-red-400">{errors.birthdate.message}</p>
      )}
    </div>
  );
}
