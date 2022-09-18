import ErrorCloud from '../icons/error-cloud.svg';

const ErrorMessage = () => {
  return (
    <div className="flex flex-col items-center gap-y-8 mx-4 px-6 ">
      <ErrorCloud className="w-60" />
      <p className="text-white font-semibold text-3xl text-center md:max-w-3xl">
        Something went wrong. Try again in a few minutes.
      </p>
    </div>
  );
};

export default ErrorMessage;
